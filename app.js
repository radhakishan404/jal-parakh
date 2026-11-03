/* Jal Parakh — single-page app (hash routes: #/, #/pump/ID, #/qr, #/machine, #/about) */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const SEVERITY = { safe: 0, caution: 1, unsafe: 2 };
  const KEY_PARAMS = ['fluoride', 'tds', 'nitrate', 'bacteria'];
  const COLORS = { safe: '#1E7F5C', caution: '#C27C00', unsafe: '#B3261E' };
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // ?lang=hi in a shared link wins over the saved choice.
  const urlLang = new URLSearchParams(location.search).get('lang');
  let lang = urlLang === 'hi' || urlLang === 'en' ? urlLang : load('jp-lang') || 'en';
  let map = null;
  let markers = {};
  let listFilter = 'all';
  let firstHome = true;

  /* ---------- helpers ---------- */
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.en[k] !== undefined ? I18N.en[k] : k);
  const L = (o) => (o ? (o[lang] !== undefined ? o[lang] : o.en) : '');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const paramByKey = Object.fromEntries(PARAMS.map((p) => [p.key, p]));
  const pumpById = (id) => PUMPS.find((p) => p.id.toLowerCase() === String(id).trim().toLowerCase());
  const noRelax = () => (lang === 'hi' ? 'कोई छूट नहीं' : 'no relaxation');
  const shortName = (p) => L(p.name).replace(/ \(.*\)$/, '');
  const firstSentence = (s) => s.split(/(?<=[.।])\s/)[0];

  function fmtNum(p, v) {
    return Number(v).toLocaleString('en-IN', { minimumFractionDigits: p.decimals, maximumFractionDigits: p.decimals });
  }
  function fmtDate(iso) {
    return new Date(iso + 'T00:00:00').toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  /* ---------- grading against IS 10500 ---------- */
  function within(v, limit, acc) {
    return !!acc && Math.abs(v - limit) <= acc.abs + acc.rel * Math.abs(v);
  }
  function grade(p, v) {
    if (v === undefined || v === null) return null;
    if (p.kind === 'info') return { status: 'info', near: false };
    if (p.kind === 'presence') return { status: v ? 'unsafe' : 'safe', near: false };
    if (p.kind === 'range') {
      return { status: v < p.min || v > p.max ? 'unsafe' : 'safe', near: within(v, p.min, p.acc) || within(v, p.max, p.acc) };
    }
    const status = v <= p.acceptable ? 'safe' : v <= p.permissible ? 'caution' : 'unsafe';
    return { status, near: within(v, p.acceptable, p.acc) || within(v, p.permissible, p.acc) };
  }
  function verdict(test) {
    let worst = 'safe';
    PARAMS.forEach((p) => {
      const g = grade(p, test.v[p.key]);
      if (g && g.status !== 'info' && SEVERITY[g.status] > SEVERITY[worst]) worst = g.status;
    });
    return worst;
  }
  const latest = (pump) => pump.tests[0];
  const pumpStatus = (pump) => verdict(latest(pump));

  /* Worst problem for a pump: used in list rows. */
  function mainIssue(pump) {
    const test = latest(pump);
    const bad = PARAMS.map((p) => ({ p, v: test.v[p.key], g: grade(p, test.v[p.key]) }))
      .filter((x) => x.g && (x.g.status === 'unsafe' || x.g.status === 'caution'))
      .sort((a, b) => SEVERITY[b.g.status] - SEVERITY[a.g.status] || keyRank(a.p.key) - keyRank(b.p.key));
    return bad;
  }
  function keyRank(k) {
    const i = KEY_PARAMS.indexOf(k);
    return i < 0 ? 99 : i;
  }

  function limitText(p) {
    if (p.kind === 'presence') return t('limitAbsent');
    if (p.kind === 'info') return t('noLimit');
    if (p.kind === 'range') return `${p.min} to ${p.max}`;
    const u = p.unit ? ' ' + p.unit : '';
    if (p.acceptable === p.permissible) return `≤ ${p.acceptable}${u}, ${noRelax()}`;
    return `≤ ${p.acceptable}${u} (${lang === 'hi' ? 'अधिकतम' : 'up to'} ${p.permissible} ${lang === 'hi' ? 'यदि दूसरा स्रोत न हो' : 'if no other source'})`;
  }

  function haversineKm(a, b) {
    const R = 6371, toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const fmtKm = (km) => (km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`);

  const ICON = {
    safe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    caution: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5v7M12 17.5h.01"/></svg>',
    unsafe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>',
  };
  const pill = (status) => `<span class="pill ${status}">${ICON[status] || ''}${t(status)}</span>`;

  /* A small handpump glyph, used for the survey row and map key. */
  const pumpGlyph = (cls) => `<svg class="glyph ${cls || ''}" viewBox="0 0 40 48" aria-hidden="true">
      <rect x="15" y="10" width="8" height="30" rx="2"/>
      <rect x="11" y="6" width="16" height="8" rx="2"/>
      <path d="M27 9 L38 3" class="g-handle"/>
      <path d="M15 22 H6 v3" class="g-spout"/>
      <rect x="7" y="40" width="26" height="5" rx="1.5"/>
    </svg>`;

  /* ---------- chrome ---------- */
  function renderChrome(route) {
    document.documentElement.lang = lang;
    document.title = lang === 'hi' ? 'जल परख, उदयपुर के हैंडपंपों की जल गुणवत्ता' : 'Jal Parakh, handpump water quality in Udaipur';
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-l]').forEach((el) => { el.textContent = L(CONFIG[el.dataset.l]); });
    document.getElementById('demoBanner').hidden = !CONFIG.demoData;
    document.querySelectorAll('.nav a').forEach((a) => {
      const r = a.dataset.route;
      a.classList.toggle('active', r === route || (r === 'home' && route === 'pump'));
      if (a.classList.contains('active')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.body.dataset.route = route;
  }

  /* ---------- hero illustration: cross-section of the ground under a handpump ---------- */
  function heroArt() {
    const crack = (d, extra) => `<path class="crack ${extra || ''}" d="${d}"/>`;
    const ion = (x, y, sym, cls) => `<g class="ion ${cls}" transform="translate(${x} ${y})"><circle r="11"/><text y="4">${sym}</text></g>`;
    return `
    <svg class="ground" viewBox="0 0 1200 560" role="img" aria-label="${esc(t('artLegend'))}">
      <defs>
        <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2160"/><stop offset="1" stop-color="#2B3690"/></linearGradient>
        <pattern id="pGranite" width="26" height="22" patternUnits="userSpaceOnUse"><path d="M3 5l4 2M14 14l5-2M20 4l2 4M8 17l3 1" stroke="#5E5A6B" stroke-width="1.4" stroke-linecap="round"/></pattern>
        <pattern id="pSoil" width="14" height="10" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.1" fill="#9C8256"/><circle cx="10" cy="7" r=".9" fill="#9C8256"/></pattern>
        <clipPath id="cUnder"><rect x="0" y="232" width="1200" height="328"/></clipPath>
      </defs>
      <rect width="1200" height="236" fill="url(#gSky)"/>
      <path class="hill far" d="M0 200 L70 168 L140 182 L230 120 L310 160 L390 138 L470 176 L560 150 L640 186 L700 170 L760 196 L880 150 L960 172 L1040 126 L1120 160 L1200 140 V236 H0 Z"/>
      <path class="hill near" d="M0 222 L90 204 L170 214 L260 190 L360 210 L470 198 L600 216 L700 206 L940 212 L1060 196 L1200 208 V236 H0 Z"/>
      <g class="sun"><circle cx="1010" cy="70" r="26"/></g>

      <g clip-path="url(#cUnder)">
        <rect class="s-weathered" x="0" y="232" width="1200" height="328"/>
        <rect class="s-soil" x="0" y="232" width="1200" height="44"/>
        <rect x="0" y="232" width="1200" height="44" fill="url(#pSoil)"/>
        <path class="s-weathered" d="M0 276 C200 268 360 290 600 282 S1000 270 1200 280 V560 H0 Z"/>
        <path class="s-granite" d="M0 350 C220 340 420 362 640 352 S1020 342 1200 352 V560 H0 Z"/>
        <rect x="0" y="340" width="1200" height="136" fill="url(#pGranite)" opacity=".55"/>
        <path class="s-hard" d="M0 474 C260 466 520 484 760 474 S1080 466 1200 474 V560 H0 Z"/>
        <path class="table" d="M0 318 C240 310 470 328 700 318 S1040 308 1200 318"/>
        ${crack('M120 362 l40 22 l30 -6 l46 30 l58 4 l40 26')}
        ${crack('M380 358 l26 30 l50 10 l34 34 l70 8 l60 24 l90 6')}
        ${crack('M600 372 l60 18 l40 30 l60 4 l60 22 l50 2')}
        ${crack('M870 360 l-30 28 l-20 46 l-14 24')}
        ${crack('M960 380 l40 26 l70 8 l60 30')}
        ${crack('M690 446 l60 -6 l50 12 l30 -4')}
        ${ion(470, 404, 'F⁻', 'f')}${ion(700, 418, 'F⁻', 'f')}${ion(950, 438, 'F⁻', 'f')}${ion(250, 404, 'F⁻', 'f')}
        ${ion(560, 296, 'NO₃⁻', 'n')}${ion(330, 300, 'NO₃⁻', 'n')}
        <path class="seep" d="M330 240 V286 M560 240 V282 M140 240 V270"/>
      </g>
      <line class="surface" x1="0" y1="233" x2="1200" y2="233"/>

      <g class="field" aria-hidden="true">
        ${[110, 140, 170, 300, 330, 360, 530, 560, 590].map((x) => `<path d="M${x} 232 v-14 m0 4 l-6 -6 m6 2 l6 -7"/>`).join('')}
      </g>
      <g class="hut" aria-hidden="true"><path d="M630 232 v-24 h46 v24"/><path d="M622 210 l31 -20 l31 20 z"/><rect x="646" y="216" width="12" height="16"/></g>

      <g class="pump">
        <path class="pipe" d="M820 468 V236"/>
        <path class="pipe-water" d="M820 468 V176 H786" pathLength="1"/>
        <rect class="platform" x="768" y="226" width="110" height="10" rx="2"/>
        <rect class="body" x="811" y="128" width="18" height="100" rx="3"/>
        <rect class="head" x="801" y="116" width="38" height="20" rx="4"/>
        <path class="handle" d="M838 124 L936 96"/>
        <path class="spout" d="M811 172 H780 v8"/>
        <circle class="drop" cx="783" cy="188" r="4.5"/>
      </g>

      <g class="art-label">
        <text x="28" y="262">${esc(t('artTopsoil'))}</text>
        <text x="28" y="306">${esc(t('artWeathered'))}</text>
        <text x="28" y="372">${esc(t('artGranite'))}</text>
        <text x="28" y="516">${esc(t('artHard'))}</text>
        <text x="1172" y="312" text-anchor="end" class="soft">${esc(t('artTable'))}</text>
        <path class="leader" d="M834 500 H892"/><text x="900" y="505">${esc(t('artBore'))}</text>
      </g>
    </svg>`;
  }

  /* ---------- home ---------- */
  function pumpRow(pump, distanceKm) {
    const s = pumpStatus(pump);
    const issues = mainIssue(pump);
    const top = issues[0];
    const issueText = top
      ? `${esc(shortName(top.p))} ${top.p.kind === 'presence' ? (lang === 'hi' ? 'मिले' : 'found') : esc(fmtNum(top.p, top.v) + ' ' + top.p.unit)}${issues.length > 1 ? ` <span class="more">+${issues.length - 1}</span>` : ''}`
      : esc(t('noIssue'));
    return `
      <a class="pump-row ${s}" href="#/pump/${encodeURIComponent(pump.id)}" data-id="${pump.id}">
        <span class="pr-mark" aria-hidden="true"></span>
        <span class="pr-main">
          <span class="pr-name">${esc(L(pump.village))}</span>
          <span class="pr-meta">${esc(L(pump.block))}, ${esc(L(pump.district))}${distanceKm !== undefined ? `<b class="pr-dist">${fmtKm(distanceKm)} ${t('away')}</b>` : ''}</span>
        </span>
        <span class="pr-issue">${issueText}</span>
        ${pill(s)}
      </a>`;
  }

  function renderHome() {
    const counts = { safe: 0, caution: 0, unsafe: 0 };
    PUMPS.forEach((p) => counts[pumpStatus(p)]++);
    const blocks = new Set(PUMPS.map((p) => p.block.en)).size;
    const ordered = PUMPS.slice().sort((a, b) => SEVERITY[pumpStatus(b)] - SEVERITY[pumpStatus(a)] || a.id.localeCompare(b.id));
    const filtered = ordered.filter((p) => listFilter === 'all' || pumpStatus(p) === listFilter);
    const summary = t('surveySummary')
      .replace('{n}', `<b>${PUMPS.length}</b>`).replace('{b}', blocks)
      .replace('{u}', `<b class="t-unsafe">${counts.unsafe}</b>`)
      .replace('{c}', `<b class="t-caution">${counts.caution}</b>`)
      .replace('{s}', `<b class="t-safe">${counts.safe}</b>`);

    app.innerHTML = `
      <section class="hero ${firstHome && !reduceMotion ? 'animate' : ''}">
        <div class="wrap hero-copy">
          <h1>${t('heroTitle')}</h1>
          <p class="hero-lead">${t('heroText')}</p>
        </div>
        <div class="hero-art">${heroArt()}</div>
        <div class="art-key wrap" aria-hidden="true">
          <span><i class="ion-dot f">F⁻</i>${t('artF')}</span>
          <span><i class="ion-dot n">NO₃⁻</i>${t('artN')}</span>
        </div>
      </section>

      <section class="wrap check">
        <div class="check-panel">
          <h2>${t('checkTitle')}</h2>
          <div class="check-grid">
            <form id="idForm" class="check-form" autocomplete="off">
              <label for="pumpId">${t('searchId')}</label>
              <p class="hint">${lang === 'hi' ? 'ID पंप के स्टिकर पर छपी है।' : 'The ID is printed on the pump’s sticker.'}</p>
              <div class="field-row">
                <input id="pumpId" list="pumpIds" placeholder="${t('searchIdPh')}" required spellcheck="false">
                <datalist id="pumpIds">${PUMPS.map((p) => `<option value="${p.id}">${esc(L(p.village))}, ${esc(L(p.block))}</option>`).join('')}</datalist>
                <button class="btn primary" type="submit">${t('btnFind')}</button>
              </div>
            </form>
            <form id="locForm" class="check-form" autocomplete="off">
              <label for="lat">${t('searchLoc')}</label>
              <p class="hint">${lang === 'hi' ? 'अक्षांश और देशांतर लिखें, या दोनों एक साथ पेस्ट करें।' : 'Type latitude and longitude, or paste both together.'}</p>
              <div class="field-row">
                <input id="lat" inputmode="decimal" placeholder="${t('lat')}" aria-label="${t('lat')}">
                <input id="lng" inputmode="decimal" placeholder="${t('lng')}" aria-label="${t('lng')}">
              </div>
              <div class="field-row">
                <button class="btn primary grow" type="submit">${t('btnNearest')}</button>
                <button class="btn quiet" type="button" id="myLoc">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/></svg>
                  ${t('btnMyLoc')}
                </button>
              </div>
            </form>
          </div>
          <div id="searchMsg" class="search-msg" role="status" aria-live="polite"></div>
          <div id="results" class="results" hidden></div>
        </div>
      </section>

      <section class="wrap survey">
        <div class="survey-text">
          <h2>${t('surveyTitle')}</h2>
          <p class="survey-sum">${summary}</p>
          <p class="hint">${t('surveyHint')}</p>
        </div>
        <div class="survey-row" role="list">
          ${ordered.map((p) => {
            const s = pumpStatus(p);
            return `<a role="listitem" class="survey-pump ${s}" href="#/pump/${encodeURIComponent(p.id)}" title="${esc(L(p.village))}: ${t(s)}">
              ${pumpGlyph()}
              <span>${esc(L(p.village))}</span>
            </a>`;
          }).join('')}
        </div>
      </section>

      <section class="wrap explore">
        <div class="explore-map">
          <h2>${t('mapTitle')}</h2>
          <div id="map" class="map" aria-label="${t('mapTitle')}"></div>
        </div>
        <div class="explore-list">
          <div class="list-head">
            <h2>${t('listTitle')}</h2>
            <div class="seg" role="group" aria-label="Filter">
              ${['all', 'unsafe', 'caution', 'safe'].map((f) => `<button type="button" class="${f} ${listFilter === f ? 'on' : ''}" aria-pressed="${listFilter === f}" data-filter="${f}">${f === 'all' ? t('filterAll') : t(f)}</button>`).join('')}
            </div>
          </div>
          <div class="pump-list">${filtered.map((p) => pumpRow(p)).join('')}</div>
        </div>
      </section>`;
    firstHome = false;

    bindSearch();
    app.querySelectorAll('.seg button').forEach((b) => b.addEventListener('click', () => {
      listFilter = b.dataset.filter;
      app.querySelectorAll('.seg button').forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
      app.querySelector('.pump-list').innerHTML = ordered.filter((p) => listFilter === 'all' || pumpStatus(p) === listFilter).map((p) => pumpRow(p)).join('');
      bindRowHover(app.querySelector('.pump-list'));
    }));
    drawMap();
    bindRowHover(app.querySelector('.pump-list'));
  }

  function bindSearch() {
    const msg = document.getElementById('searchMsg');
    document.getElementById('idForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = document.getElementById('pumpId').value;
      const pump = pumpById(raw);
      if (pump) location.hash = '#/pump/' + encodeURIComponent(pump.id);
      else msg.innerHTML = `<span class="err">${t('notFound')} “${esc(raw)}”. ${lang === 'hi' ? 'ID ऐसी दिखती है: UDR-MVL-002' : 'IDs look like UDR-MVL-002.'}</span>`;
    });
    const latEl = document.getElementById('lat'), lngEl = document.getElementById('lng');
    latEl.addEventListener('input', () => {
      const m = latEl.value.match(/^\s*(-?\d+(?:\.\d+)?)\s*[,\s]\s*(-?\d+(?:\.\d+)?)\s*$/);
      if (m) { latEl.value = m[1]; lngEl.value = m[2]; }
    });
    document.getElementById('locForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const lat = parseFloat(latEl.value), lng = parseFloat(lngEl.value);
      if (!isFinite(lat) || !isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
        msg.innerHTML = `<span class="err">${t('badCoords')}</span>`;
        return;
      }
      msg.textContent = '';
      showNearest({ lat, lng });
    });
    document.getElementById('myLoc').addEventListener('click', () => {
      if (!navigator.geolocation) { msg.innerHTML = `<span class="err">${t('locError')}</span>`; return; }
      msg.textContent = t('locating');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          latEl.value = pos.coords.latitude.toFixed(5);
          lngEl.value = pos.coords.longitude.toFixed(5);
          msg.textContent = '';
          showNearest({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        () => { msg.innerHTML = `<span class="err">${t('locError')}</span>`; },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  }

  function showNearest(point) {
    const ranked = PUMPS.map((p) => ({ p, d: haversineKm(point, p) })).sort((a, b) => a.d - b.d).slice(0, 3);
    const box = document.getElementById('results');
    const far = ranked[0].d > CONFIG.nearbyKm;
    box.hidden = false;
    box.innerHTML = `
      <h3>${t('nearestTitle')}</h3>
      ${far ? `<p class="callout warn">${t('farWarn').replace('{km}', CONFIG.nearbyKm)}</p>` : ''}
      <div class="pump-list">${ranked.map(({ p, d }) => pumpRow(p, d)).join('')}</div>`;
    bindRowHover(box);
    if (map) {
      if (map._searchMarker) map.removeLayer(map._searchMarker);
      map._searchMarker = Lf.circleMarker([point.lat, point.lng], { radius: 8, color: '#1B2160', weight: 3, fillColor: '#fff', fillOpacity: 1 })
        .addTo(map).bindTooltip(lang === 'hi' ? 'आपकी खोजी गई जगह' : 'The point you searched');
      map.fitBounds(Lf.latLngBounds([[point.lat, point.lng], [ranked[0].p.lat, ranked[0].p.lng]]).pad(0.8), { maxZoom: 13 });
    }
  }

  /* Leaflet's global is `L`, which this file uses for translation. */
  const Lf = window.L;

  function drawMap() {
    if (map) { map.remove(); map = null; }
    markers = {};
    const el = document.getElementById('map');
    if (!el) return;
    if (!Lf) { el.innerHTML = `<p class="map-off">${lang === 'hi' ? 'नक्शा लोड नहीं हुआ। इंटरनेट कनेक्शन जाँचें।' : 'The map could not load. Check your internet connection.'}</p>`; return; }
    map = Lf.map(el, { scrollWheelZoom: false, zoomControl: true });
    Lf.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    const pts = [];
    PUMPS.forEach((p) => {
      const s = pumpStatus(p);
      pts.push([p.lat, p.lng]);
      markers[p.id] = Lf.circleMarker([p.lat, p.lng], { radius: 9, color: '#fff', weight: 2.5, fillColor: COLORS[s], fillOpacity: 1 })
        .addTo(map)
        .bindTooltip(`<b>${esc(L(p.village))}</b><br>${t(s)}`, { direction: 'top', offset: [0, -8] })
        .on('click', () => { location.hash = '#/pump/' + encodeURIComponent(p.id); });
    });
    map.fitBounds(pts, { padding: [28, 28] });
  }

  function bindRowHover(root) {
    if (!root) return;
    root.querySelectorAll('.pump-row').forEach((row) => {
      const m = () => markers[row.dataset.id];
      const on = () => { if (m()) { m().setStyle({ radius: 14, weight: 4 }); m().bringToFront(); m().openTooltip(); } };
      const off = () => { if (m()) { m().setStyle({ radius: 9, weight: 2.5 }); m().closeTooltip(); } };
      row.addEventListener('mouseenter', on); row.addEventListener('focus', on);
      row.addEventListener('mouseleave', off); row.addEventListener('blur', off);
    });
  }

  /* ---------- pump report ---------- */
  function scaleFor(p, v) {
    if (p.kind === 'range') return { lo: 5, hi: 10, segs: [[5, p.min, 'unsafe'], [p.min, p.max, 'safe'], [p.max, 10, 'unsafe']], ticks: [p.min, p.max] };
    const hi = Math.max(p.permissible * 1.6, v * 1.12);
    const segs = p.acceptable === p.permissible
      ? [[0, p.acceptable, 'safe'], [p.acceptable, hi, 'unsafe']]
      : [[0, p.acceptable, 'safe'], [p.acceptable, p.permissible, 'caution'], [p.permissible, hi, 'unsafe']];
    const ticks = p.acceptable === p.permissible ? [p.acceptable] : [p.acceptable, p.permissible];
    return { lo: 0, hi, segs, ticks };
  }

  function gaugeHtml(p, v, g, withTicks) {
    if (p.kind === 'presence' || p.kind === 'info') return '';
    const { lo, hi, segs, ticks } = scaleFor(p, v);
    const pct = (x) => Math.max(0, Math.min(100, ((x - lo) / (hi - lo)) * 100));
    return `
      <div class="gauge ${withTicks ? 'with-ticks' : ''}" aria-hidden="true">
        <div class="track">${segs.map(([a, b, s]) => `<span class="seg-${s}" style="left:${pct(a)}%;width:${pct(b) - pct(a)}%"></span>`).join('')}</div>
        <span class="needle ${g.status}" style="left:${pct(v)}%"></span>
        ${withTicks ? ticks.map((x) => `<span class="tick" style="left:${pct(x)}%">${x}</span>`).join('') : ''}
      </div>`;
  }

  function trendHtml(p, v, prev) {
    if (prev === undefined || p.kind === 'presence' || p.kind === 'info') return '';
    const diff = v - prev;
    if (Math.abs(diff) < Math.pow(10, -p.decimals) / 2) return `<span class="trend">${lang === 'hi' ? 'मई जैसा ही' : 'Same as May'}</span>`;
    const up = diff > 0;
    return `<span class="trend ${up ? 'up' : 'down'}">${up ? '↑' : '↓'} ${fmtNum(p, Math.abs(diff))} ${lang === 'hi' ? (up ? 'मई से ज़्यादा' : 'मई से कम') : (up ? 'higher than May' : 'lower than May')}</span>`;
  }

  function stampSvg(status, date) {
    const word = { safe: { en: 'Safe', hi: 'सुरक्षित' }, caution: { en: 'Caution', hi: 'सावधानी' }, unsafe: { en: 'Not safe', hi: 'असुरक्षित' } }[status];
    const ring = `${lang === 'hi' ? 'जल परख' : 'JAL PARAKH'} ✦ ${t('stampTested').toUpperCase()} ${fmtDate(date).toUpperCase()} ✦ IS 10500 ✦ `;
    return `
      <svg class="stamp ${status}" viewBox="0 0 220 220" role="img" aria-label="${esc(L(word))}">
        <defs><path id="stampRing" d="M110 110 m-82 0 a82 82 0 1 1 164 0 a82 82 0 1 1 -164 0"/></defs>
        <circle cx="110" cy="110" r="104" class="st-outer"/>
        <circle cx="110" cy="110" r="68" class="st-inner"/>
        <text class="st-ring"><textPath href="#stampRing" textLength="510">${esc(ring)}</textPath></text>
        <text x="110" y="${status === 'unsafe' && lang === 'en' ? 104 : 118}" text-anchor="middle" class="st-word ${lang}">${status === 'unsafe' && lang === 'en' ? '<tspan x="110">Not</tspan><tspan x="110" dy="34">safe</tspan>' : esc(L(word))}</text>
      </svg>`;
  }

  const ADVICE = { fluoride: 'adviceFluoride', nitrate: 'adviceNitrate', bacteria: 'adviceBacteria', tds: 'adviceTds', iron: 'adviceIron', hardness: 'adviceHardness', chloride: 'adviceChloride', ph: 'advicePh' };

  function renderPump(id) {
    const pump = pumpById(decodeURIComponent(id || ''));
    if (!pump) {
      app.innerHTML = `<div class="wrap empty"><h1>${t('notFound')} “${esc(decodeURIComponent(id || ''))}”</h1><p>${lang === 'hi' ? 'स्टिकर पर छपी ID जाँचें, या सूची से पंप चुनें।' : 'Check the ID printed on the sticker, or choose a pump from the list.'}</p><p><a class="btn primary" href="#/">${t('back')}</a></p></div>`;
      return;
    }
    const test = latest(pump);
    const prev = pump.tests[1];
    const s = verdict(test);
    const vTitle = { safe: 'verdictSafe', caution: 'verdictCaution', unsafe: 'verdictUnsafe' }[s];
    const graded = PARAMS.map((p) => ({ p, v: test.v[p.key], g: grade(p, test.v[p.key]) })).filter((x) => x.g);
    const advice = graded.filter((x) => (x.g.status === 'unsafe' || x.g.status === 'caution') && ADVICE[x.p.key])
      .sort((a, b) => SEVERITY[b.g.status] - SEVERITY[a.g.status]);

    const keyTiles = KEY_PARAMS.map((k) => graded.find((x) => x.p.key === k)).filter(Boolean).map(({ p, v, g }) => `
      <article class="key ${g.status}">
        <header>
          <h3>${esc(L(p.name))}</h3>
          ${pill(g.status)}
        </header>
        <p class="key-val">${p.kind === 'presence'
          ? `<span class="big">${v ? t('present') : t('absent')}</span>`
          : `<span class="big">${fmtNum(p, v)}</span><span class="unit">${esc(p.unit)}</span>`}</p>
        ${p.kind === 'presence'
          ? `<div class="vial ${v ? 'black' : 'clear'}" aria-hidden="true"><span></span></div>`
          : gaugeHtml(p, v, g, true)}
        <p class="key-limit">${esc(t('colLimit'))}: ${limitText(p)}</p>
        ${trendHtml(p, v, prev && prev.v[p.key])}
        ${g.near ? `<p class="near">${t('nearLimit')}</p>` : ''}
        <p class="key-risk">${esc(firstSentence(L(p.risk)))}</p>
      </article>`).join('');

    const otherRows = graded.filter((x) => !KEY_PARAMS.includes(x.p.key)).map(({ p, v, g }) => `
      <tr class="${g.status}">
        <th scope="row">${esc(L(p.name))}<span class="sub">${esc(L(p.method))}</span></th>
        <td class="num">${fmtNum(p, v)} <span class="unit">${esc(p.unit)}</span>${g.status !== 'info' ? gaugeHtml(p, v, g, false) : ''}</td>
        <td>${limitText(p)}</td>
        <td>${g.status === 'info' ? `<span class="muted">${t('info')}</span>` : pill(g.status)}${g.near ? `<span class="near-dot" title="${esc(t('nearLimit'))}">!</span>` : ''}</td>
      </tr>`).join('');

    app.innerHTML = `
      <section class="report-top ${s}">
        <div class="wrap">
          <a class="back" href="#/">${t('back')}</a>
          <div class="report-grid">
            <div class="report-id">
              <p class="pid">${esc(pump.id)}</p>
              <h1>${esc(L(pump.village))}</h1>
              <p class="place">${esc(L(pump.block))} ${lang === 'hi' ? 'ब्लॉक' : 'block'}, ${esc(L(pump.district))}</p>
              <div class="verdict-text">
                <h2>${t(vTitle)}</h2>
                <p>${t(vTitle + 'Text')}</p>
              </div>
            </div>
            <div class="stamp-wrap ${reduceMotion ? '' : 'press'}">${stampSvg(s, test.date)}</div>
          </div>
        </div>
      </section>

      <div class="wrap report-body">
        <div class="report-cols">
          <div>
            ${advice.length ? `
            <section class="advice">
              <h2>${t('whatToDo')}</h2>
              <ul>${advice.map((a) => `<li class="${a.g.status}"><b>${esc(shortName(a.p))}.</b> ${t(ADVICE[a.p.key])}</li>`).join('')}</ul>
              ${s === 'unsafe' ? `<p class="advice-foot">${t('adviceReport')}</p>` : ''}
            </section>` : ''}
            ${pump.note ? `<blockquote class="note"><p>${esc(L(pump.note))}</p><cite>${t('fieldNote')}, ${esc(test.team)}</cite></blockquote>` : ''}
          </div>
          <dl class="pump-facts">
            <div><dt>${t('lastTested')}</dt><dd>${fmtDate(test.date)}</dd></div>
            <div><dt>${t('coords')}</dt><dd>${pump.lat.toFixed(4)}, ${pump.lng.toFixed(4)} <a href="https://www.google.com/maps?q=${pump.lat},${pump.lng}" target="_blank" rel="noopener">${t('openMap')}</a></dd></div>
            <div><dt>${t('depth')}</dt><dd>${pump.depthM} m</dd></div>
            <div><dt>${t('installed')}</dt><dd>${pump.installed}</dd></div>
            <div><dt>${t('households')}</dt><dd>${pump.households}</dd></div>
          </dl>
        </div>

        <section class="keys-section">
          <div class="section-head">
            <h2>${t('keyReadings')}</h2>
            <p>${t('keyReadingsText')}</p>
          </div>
          <div class="keys">${keyTiles}</div>
        </section>

        <section>
          <div class="section-head row">
            <h2>${t('otherReadings')}</h2>
            <a href="#/machine">${t('readMachine')}</a>
          </div>
          <div class="table-wrap"><table class="readings">
            <thead><tr><th>${t('colReading')}</th><th>${t('colResult')}</th><th>${t('colLimit')}</th><th>${t('colStatus')}</th></tr></thead>
            <tbody>${otherRows}</tbody>
          </table></div>
        </section>

        <div class="report-bottom">
          <section class="history">
            <h2>${t('historyTitle')}</h2>
            <ol class="timeline">${pump.tests.map((tst, i) => {
              const vs = verdict(tst);
              return `<li class="${vs}"><span class="tl-date">${fmtDate(tst.date)}</span><span class="tl-what">${i === 0 ? (lang === 'hi' ? 'मानसून के बाद' : 'After the monsoon') : (lang === 'hi' ? 'मानसून से पहले' : 'Before the monsoon')}, ${esc(tst.team)}</span>${pill(vs)}</li>`;
            }).join('')}</ol>
            <p class="hint">${t('historyNote')}</p>
          </section>
          <section class="sticker-mini">
            <h2>${t('stickerTitle')}</h2>
            <div class="sticker-wrap">${stickerHtml(pump)}</div>
            <button class="btn quiet" id="printOne" type="button">${t('printSticker')}</button>
          </section>
        </div>
      </div>`;

    fillQRs();
    document.getElementById('printOne').addEventListener('click', () => printStickers([pump]));
  }

  /* ---------- QR stickers ---------- */
  function baseUrl() { return load('jp-base') || location.href.split('#')[0]; }
  const pumpUrl = (pump) => baseUrl() + '#/pump/' + encodeURIComponent(pump.id);

  function stickerHtml(pump) {
    return `
      <div class="sticker">
        <div class="sticker-band">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3c4.8 6.2 9 11 9 15.8a9 9 0 0 1-18 0C7 14 11.2 9.2 16 3z"/></svg>
          <span>Jal Parakh <i lang="hi">जल परख</i></span>
        </div>
        <div class="qr" data-url="${esc(pumpUrl(pump))}"></div>
        <p class="sticker-scan">${esc(I18N.en.qrScan)}</p>
        <p class="sticker-scan hi" lang="hi">${esc(I18N.hi.qrScanHi)}</p>
        <p class="sticker-id">${esc(pump.id)}</p>
        <p class="sticker-place">${esc(pump.village.en)}, ${esc(pump.block.en)} <span lang="hi">${esc(pump.village.hi)}</span></p>
      </div>`;
  }

  function fillQRs(root) {
    (root || document).querySelectorAll('.qr[data-url]').forEach((el) => {
      el.innerHTML = '';
      if (typeof QRCode === 'undefined') { el.textContent = el.dataset.url; el.classList.add('qr-fallback'); return; }
      new QRCode(el, { text: el.dataset.url, width: 168, height: 168, colorDark: '#1B2160', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
      el.title = el.dataset.url;
    });
  }

  function printStickers(pumps) {
    const sheet = document.getElementById('printSheet');
    sheet.innerHTML = pumps.map(stickerHtml).join('');
    fillQRs(sheet);
    setTimeout(() => window.print(), 300); // qrcodejs swaps canvas for <img> after a tick
  }

  function renderQr() {
    const isLocal = /^(file:|https?:\/\/(localhost|127\.0\.0\.1|\[::1\]))/i.test(baseUrl());
    app.innerHTML = `
      <section class="band"><div class="wrap band-inner">
        <h1>${t('qrTitle')}</h1>
        <p class="hero-lead">${t('qrIntro')}</p>
      </div></section>
      <div class="wrap">
        <div class="qr-controls">
          <label for="baseUrl">${t('qrBase')}</label>
          <div class="field-row">
            <input id="baseUrl" type="url" value="${esc(baseUrl())}" spellcheck="false">
            <button class="btn primary" id="printAll" type="button">${t('qrPrintAll')}</button>
          </div>
          <p class="hint">${t('qrBaseHelp')}</p>
          ${isLocal ? `<p class="callout warn">${t('qrLocalWarn')}</p>` : ''}
          <p class="callout">${t('qrNoStatus')}</p>
        </div>
        <div class="sticker-grid">${PUMPS.map((p) => `<div class="sticker-cell">${stickerHtml(p)}<button class="btn quiet small" type="button" data-print="${p.id}">${t('printSticker')}</button></div>`).join('')}</div>
      </div>`;
    fillQRs();
    const input = document.getElementById('baseUrl');
    input.addEventListener('change', () => {
      let v = input.value.trim();
      if (v && !/^https?:\/\//i.test(v) && !/^file:/i.test(v)) v = 'https://' + v;
      v = v.split('#')[0];
      if (v) save('jp-base', v); else { try { localStorage.removeItem('jp-base'); } catch (e) { /* ignore */ } }
      renderQr();
    });
    document.getElementById('printAll').addEventListener('click', () => printStickers(PUMPS));
    app.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => printStickers([pumpById(b.dataset.print)])));
  }

  /* ---------- content pages ---------- */
  function renderProse(html) {
    const clean = html.replace(/<p class="kicker">[\s\S]*?<\/p>/g, '');
    const m = clean.match(/<section class="page-hero">([\s\S]*?)<\/section>/);
    const hero = m ? m[1] : '';
    const rest = m ? clean.replace(m[0], '') : clean;
    app.innerHTML = `
      <section class="band"><div class="wrap band-inner">${hero.replace('class="lead"', 'class="hero-lead"')}</div></section>
      <div class="wrap prose">${rest}</div>`;
  }

  function renderMachine() { renderProse(PAGES.machine[lang]); }

  function renderAbout() {
    renderProse(PAGES.about[lang]);
    const rows = PARAMS.filter((p) => p.kind !== 'info').map((p) => {
      let acc, perm;
      if (p.kind === 'presence') { acc = t('limitAbsent'); perm = noRelax(); }
      else if (p.kind === 'range') { acc = `${p.min} to ${p.max}`; perm = noRelax(); }
      else { acc = `${p.acceptable} ${p.unit}`; perm = p.acceptable === p.permissible ? noRelax() : `${p.permissible} ${p.unit}`; }
      return `<tr><td>${esc(L(p.name))}</td><td class="num">${acc}</td><td class="num">${perm}</td><td>${esc(firstSentence(L(p.risk || p.about)))}</td></tr>`;
    }).join('');
    document.getElementById('standardsTable').innerHTML = `
      <div class="table-wrap"><table class="spec">
        <thead><tr><th>${lang === 'hi' ? 'मानक' : 'Parameter'}</th><th>${t('limitAcc')}</th><th>${t('limitPerm')}</th><th>${lang === 'hi' ? 'मुख्य ख़तरा' : 'Main concern'}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`;
  }

  /* ---------- router ---------- */
  function route() {
    const [page, arg] = location.hash.replace(/^#\/?/, '').split('/');
    if (map) { map.remove(); map = null; }
    const r = page || 'home';
    renderChrome(r);
    switch (r) {
      case 'pump': renderPump(arg); break;
      case 'qr': renderQr(); break;
      case 'machine': renderMachine(); break;
      case 'about': renderAbout(); break;
      default: renderHome();
    }
    window.scrollTo(0, 0);
  }

  document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'hi' : 'en';
    save('jp-lang', lang);
    const y = window.scrollY;
    route();
    window.scrollTo(0, y);
  });
  window.addEventListener('hashchange', route);
  route();
})();
