/* Jal Parakh — all user-facing text in English and Hindi. */

const I18N = {
  en: {
    heroTitle: 'What’s in the water your village drinks?',
    heroText: 'Fluoride, nitrate and bacteria have no colour, smell or taste. We test rural handpumps across Udaipur with a portable field lab and publish every result here. Scan the sticker on a pump, or look one up below.',
    checkTitle: 'Check a handpump',
    surveyTitle: 'The survey so far',
    surveySummary: 'We tested {n} handpumps across {b} blocks in October 2026. {u} are not safe to drink, {c} should be used only when there is no other source, and {s} are safe.',
    surveyHint: 'Each icon is one handpump. Select one to open its report.',
    mapTitle: 'Where we have tested',
    viewReport: 'Open report',
    keyReadings: 'The four readings that matter most in Udaipur',
    keyReadingsText: 'Fluoride and salts come from the rock itself. Nitrate and bacteria come from what happens on the surface.',
    otherReadings: 'Other readings',
    colReading: 'Reading',
    colResult: 'Result',
    colLimit: 'BIS limit',
    colStatus: 'Status',
    mainIssue: 'Main issue',
    noIssue: 'All readings within limits',
    readMachine: 'How our kit measures this',
    stampTested: 'Tested',
    artTopsoil: 'Topsoil',
    artWeathered: 'Weathered rock',
    artGranite: 'Fractured granite and gneiss',
    artHard: 'Hard rock',
    artTable: 'Water table',
    artBore: 'Handpump bore, 30 to 80 m deep',
    artF: 'Fluoride dissolves out of the granite',
    artN: 'Nitrate seeps down from fertiliser, dung and waste',
    artLegend: 'How a handpump draws water from the rock below an Udaipur village',
    navCheck: 'Check water',
    navQr: 'QR stickers',
    navMachine: 'Our machine',
    navAbout: 'About',
    langSwitch: 'हिंदी',
    demoBanner: 'Demo version. Every handpump result on this site is mock data for illustration, not a real test.',

    heroKicker: 'Handpump water quality · Udaipur',

    searchId: 'Find by pump ID',
    searchIdPh: 'e.g. UDR-MVL-002',
    searchLoc: 'Find nearest by location',
    lat: 'Latitude',
    lng: 'Longitude',
    latPh: '24.5854',
    lngPh: '73.7125',
    btnFind: 'Find',
    btnNearest: 'Find nearest pump',
    btnMyLoc: 'Use my location',
    locating: 'Getting your location…',
    locError: 'Could not get your location. Please type latitude and longitude.',
    badCoords: 'Please enter a valid latitude (−90 to 90) and longitude (−180 to 180).',
    notFound: 'No handpump found with ID',
    nearestTitle: 'Nearest tested handpumps',
    away: 'away',
    farWarn: 'No tested handpump within {km} km of this point. The nearest is shown below; its water may not match yours.',

    statPumps: 'Handpumps tested',
    statSafe: 'Safe',
    statCaution: 'Use with caution',
    statUnsafe: 'Not safe',

    listTitle: 'All handpumps',
    filterAll: 'All',

    safe: 'Safe',
    caution: 'Caution',
    unsafe: 'Not safe',
    info: 'Info',

    verdictSafe: 'Safe to drink',
    verdictSafeText: 'All tested parameters are within the BIS acceptable limits.',
    verdictCaution: 'Drink only if there is no better source',
    verdictCautionText: 'Some values are above the acceptable limit but still within the permissible limit (allowed only when no alternate source exists).',
    verdictUnsafe: 'Not safe to drink',
    verdictUnsafeText: 'One or more parameters are beyond the permissible limit.',

    back: '← All handpumps',
    village: 'Village',
    block: 'Block',
    district: 'District',
    coords: 'GPS location',
    openMap: 'Open in Google Maps',
    depth: 'Bore depth',
    installed: 'Installed',
    households: 'Households using it',
    lastTested: 'Last tested',
    testedBy: 'Tested by',
    resultsTitle: 'Test results',
    limitAcc: 'Acceptable',
    limitPerm: 'Permissible',
    limitRange: 'Allowed range',
    limitAbsent: 'Must be absent',
    noLimit: 'No BIS limit',
    present: 'Present',
    absent: 'Absent',
    nearLimit: 'Close to the limit, within instrument accuracy. Retest recommended.',
    prevTest: 'previous',
    whatToDo: 'What to do',
    fieldNote: 'Field team note',
    measuredWith: 'Measured with',
    historyTitle: 'Test history',
    historyNote: 'Groundwater changes with the season. We test before the monsoon (May) and after it (October).',
    stickerTitle: 'QR sticker for this pump',
    printSticker: 'Print sticker',
    whyMatters: 'Why it matters',

    adviceFluoride: 'Do not use for drinking or cooking. Use a defluoridation filter (activated alumina / bone char), an RO plant, or a safe pump nearby. Boiling does not help.',
    adviceNitrate: 'Never use for babies or infant formula. Use a safe source for drinking. Check for latrines, dung pits or dumps within 15 m of the pump.',
    adviceBacteria: 'Boil for at least 1 minute or chlorinate before drinking. Repair the platform and drain, and keep animals and washing away from the pump.',
    adviceTds: 'Too salty for regular drinking. Use an alternate source or a community RO plant.',
    adviceIron: 'Let water stand and settle, then filter through clean cloth or sand. Report rusted pipes to PHED for replacement.',
    adviceHardness: 'Not harmful at this level, but causes scaling. Prefer a softer source for drinking if available.',
    adviceChloride: 'Too salty. Use an alternate source for drinking.',
    advicePh: 'Report to PHED. Unusual pH can corrode pipes and weaken disinfection.',
    adviceReport: 'All unsafe results are shared with the PHED district water testing laboratory, Udaipur, for confirmation.',

    qrTitle: 'QR sticker generator',
    qrIntro: 'Print one sticker per handpump and fix it on the pump body. Anyone who scans it with a phone camera sees that pump’s latest results.',
    qrBase: 'Website address the QR codes should open',
    qrBaseHelp: 'After you put this site online (e.g. on GitHub Pages), paste its address here so the printed codes point to it.',
    qrPrintAll: 'Print all stickers',
    qrScan: 'Scan to check water quality',
    qrScanHi: 'पानी की जाँच देखने के लिए स्कैन करें',
    qrNoStatus: 'Stickers do not show a safe/unsafe colour on purpose: a printed colour goes out of date, but the QR always opens the latest result.',
    qrLocalWarn: 'The address above is a local (this computer only) address. Phones cannot open it, so put the site online and paste its public address before printing.',
    selectPump: 'Pump',

    footerData: 'Limits: BIS IS 10500:2012 Drinking Water Specification.',
    footerMade: 'A community project by',
  },

  hi: {
    heroTitle: 'आपके गाँव के पानी में क्या है?',
    heroText: 'फ्लोराइड, नाइट्रेट और बैक्टीरिया का न रंग होता है, न गंध, न स्वाद। हम पोर्टेबल फ़ील्ड लैब से उदयपुर के गाँवों के हैंडपंपों की जाँच करते हैं और हर नतीजा यहाँ प्रकाशित करते हैं। पंप पर लगा स्टिकर स्कैन करें, या नीचे खोजें।',
    checkTitle: 'हैंडपंप जाँचें',
    surveyTitle: 'अब तक का सर्वे',
    surveySummary: 'अक्टूबर 2026 में हमने {b} ब्लॉकों के {n} हैंडपंप जाँचे। {u} का पानी पीने लायक नहीं है, {c} का पानी तभी पिएँ जब कोई दूसरा स्रोत न हो, और {s} सुरक्षित हैं।',
    surveyHint: 'हर चिह्न एक हैंडपंप है। उसकी रिपोर्ट खोलने के लिए चुनें।',
    mapTitle: 'हमने कहाँ जाँच की',
    viewReport: 'रिपोर्ट खोलें',
    keyReadings: 'उदयपुर में सबसे अहम चार माप',
    keyReadingsText: 'फ्लोराइड और लवण चट्टान से आते हैं। नाइट्रेट और बैक्टीरिया ज़मीन की सतह पर होने वाली गतिविधियों से।',
    otherReadings: 'अन्य माप',
    colReading: 'माप',
    colResult: 'नतीजा',
    colLimit: 'BIS सीमा',
    colStatus: 'स्थिति',
    mainIssue: 'मुख्य समस्या',
    noIssue: 'सभी माप सीमा के भीतर',
    readMachine: 'हमारी किट इसे कैसे मापती है',
    stampTested: 'जाँच',
    artTopsoil: 'ऊपरी मिट्टी',
    artWeathered: 'अपक्षयित चट्टान',
    artGranite: 'दरारों वाला ग्रेनाइट और नाइस',
    artHard: 'कठोर चट्टान',
    artTable: 'जल स्तर',
    artBore: 'हैंडपंप का बोर, 30 से 80 मीटर गहरा',
    artF: 'ग्रेनाइट से फ्लोराइड घुलकर आता है',
    artN: 'खाद, गोबर और कचरे से नाइट्रेट रिसता है',
    artLegend: 'उदयपुर के गाँव के नीचे की चट्टान से हैंडपंप पानी कैसे खींचता है',
    navCheck: 'पानी जाँचें',
    navQr: 'QR स्टिकर',
    navMachine: 'हमारी मशीन',
    navAbout: 'परियोजना',
    langSwitch: 'English',
    demoBanner: 'डेमो संस्करण: यहाँ दिखाए गए सभी हैंडपंप के नतीजे उदाहरण के लिए नकली (मॉक) डेटा हैं, असली जाँच नहीं।',

    heroKicker: 'हैंडपंप जल गुणवत्ता · उदयपुर',

    searchId: 'पंप ID से खोजें',
    searchIdPh: 'जैसे UDR-MVL-002',
    searchLoc: 'लोकेशन से सबसे पास का पंप',
    lat: 'अक्षांश (Latitude)',
    lng: 'देशांतर (Longitude)',
    latPh: '24.5854',
    lngPh: '73.7125',
    btnFind: 'खोजें',
    btnNearest: 'सबसे पास का पंप खोजें',
    btnMyLoc: 'मेरी लोकेशन लें',
    locating: 'आपकी लोकेशन ली जा रही है…',
    locError: 'लोकेशन नहीं मिल पाई। कृपया अक्षांश और देशांतर लिखें।',
    badCoords: 'कृपया सही अक्षांश (−90 से 90) और देशांतर (−180 से 180) लिखें।',
    notFound: 'इस ID का कोई हैंडपंप नहीं मिला:',
    nearestTitle: 'सबसे पास के जाँचे गए हैंडपंप',
    away: 'दूर',
    farWarn: 'इस जगह से {km} किमी के भीतर कोई जाँचा गया हैंडपंप नहीं है। सबसे पास वाला नीचे दिखाया गया है; हो सकता है उसका पानी आपके पानी जैसा न हो।',

    statPumps: 'जाँचे गए हैंडपंप',
    statSafe: 'सुरक्षित',
    statCaution: 'सावधानी से',
    statUnsafe: 'असुरक्षित',

    listTitle: 'सभी हैंडपंप',
    filterAll: 'सभी',

    safe: 'सुरक्षित',
    caution: 'सावधानी',
    unsafe: 'असुरक्षित',
    info: 'जानकारी',

    verdictSafe: 'पीने के लिए सुरक्षित',
    verdictSafeText: 'जाँचे गए सभी मानक BIS की स्वीकार्य सीमा के भीतर हैं।',
    verdictCaution: 'बेहतर स्रोत न हो तभी पिएँ',
    verdictCautionText: 'कुछ मान स्वीकार्य सीमा से ऊपर हैं पर अनुमेय सीमा के भीतर हैं (जो केवल तब मान्य है जब कोई दूसरा स्रोत न हो)।',
    verdictUnsafe: 'पीने के लिए सुरक्षित नहीं',
    verdictUnsafeText: 'एक या अधिक मानक अनुमेय सीमा से बाहर हैं।',

    back: '← सभी हैंडपंप',
    village: 'गाँव',
    block: 'ब्लॉक',
    district: 'ज़िला',
    coords: 'GPS लोकेशन',
    openMap: 'Google Maps में खोलें',
    depth: 'बोर की गहराई',
    installed: 'लगाया गया',
    households: 'उपयोग करने वाले परिवार',
    lastTested: 'अंतिम जाँच',
    testedBy: 'जाँचकर्ता',
    resultsTitle: 'जाँच के नतीजे',
    limitAcc: 'स्वीकार्य',
    limitPerm: 'अनुमेय',
    limitRange: 'मान्य सीमा',
    limitAbsent: 'अनुपस्थित होना चाहिए',
    noLimit: 'BIS सीमा नहीं',
    present: 'मौजूद',
    absent: 'अनुपस्थित',
    nearLimit: 'सीमा के बहुत क़रीब — मशीन की सटीकता के दायरे में। फिर से जाँच की सलाह।',
    prevTest: 'पिछली',
    whatToDo: 'क्या करें',
    fieldNote: 'फ़ील्ड टीम की टिप्पणी',
    measuredWith: 'मापने का उपकरण',
    historyTitle: 'जाँच का इतिहास',
    historyNote: 'भूजल मौसम के साथ बदलता है। हम मानसून से पहले (मई) और बाद में (अक्टूबर) जाँच करते हैं।',
    stickerTitle: 'इस पंप का QR स्टिकर',
    printSticker: 'स्टिकर प्रिंट करें',
    whyMatters: 'यह क्यों ज़रूरी है',

    adviceFluoride: 'पीने या खाना बनाने में उपयोग न करें। डीफ्लोराइडेशन फ़िल्टर (एक्टिवेटेड एल्युमिना / बोन चार), RO प्लांट या पास का सुरक्षित पंप इस्तेमाल करें। उबालने से फ़ायदा नहीं।',
    adviceNitrate: 'शिशुओं या शिशु-दूध के लिए कभी उपयोग न करें। पीने के लिए सुरक्षित स्रोत लें। पंप के 15 मीटर के भीतर शौचालय, खाद के गड्ढे या कचरा तो नहीं — जाँचें।',
    adviceBacteria: 'पीने से पहले कम से कम 1 मिनट उबालें या क्लोरीन डालें। चबूतरा और नाली ठीक करवाएँ, और जानवरों व कपड़े धोने को पंप से दूर रखें।',
    adviceTds: 'रोज़ पीने के लिए बहुत खारा। दूसरा स्रोत या सामुदायिक RO प्लांट इस्तेमाल करें।',
    adviceIron: 'पानी को कुछ देर रखकर बैठने दें, फिर साफ़ कपड़े या रेत से छानें। जंग लगे पाइप बदलवाने के लिए PHED को सूचित करें।',
    adviceHardness: 'इस स्तर पर हानिकारक नहीं, पर परत जमती है। उपलब्ध हो तो पीने के लिए नरम पानी लें।',
    adviceChloride: 'बहुत नमकीन। पीने के लिए दूसरा स्रोत लें।',
    advicePh: 'PHED को सूचित करें। असामान्य pH पाइप गलाता है और कीटाणुनाशन कमज़ोर करता है।',
    adviceReport: 'सभी असुरक्षित नतीजे पुष्टि के लिए PHED ज़िला जल परीक्षण प्रयोगशाला, उदयपुर को भेजे जाते हैं।',

    qrTitle: 'QR स्टिकर जनरेटर',
    qrIntro: 'हर हैंडपंप के लिए एक स्टिकर प्रिंट करके पंप पर चिपकाएँ। फ़ोन कैमरे से स्कैन करते ही उस पंप के ताज़ा नतीजे दिखेंगे।',
    qrBase: 'QR कोड जो वेबसाइट पता खोलें',
    qrBaseHelp: 'यह साइट ऑनलाइन (जैसे GitHub Pages पर) डालने के बाद उसका पता यहाँ लिखें, ताकि प्रिंट किए गए कोड सही जगह खुलें।',
    qrPrintAll: 'सभी स्टिकर प्रिंट करें',
    qrScan: 'Scan to check water quality',
    qrScanHi: 'पानी की जाँच देखने के लिए स्कैन करें',
    qrNoStatus: 'स्टिकर पर जानबूझकर सुरक्षित/असुरक्षित रंग नहीं दिया गया: प्रिंट किया रंग पुराना हो जाता है, पर QR हमेशा ताज़ा नतीजा खोलता है।',
    qrLocalWarn: 'ऊपर दिया पता केवल इसी कंप्यूटर का (लोकल) पता है। फ़ोन इसे नहीं खोल पाएँगे — प्रिंट से पहले साइट ऑनलाइन करके उसका सार्वजनिक पता डालें।',
    selectPump: 'पंप',

    footerData: 'सीमाएँ: BIS IS 10500:2012 पेयजल विनिर्देश।',
    footerMade: 'एक सामुदायिक परियोजना —',
  },
};

/* Long-form pages. Kept as HTML so they can carry diagrams and tables. */
const PAGES = {
  machine: {
    en: `
<section class="page-hero">
  <p class="kicker">Our testing kit</p>
  <h1>One visit, three instruments, 10 measurements</h1>
  <p class="lead">A handpump in rural Udaipur can be clear and cool and still be unsafe. Fluoride, nitrate and bacteria are invisible and have no taste. Our field team carries a portable kit that gives lab-grade numbers at the pump in about 20 minutes, plus a bacteria result in 24–48 hours.</p>
</section>

<div class="kit-grid">
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><rect x="18" y="4" width="12" height="26" rx="3"/><path d="M20 30v8a4 4 0 0 0 8 0v-8"/><circle cx="24" cy="12" r="2"/></svg></div>
    <h3>1 · Multiparameter probe</h3>
    <p class="model">Hanna HI98194 meter + HI7698194 probe</p>
    <p>Dipped straight into fresh pump water. Reads <b>pH, conductivity → TDS, dissolved oxygen and temperature</b> at once, in under 2 minutes.</p>
  </article>
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><rect x="6" y="14" width="36" height="24" rx="4"/><rect x="20" y="6" width="8" height="16" rx="1"/><path d="M12 30h10"/></svg></div>
    <h3>2 · Portable photometer</h3>
    <p class="model">Hanna HI96729 (fluoride, low range), HI97728 (nitrate) + reagents</p>
    <p>A reagent turns the sample a colour, and the meter measures how much light it absorbs. Gives <b>fluoride, nitrate, iron, hardness and chloride</b>.</p>
  </article>
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M18 4h12M20 4v8l-8 28a4 4 0 0 0 4 5h16a4 4 0 0 0 4-5l-8-28V4"/><path d="M14 32h20"/></svg></div>
    <h3>3 · H₂S bacteria vial</h3>
    <p class="model">Hydrogen-sulphide strip test, as used by Jal Jeevan Mission</p>
    <p>Fill it, seal it, wait 24–48 h. If it <b>turns black</b>, faecal bacteria are present.</p>
  </article>
</div>

<h2>How the multiparameter probe works</h2>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="Probe tip with four sensors: pH glass bulb, ORP platinum pin, four-ring conductivity cell and oxygen membrane, plus temperature sensor">
  <rect x="40" y="40" width="200" height="180" rx="18" class="d-body"/>
  <text x="140" y="30" class="d-label" text-anchor="middle">Probe tip (seen from below)</text>
  <circle cx="95" cy="95" r="26" class="d-glass"/><text x="95" y="99" class="d-small" text-anchor="middle">pH</text>
  <circle cx="185" cy="95" r="26" class="d-ring"/><circle cx="185" cy="95" r="18" class="d-ring"/><circle cx="185" cy="95" r="10" class="d-ring"/><circle cx="185" cy="95" r="3" class="d-ring"/>
  <circle cx="95" cy="170" r="26" class="d-mem"/><text x="95" y="174" class="d-small" text-anchor="middle">DO</text>
  <circle cx="185" cy="170" r="10" class="d-temp"/><text x="185" y="203" class="d-small d-on" text-anchor="middle">Temp</text>
  <line x1="240" y1="95" x2="300" y2="70" class="d-lead"/><line x1="240" y1="170" x2="300" y2="190" class="d-lead"/>
  <text x="310" y="58" class="d-label">pH: thin glass bulb develops a voltage</text>
  <text x="310" y="78" class="d-small">≈ 59 mV per pH unit at 25 °C, compared with an Ag/AgCl reference</text>
  <text x="310" y="118" class="d-label">Conductivity: 4 rings</text>
  <text x="310" y="138" class="d-small">Outer rings push AC current, inner rings sense voltage → EC (µS/cm)</text>
  <text x="310" y="178" class="d-label">Oxygen: membrane + silver/zinc cell</text>
  <text x="310" y="198" class="d-small">O₂ crossing the membrane makes a current ∝ oxygen</text>
  <text x="310" y="238" class="d-small">Thermistor corrects all readings to 25 °C</text>
</svg>
</figure>

<div class="explain">
  <div>
    <h3>pH: a glass that “feels” acidity</h3>
    <p>The tip is a bulb of special glass. Hydrogen ions in the water settle on its outer surface and create a tiny voltage across the glass. A reference electrode (silver/silver-chloride in gel) gives a fixed voltage to compare against. The difference follows the <b>Nernst equation</b>: about <b>59.16 mV for every 1 pH unit</b> at 25 °C. The meter converts millivolts into pH.</p>
  </div>
  <div>
    <h3>Conductivity → TDS: counting dissolved salts</h3>
    <p>Pure water barely conducts electricity; dissolved salts make it conduct. The probe uses a <b>four-ring cell</b>. The outer rings drive a small alternating current and the inner rings measure the voltage. Because no current flows through the sensing rings, scale or dirt on them does not distort the reading. Conductivity changes about 2 % per °C, so it is corrected to 25 °C. <b>TDS (mg/L) = EC (µS/cm) × 0.65</b>, a factor suited to Rajasthan groundwater.</p>
  </div>
  <div>
    <h3>Dissolved oxygen: a tiny battery</h3>
    <p>Behind a gas-permeable membrane sit a silver cathode and a zinc anode. Oxygen that diffuses through is consumed at the cathode, producing a current <b>proportional to the oxygen</b> in the water. Very low oxygen can hint at organic pollution, such as sewage or dung, reaching the aquifer.</p>
  </div>
  <div>
    <h3>Temperature: the silent corrector</h3>
    <p>A thermistor inside the probe reads water temperature continuously. pH, conductivity and oxygen all depend on temperature, so the meter applies <b>automatic temperature compensation</b> to every reading.</p>
  </div>
</div>

<h2>How the photometer works</h2>
<figure class="diagram">
<svg viewBox="0 0 700 170" role="img" aria-label="LED light passes through a filter and a sample cuvette to a detector; darker sample absorbs more light">
  <circle cx="60" cy="85" r="22" class="d-led"/><text x="60" y="130" class="d-small" text-anchor="middle">LED</text>
  <rect x="130" y="60" width="20" height="50" class="d-filter"/><text x="140" y="130" class="d-small" text-anchor="middle">Filter</text>
  <rect x="250" y="40" width="70" height="90" rx="6" class="d-cuvette"/><text x="285" y="150" class="d-small" text-anchor="middle">Sample + reagent</text>
  <rect x="440" y="62" width="30" height="46" class="d-detector"/><text x="455" y="130" class="d-small" text-anchor="middle">Detector</text>
  <line x1="82" y1="85" x2="250" y2="85" class="d-beam"/><line x1="320" y1="85" x2="440" y2="85" class="d-beam thin"/>
  <text x="500" y="70" class="d-label">A = ε · l · c</text>
  <text x="500" y="92" class="d-small">absorbance ∝ concentration</text>
  <text x="500" y="112" class="d-small">(Beer–Lambert law)</text>
</svg>
</figure>
<p>Each test adds a reagent that reacts only with one substance and produces a colour. An LED shines light of one wavelength through the sample, and a detector measures how much gets through. By the <b>Beer–Lambert law</b>, the light absorbed rises in proportion to the concentration. The meter first reads the untreated sample as a “blank” (zero), so the water’s own colour or cloudiness is cancelled out.</p>

<div class="table-wrap">
<table class="spec">
  <thead><tr><th>Test</th><th>Chemistry</th><th>What you see</th></tr></thead>
  <tbody>
    <tr><td>Fluoride</td><td>SPADNS: a red zirconium-dye complex. Fluoride pulls zirconium away from the dye.</td><td><b>More fluoride = lighter colour</b> (a “bleaching” test, ~575 nm)</td></tr>
    <tr><td>Nitrate</td><td>Cadmium reduces nitrate to nitrite, which forms a pink azo dye.</td><td>Pink; darker = more nitrate (~525 nm)</td></tr>
    <tr><td>Iron</td><td>Phenanthroline binds iron into an orange complex.</td><td>Orange-red</td></tr>
    <tr><td>Hardness</td><td>Calmagite dye changes colour when it binds calcium and magnesium.</td><td>Blue → red-violet</td></tr>
    <tr><td>Chloride</td><td>Chloride frees thiocyanate, which forms a coloured iron complex.</td><td>Orange</td></tr>
  </tbody>
</table>
</div>

<div class="callout">
  <b>Nitrate units:</b> The photometer reports nitrate as <i>nitrate-nitrogen</i> (NO₃-N). BIS sets the limit as <i>nitrate</i> (NO₃). We convert: <b>NO₃ = NO₃-N × 4.43</b>. So the BIS limit of 45 mg/L NO₃ is about 10 mg/L NO₃-N. Mixing these up is a common source of wrong results.
</div>

<h2>How the H₂S bacteria vial works</h2>
<p>Testing for <i>E. coli</i> normally needs a laboratory incubator. The <b>H₂S test</b> is a low-cost field screen recommended for rural India. The vial contains a dried growth medium with a sulphur compound and iron. Bacteria that live in human and animal gut (like <i>Salmonella</i>, <i>Citrobacter</i> and <i>Clostridium</i>) produce hydrogen sulphide gas. The gas reacts with the iron to form <b>black iron sulphide</b>.</p>
<ul class="ticks">
  <li>Fill to the 20 mL mark with pump water, close tightly and label with the pump ID.</li>
  <li>Keep at room temperature (25–37 °C) for 24–48 hours.</li>
  <li><b>Stays yellow</b> = no faecal contamination detected. <b>Turns black</b> = contaminated, unsafe without boiling or chlorination.</li>
  <li>It is a screening test. Positive samples are sent to the district lab for a confirmatory coliform count.</li>
</ul>

<h2>How we take a sample at the pump</h2>
<ol class="steps">
  <li><b>Flush.</b> Pump for 3–5 minutes so we test water from the aquifer, not water sitting in the pipe.</li>
  <li><b>Record location.</b> Note GPS latitude/longitude on a phone (±5 m) and photograph the pump and platform.</li>
  <li><b>Probe first.</b> Measure pH, conductivity, oxygen and temperature immediately in a rinsed bucket. These change within minutes once the water meets air.</li>
  <li><b>Photometer.</b> Rinse cuvettes 3× with sample, zero on the blank, add reagent, wait the set reaction time, read. Too long a wait also spoils accuracy.</li>
  <li><b>Bacteria vial.</b> Fill with clean hands without touching the inside, seal, label, carry back for incubation.</li>
  <li><b>Upload.</b> Enter results against the pump ID. The QR sticker on the pump now shows the new report.</li>
</ol>

<h2>Calibration &amp; accuracy: why you can trust the numbers</h2>
<div class="table-wrap">
<table class="spec">
  <thead><tr><th>Measurement</th><th>Accuracy (manufacturer spec)</th><th>Calibration we do</th></tr></thead>
  <tbody>
    <tr><td>pH</td><td>±0.02 pH</td><td>2-point with pH 7.01 &amp; 4.01 buffers, every field day</td></tr>
    <tr><td>Conductivity / TDS</td><td>±1 % of reading</td><td>1413 µS/cm standard, weekly</td></tr>
    <tr><td>Dissolved oxygen</td><td>±1.5 % of reading</td><td>Air-saturation, every field day</td></tr>
    <tr><td>Temperature</td><td>±0.15 °C</td><td>Factory; checked against a reference thermometer monthly</td></tr>
    <tr><td>Fluoride (low range, 0–2 mg/L)</td><td>±0.03 mg/L ±3 % of reading</td><td>CAL Check standards, weekly; samples above 2 mg/L are diluted 1:1 and re-read</td></tr>
    <tr><td>Nitrate</td><td>±0.5 mg/L ±10 % (as NO₃-N)</td><td>CAL Check standards, weekly</td></tr>
    <tr><td>Iron, hardness, chloride</td><td>typically ±5 % of reading</td><td>CAL Check standards, monthly</td></tr>
  </tbody>
</table>
</div>
<p class="muted small">Specifications are from the manufacturers’ datasheets at 25 °C. Always confirm against the manual of your exact unit.</p>

<div class="callout warn">
  <b>Why we flag “close to the limit”:</b> The fluoride limit is 1.5 mg/L, and at that level the photometer is accurate to about ±0.08 mg/L. A reading of 1.45 could really be 1.53. Whenever a result falls within the instrument’s accuracy of a BIS limit, the report marks it “retest recommended” instead of giving false comfort. That is also why we use the <b>low-range</b> fluoride meter: the standard 0–20 mg/L model is only accurate to ±0.5 mg/L, which is too coarse to judge a 1.5 mg/L limit.
</div>

<h2>Field kit vs laboratory</h2>
<div class="table-wrap">
<table class="spec">
  <thead><tr><th></th><th>Our field kit</th><th>NABL-accredited lab</th></tr></thead>
  <tbody>
    <tr><td>Time to result</td><td>~20 min (chemistry), 24–48 h (bacteria)</td><td>3–10 days</td></tr>
    <tr><td>Cost per pump</td><td>Low (reagents only)</td><td>Higher, plus sample transport</td></tr>
    <tr><td>Coverage</td><td>Dozens of remote pumps per week</td><td>Limited by transport</td></tr>
    <tr><td>Role</td><td>Screening and community information</td><td>Legal confirmation</td></tr>
  </tbody>
</table>
</div>
<p>The two work together. We screen widely and send every <b>unsafe</b> or <b>near-limit</b> sample to the PHED district water testing laboratory for confirmation.</p>
`,
    hi: `
<section class="page-hero">
  <p class="kicker">हमारी जाँच किट</p>
  <h1>एक दौरा, तीन उपकरण, 10 माप</h1>
  <p class="lead">उदयपुर के गाँवों का हैंडपंप का पानी साफ़ और ठंडा दिखकर भी असुरक्षित हो सकता है। फ्लोराइड, नाइट्रेट और बैक्टीरिया न दिखते हैं, न उनका स्वाद आता है। हमारी फ़ील्ड टीम एक पोर्टेबल किट लेकर चलती है जो पंप पर ही लगभग 20 मिनट में लैब जैसे सटीक आँकड़े देती है, और बैक्टीरिया का नतीजा 24–48 घंटे में।</p>
</section>

<div class="kit-grid">
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><rect x="18" y="4" width="12" height="26" rx="3"/><path d="M20 30v8a4 4 0 0 0 8 0v-8"/><circle cx="24" cy="12" r="2"/></svg></div>
    <h3>1 · मल्टीपैरामीटर प्रोब</h3>
    <p class="model">Hanna HI98194 मीटर + HI7698194 प्रोब</p>
    <p>पंप के ताज़ा पानी में सीधे डुबोया जाता है। <b>pH, चालकता → TDS, घुलित ऑक्सीजन और तापमान</b> एक साथ, 2 मिनट से कम में।</p>
  </article>
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><rect x="6" y="14" width="36" height="24" rx="4"/><rect x="20" y="6" width="8" height="16" rx="1"/><path d="M12 30h10"/></svg></div>
    <h3>2 · पोर्टेबल फोटोमीटर</h3>
    <p class="model">Hanna HI96729 (फ्लोराइड, लो रेंज), HI97728 (नाइट्रेट) + रीएजेंट</p>
    <p>रीएजेंट डालने से नमूने का रंग बदलता है और मीटर मापता है कि वह कितनी रोशनी सोखता है। <b>फ्लोराइड, नाइट्रेट, आयरन, कठोरता और क्लोराइड</b> बताता है।</p>
  </article>
  <article class="kit-card">
    <div class="kit-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M18 4h12M20 4v8l-8 28a4 4 0 0 0 4 5h16a4 4 0 0 0 4-5l-8-28V4"/><path d="M14 32h20"/></svg></div>
    <h3>3 · H₂S बैक्टीरिया शीशी</h3>
    <p class="model">हाइड्रोजन-सल्फ़ाइड स्ट्रिप जाँच (जल जीवन मिशन में प्रयुक्त)</p>
    <p>भरें, बंद करें, 24–48 घंटे रुकें। <b>काली हो जाए</b> तो मल जनित बैक्टीरिया मौजूद हैं।</p>
  </article>
</div>

<h2>मल्टीपैरामीटर प्रोब कैसे काम करता है</h2>
<figure class="diagram">
<svg viewBox="0 0 760 260" role="img" aria-label="प्रोब के सिरे पर चार सेंसर">
  <rect x="40" y="40" width="200" height="180" rx="18" class="d-body"/>
  <text x="140" y="30" class="d-label" text-anchor="middle">प्रोब का सिरा (नीचे से)</text>
  <circle cx="95" cy="95" r="26" class="d-glass"/><text x="95" y="99" class="d-small" text-anchor="middle">pH</text>
  <circle cx="185" cy="95" r="26" class="d-ring"/><circle cx="185" cy="95" r="18" class="d-ring"/><circle cx="185" cy="95" r="10" class="d-ring"/><circle cx="185" cy="95" r="3" class="d-ring"/>
  <circle cx="95" cy="170" r="26" class="d-mem"/><text x="95" y="174" class="d-small" text-anchor="middle">DO</text>
  <circle cx="185" cy="170" r="10" class="d-temp"/><text x="185" y="203" class="d-small d-on" text-anchor="middle">तापमान</text>
  <line x1="240" y1="95" x2="300" y2="70" class="d-lead"/><line x1="240" y1="170" x2="300" y2="190" class="d-lead"/>
  <text x="310" y="58" class="d-label">pH: पतला काँच का बल्ब वोल्टेज बनाता है</text>
  <text x="310" y="78" class="d-small">25 °C पर हर pH इकाई पर ≈ 59 mV, Ag/AgCl रेफ़रेंस से तुलना</text>
  <text x="310" y="118" class="d-label">चालकता: 4 रिंग</text>
  <text x="310" y="138" class="d-small">बाहरी रिंग AC करंट भेजते हैं, भीतरी वोल्टेज मापते हैं → EC</text>
  <text x="310" y="178" class="d-label">ऑक्सीजन: झिल्ली + चाँदी/जस्ता सेल</text>
  <text x="310" y="198" class="d-small">झिल्ली से आई O₂ ऑक्सीजन के अनुपात में करंट बनाती है</text>
  <text x="310" y="238" class="d-small">थर्मिस्टर सभी रीडिंग को 25 °C पर सुधारता है</text>
</svg>
</figure>

<div class="explain">
  <div>
    <h3>pH: अम्लता “महसूस” करने वाला काँच</h3>
    <p>सिरे पर विशेष काँच का बल्ब होता है। पानी के हाइड्रोजन आयन उसकी बाहरी सतह पर जमकर काँच के आर-पार छोटा सा वोल्टेज बनाते हैं। रेफ़रेंस इलेक्ट्रोड (जेल में सिल्वर/सिल्वर-क्लोराइड) तुलना के लिए स्थिर वोल्टेज देता है। यह अंतर <b>नर्न्स्ट समीकरण</b> के अनुसार चलता है: 25 °C पर <b>हर 1 pH इकाई पर लगभग 59.16 mV</b>। मीटर मिलीवोल्ट को pH में बदल देता है।</p>
  </div>
  <div>
    <h3>चालकता → TDS: घुले लवणों की गिनती</h3>
    <p>शुद्ध पानी में बिजली लगभग नहीं बहती; घुले लवण उसे सुचालक बनाते हैं। प्रोब में <b>चार-रिंग सेल</b> है। बाहरी रिंग छोटा प्रत्यावर्ती करंट भेजते हैं, भीतरी रिंग वोल्टेज मापते हैं। मापने वाले रिंगों से करंट नहीं बहता, इसलिए उन पर जमी परत या गंदगी रीडिंग नहीं बिगाड़ती। चालकता हर °C पर लगभग 2 % बदलती है, इसलिए इसे 25 °C पर सुधारा जाता है। <b>TDS (mg/L) = EC (µS/cm) × 0.65</b>, जो राजस्थान के भूजल के लिए उपयुक्त है।</p>
  </div>
  <div>
    <h3>घुलित ऑक्सीजन: एक छोटी बैटरी</h3>
    <p>गैस-पारगम्य झिल्ली के पीछे चाँदी का कैथोड और जस्ते का एनोड होता है। झिल्ली से आई ऑक्सीजन कैथोड पर खपती है और <b>ऑक्सीजन के अनुपात में</b> करंट बनाती है। बहुत कम ऑक्सीजन इस बात का संकेत हो सकता है कि सीवेज या गोबर जैसा जैविक प्रदूषण भूजल तक पहुँच रहा है।</p>
  </div>
  <div>
    <h3>तापमान: चुपचाप सुधारने वाला</h3>
    <p>प्रोब के अंदर लगा थर्मिस्टर लगातार तापमान पढ़ता है। pH, चालकता और ऑक्सीजन सभी तापमान पर निर्भर हैं, इसलिए मीटर हर रीडिंग पर <b>स्वचालित तापमान सुधार</b> लगाता है।</p>
  </div>
</div>

<h2>फोटोमीटर कैसे काम करता है</h2>
<figure class="diagram">
<svg viewBox="0 0 700 170" role="img" aria-label="LED की रोशनी फ़िल्टर और नमूने से होकर डिटेक्टर तक जाती है">
  <circle cx="60" cy="85" r="22" class="d-led"/><text x="60" y="130" class="d-small" text-anchor="middle">LED</text>
  <rect x="130" y="60" width="20" height="50" class="d-filter"/><text x="140" y="130" class="d-small" text-anchor="middle">फ़िल्टर</text>
  <rect x="250" y="40" width="70" height="90" rx="6" class="d-cuvette"/><text x="285" y="150" class="d-small" text-anchor="middle">नमूना + रीएजेंट</text>
  <rect x="440" y="62" width="30" height="46" class="d-detector"/><text x="455" y="130" class="d-small" text-anchor="middle">डिटेक्टर</text>
  <line x1="82" y1="85" x2="250" y2="85" class="d-beam"/><line x1="320" y1="85" x2="440" y2="85" class="d-beam thin"/>
  <text x="500" y="70" class="d-label">A = ε · l · c</text>
  <text x="500" y="92" class="d-small">अवशोषण ∝ सांद्रता</text>
  <text x="500" y="112" class="d-small">(बियर–लैम्बर्ट नियम)</text>
</svg>
</figure>
<p>हर जाँच में एक रीएजेंट डाला जाता है जो केवल एक पदार्थ से क्रिया करके रंग बनाता है। LED एक ख़ास तरंगदैर्ध्य की रोशनी नमूने से गुज़ारता है और डिटेक्टर मापता है कि कितनी रोशनी पार हुई। <b>बियर–लैम्बर्ट नियम</b> के अनुसार सोखी गई रोशनी सांद्रता के अनुपात में बढ़ती है। मीटर पहले बिना रीएजेंट वाले नमूने को “ब्लैंक” (शून्य) के रूप में पढ़ता है, ताकि पानी का अपना रंग या धुंधलापन हट जाए।</p>

<div class="table-wrap">
<table class="spec">
  <thead><tr><th>जाँच</th><th>रसायन</th><th>क्या दिखता है</th></tr></thead>
  <tbody>
    <tr><td>फ्लोराइड</td><td>SPADNS: लाल ज़िरकोनियम-डाई कॉम्प्लेक्स। फ्लोराइड ज़िरकोनियम को डाई से अलग कर देता है।</td><td><b>ज़्यादा फ्लोराइड = हल्का रंग</b> (“ब्लीचिंग” जाँच, ~575 nm)</td></tr>
    <tr><td>नाइट्रेट</td><td>कैडमियम नाइट्रेट को नाइट्राइट में बदलता है, जो गुलाबी एज़ो डाई बनाता है।</td><td>गुलाबी; गहरा = ज़्यादा नाइट्रेट (~525 nm)</td></tr>
    <tr><td>आयरन</td><td>फ़िनैन्थ्रोलीन आयरन से नारंगी कॉम्प्लेक्स बनाता है।</td><td>नारंगी-लाल</td></tr>
    <tr><td>कठोरता</td><td>कैल्मागाइट डाई कैल्शियम-मैग्नीशियम से जुड़कर रंग बदलती है।</td><td>नीला → लाल-बैंगनी</td></tr>
    <tr><td>क्लोराइड</td><td>क्लोराइड थायोसाइनेट को मुक्त करता है, जो रंगीन आयरन कॉम्प्लेक्स बनाता है।</td><td>नारंगी</td></tr>
  </tbody>
</table>
</div>

<div class="callout">
  <b>नाइट्रेट की इकाई:</b> फोटोमीटर नाइट्रेट को <i>नाइट्रेट-नाइट्रोजन</i> (NO₃-N) में बताता है, जबकि BIS की सीमा <i>नाइट्रेट</i> (NO₃) में है। हम बदलते हैं: <b>NO₃ = NO₃-N × 4.43</b>। यानी BIS की 45 mg/L NO₃ सीमा लगभग 10 mg/L NO₃-N के बराबर है। इन्हें मिला देना ग़लत नतीजों का आम कारण है।
</div>

<h2>H₂S बैक्टीरिया शीशी कैसे काम करती है</h2>
<p><i>E. coli</i> की जाँच के लिए आम तौर पर लैब का इनक्यूबेटर चाहिए। <b>H₂S जाँच</b> ग्रामीण भारत के लिए सुझाई गई कम लागत वाली फ़ील्ड जाँच है। शीशी में सूखा पोषक माध्यम होता है जिसमें सल्फ़र यौगिक और आयरन होते हैं। इंसानों और जानवरों की आँतों में रहने वाले बैक्टीरिया (जैसे <i>Salmonella</i>, <i>Citrobacter</i>, <i>Clostridium</i>) हाइड्रोजन सल्फ़ाइड गैस बनाते हैं। यह गैस आयरन से मिलकर <b>काला आयरन सल्फ़ाइड</b> बनाती है।</p>
<ul class="ticks">
  <li>पंप के पानी से 20 mL निशान तक भरें, कसकर बंद करें, पंप ID लिखें।</li>
  <li>कमरे के तापमान (25–37 °C) पर 24–48 घंटे रखें।</li>
  <li><b>पीली रहे</b> = मल संदूषण नहीं मिला। <b>काली हो जाए</b> = दूषित, बिना उबाले या क्लोरीन डाले असुरक्षित।</li>
  <li>यह शुरुआती (स्क्रीनिंग) जाँच है। पॉज़िटिव नमूने पुष्टि के लिए ज़िला लैब भेजे जाते हैं।</li>
</ul>

<h2>पंप पर नमूना कैसे लेते हैं</h2>
<ol class="steps">
  <li><b>पानी बहाएँ।</b> 3–5 मिनट पंप चलाएँ ताकि पाइप में रुका पानी नहीं, ज़मीन के भीतर का पानी जाँचा जाए।</li>
  <li><b>लोकेशन दर्ज करें।</b> फ़ोन से GPS अक्षांश/देशांतर (±5 मीटर) लें और पंप व चबूतरे की फ़ोटो लें।</li>
  <li><b>पहले प्रोब।</b> धुली बाल्टी में तुरंत pH, चालकता, ऑक्सीजन और तापमान मापें। हवा लगते ही ये कुछ मिनटों में बदल जाते हैं।</li>
  <li><b>फोटोमीटर।</b> क्यूवेट को 3 बार नमूने से धोएँ, ब्लैंक पर शून्य करें, रीएजेंट डालें, तय समय रुककर पढ़ें। ज़्यादा देर रुकने से भी सटीकता बिगड़ती है।</li>
  <li><b>बैक्टीरिया शीशी।</b> साफ़ हाथों से, अंदर छुए बिना भरें, बंद करें, लेबल लगाएँ और इनक्यूबेशन के लिए ले जाएँ।</li>
  <li><b>अपलोड।</b> पंप ID के साथ नतीजे दर्ज करें। पंप पर लगा QR स्टिकर अब नई रिपोर्ट दिखाता है।</li>
</ol>

<h2>कैलिब्रेशन और सटीकता: आँकड़ों पर भरोसा क्यों करें</h2>
<div class="table-wrap">
<table class="spec">
  <thead><tr><th>माप</th><th>सटीकता (निर्माता विनिर्देश)</th><th>हमारा कैलिब्रेशन</th></tr></thead>
  <tbody>
    <tr><td>pH</td><td>±0.02 pH</td><td>pH 7.01 और 4.01 बफ़र से 2-पॉइंट, हर फ़ील्ड दिन</td></tr>
    <tr><td>चालकता / TDS</td><td>रीडिंग का ±1 %</td><td>1413 µS/cm मानक, साप्ताहिक</td></tr>
    <tr><td>घुलित ऑक्सीजन</td><td>रीडिंग का ±1.5 %</td><td>हवा-संतृप्ति, हर फ़ील्ड दिन</td></tr>
    <tr><td>तापमान</td><td>±0.15 °C</td><td>फ़ैक्टरी; मासिक रेफ़रेंस थर्मामीटर से मिलान</td></tr>
    <tr><td>फ्लोराइड (लो रेंज, 0–2 mg/L)</td><td>±0.03 mg/L ±3 % रीडिंग</td><td>CAL Check मानक, साप्ताहिक; 2 mg/L से ऊपर के नमूने 1:1 पतला कर दोबारा पढ़े जाते हैं</td></tr>
    <tr><td>नाइट्रेट</td><td>±0.5 mg/L ±10 % (NO₃-N के रूप में)</td><td>CAL Check मानक, साप्ताहिक</td></tr>
    <tr><td>आयरन, कठोरता, क्लोराइड</td><td>आम तौर पर रीडिंग का ±5 %</td><td>CAL Check मानक, मासिक</td></tr>
  </tbody>
</table>
</div>
<p class="muted small">विनिर्देश निर्माताओं की डेटाशीट से (25 °C पर) हैं। अपने उपकरण के मैनुअल से ज़रूर मिलान करें।</p>

<div class="callout warn">
  <b>हम “सीमा के क़रीब” क्यों दिखाते हैं:</b> फ्लोराइड की सीमा 1.5 mg/L है, और उस स्तर पर फोटोमीटर लगभग ±0.08 mg/L तक सटीक है। 1.45 की रीडिंग असल में 1.53 भी हो सकती है। जब भी कोई नतीजा BIS सीमा से मशीन की सटीकता के दायरे में हो, रिपोर्ट झूठी तसल्ली देने के बजाय “फिर से जाँच की सलाह” दिखाती है। इसी कारण हम <b>लो-रेंज</b> फ्लोराइड मीटर लेते हैं: सामान्य 0–20 mg/L मॉडल केवल ±0.5 mg/L तक सटीक है, जो 1.5 mg/L की सीमा परखने के लिए बहुत मोटा है।
</div>

<h2>फ़ील्ड किट बनाम प्रयोगशाला</h2>
<div class="table-wrap">
<table class="spec">
  <thead><tr><th></th><th>हमारी फ़ील्ड किट</th><th>NABL मान्यता प्राप्त लैब</th></tr></thead>
  <tbody>
    <tr><td>नतीजे में समय</td><td>~20 मिनट (रसायन), 24–48 घंटे (बैक्टीरिया)</td><td>3–10 दिन</td></tr>
    <tr><td>प्रति पंप लागत</td><td>कम (केवल रीएजेंट)</td><td>ज़्यादा, साथ में नमूना ढुलाई</td></tr>
    <tr><td>पहुँच</td><td>हर हफ़्ते दर्जनों दूरदराज़ पंप</td><td>ढुलाई से सीमित</td></tr>
    <tr><td>भूमिका</td><td>स्क्रीनिंग और समुदाय को जानकारी</td><td>क़ानूनी पुष्टि</td></tr>
  </tbody>
</table>
</div>
<p>दोनों साथ काम करते हैं। हम बड़े स्तर पर जाँच करते हैं और हर <b>असुरक्षित</b> या <b>सीमा के क़रीब</b> नमूने को पुष्टि के लिए PHED ज़िला जल परीक्षण प्रयोगशाला भेजते हैं।</p>
`,
  },

  about: {
    en: `
<section class="page-hero">
  <p class="kicker">About the project</p>
  <h1>Clear water isn’t always clean water</h1>
  <p class="lead">Most villages in rural Udaipur drink from handpumps. Few families ever learn what is in that water. Jal Parakh (“water check”) is a Global Shapers Udaipur Hub project that tests handpumps with a field kit, publishes every result openly, and puts a QR sticker on each pump so anyone with a phone can see whether their water is safe.</p>
</section>

<div class="how-grid">
  <div><span class="num">1</span><h3>Test</h3><p>Our team tests each pump with a calibrated field kit, before and after the monsoon.</p></div>
  <div><span class="num">2</span><h3>Record</h3><p>Results are saved against the pump’s ID and GPS location.</p></div>
  <div><span class="num">3</span><h3>Tag</h3><p>A weatherproof QR sticker is fixed on the pump body.</p></div>
  <div><span class="num">4</span><h3>Inform &amp; act</h3><p>Villagers, ASHA workers and panchayats scan to see results; unsafe pumps are reported to PHED.</p></div>
</div>

<h2>The water challenge in Udaipur</h2>
<div class="facts">
  <div class="fact"><b>1,122 mg/L</b><span>average TDS in the Ayad river basin (range 434–2,545), more than double the 500 mg/L acceptable limit<sup>[2]</sup></span></div>
  <div class="fact"><b>&gt; 1.5 mg/L</b><span>fluoride reported in most villages of Mavli, Salumber and Sarada blocks<sup>[4]</sup></span></div>
  <div class="fact"><b>23,956</b><span>habitations in Rajasthan were officially listed as affected by chemical contaminants such as fluoride (2014)<sup>[8]</sup></span></div>
</div>
<p>Udaipur sits on old hard rock: granite, gneiss and schist of the Aravallis. Water moves slowly through cracks in this rock and dissolves minerals like fluoride along the way. Shallow pumps near farms, latrines and waste sites also pick up nitrate and bacteria. A 2024 study found TDS, nitrate and fluoride rising towards the east of Udaipur city, linked to the Titardi and Balicha waste-disposal sites<sup>[3]</sup>. Because these contaminants cannot be seen or tasted, testing is the only way to know.</p>

<h2>The standard we test against: BIS IS 10500:2012</h2>
<p>India’s drinking water specification gives two limits for many substances. The <b>acceptable limit</b> is what water should meet. The <b>permissible limit</b> is the most that is allowed <i>only when no alternate source is available</i>. Some substances have no relaxation at all.</p>
<div id="standardsTable"></div>

<h2>How to read a report</h2>
<div class="legend-grid">
  <div class="legend safe"><b>Safe</b><span>Every parameter is within the acceptable limit.</span></div>
  <div class="legend caution"><b>Caution</b><span>At least one value is between the acceptable and permissible limits. Use it only if there is no better source.</span></div>
  <div class="legend unsafe"><b>Not safe</b><span>At least one value is beyond the permissible limit, or bacteria were found.</span></div>
</div>

<h2>Sources</h2>
<ol class="sources">
  <li>Bureau of Indian Standards, <a href="https://www.bis.gov.in/other/DrinWatIS10500.pdf" target="_blank" rel="noopener">IS 10500:2012 Drinking Water Specification</a></li>
  <li>India Water Portal, <a href="https://www.indiawaterportal.org/groundwater/assessing-water-quality-in-ayad-river-basin" target="_blank" rel="noopener">Assessing water quality in Ayad River Basin</a></li>
  <li><a href="https://doaj.org/article/204f56f8b4084e6280abbd4f7d62eede" target="_blank" rel="noopener">Scientific Reports (2024), groundwater quality around Udaipur</a></li>
  <li><a href="https://www.youthkiawaaz.com/2016/11/drinking-water-problem-udaipur-village/amp/" target="_blank" rel="noopener">Drinking water problem in Udaipur villages</a> (citing J. Indian Soc. Pedodontics &amp; Preventive Dentistry)</li>
  <li>Central Ground Water Board, <a href="https://cgwb.gov.in/sites/default/files/2022-10/udaipur.pdf" target="_blank" rel="noopener">Ground Water Scenario, Udaipur District</a></li>
  <li>Hanna Instruments, <a href="https://www.hannainstruments.co.uk/hi-7698194-multiparameter-ph-ec-do-temperature-probe-for-the-hi-98194-portable-meter.html" target="_blank" rel="noopener">HI98194 / HI7698194 probe</a>, <a href="https://www.hannainstruments.co.uk/photometers/2713-hi-97728-nitrate-portable-photometer-with-cal-check" target="_blank" rel="noopener">HI97728 nitrate photometer</a>, <a href="https://www.hannainstruments.co.uk/reagents/1489-fluoride-reagents" target="_blank" rel="noopener">fluoride reagents</a></li>
  <li><a href="https://ataljal.hid.gov.in/MIS/data/WebContent/Document/Report_638495739751657538.pdf" target="_blank" rel="noopener">Atal Bhujal Yojana field test kit guideline</a></li>
  <li>Rajya Sabha, <a href="https://rsdebate.nic.in/bitstream/123456789/636219/2/PQ_232_30072014_U2011_p420_p422.pdf" target="_blank" rel="noopener">reply on quality-affected habitations (30 July 2014)</a></li>
</ol>
<p class="muted small">Handpump results on this site are mock data for demonstration. Village names are real places, but their locations are approximate and the values are illustrative.</p>
`,
    hi: `
<section class="page-hero">
  <p class="kicker">परियोजना के बारे में</p>
  <h1>साफ़ दिखने वाला पानी हमेशा शुद्ध नहीं होता</h1>
  <p class="lead">उदयपुर के ज़्यादातर गाँव हैंडपंप का पानी पीते हैं, पर बहुत कम परिवार जानते हैं कि उस पानी में क्या है। जल परख ग्लोबल शेपर्स उदयपुर हब की परियोजना है। हम फ़ील्ड किट से हैंडपंपों की जाँच करते हैं, हर नतीजा खुले रूप में प्रकाशित करते हैं, और हर पंप पर QR स्टिकर लगाते हैं ताकि फ़ोन वाला कोई भी व्यक्ति देख सके कि उसका पानी सुरक्षित है या नहीं।</p>
</section>

<div class="how-grid">
  <div><span class="num">1</span><h3>जाँच</h3><p>हमारी टीम कैलिब्रेट की गई फ़ील्ड किट से मानसून से पहले और बाद में हर पंप जाँचती है।</p></div>
  <div><span class="num">2</span><h3>दर्ज</h3><p>नतीजे पंप की ID और GPS लोकेशन के साथ सहेजे जाते हैं।</p></div>
  <div><span class="num">3</span><h3>टैग</h3><p>पंप पर मौसम-रोधी QR स्टिकर लगाया जाता है।</p></div>
  <div><span class="num">4</span><h3>जानकारी व कार्रवाई</h3><p>ग्रामीण, आशा कार्यकर्ता और पंचायत स्कैन करके नतीजे देखते हैं; असुरक्षित पंप PHED को बताए जाते हैं।</p></div>
</div>

<h2>उदयपुर में पानी की चुनौती</h2>
<div class="facts">
  <div class="fact"><b>1,122 mg/L</b><span>आयड़ नदी बेसिन में औसत TDS (434–2,545), जो 500 mg/L स्वीकार्य सीमा के दोगुने से ज़्यादा है<sup>[2]</sup></span></div>
  <div class="fact"><b>&gt; 1.5 mg/L</b><span>मावली, सलूम्बर और सराड़ा ब्लॉक के ज़्यादातर गाँवों में फ्लोराइड<sup>[4]</sup></span></div>
  <div class="fact"><b>23,956</b><span>राजस्थान की बसावटें आधिकारिक रूप से फ्लोराइड जैसे रासायनिक प्रदूषकों से प्रभावित दर्ज (2014)<sup>[8]</sup></span></div>
</div>
<p>उदयपुर अरावली की पुरानी कठोर चट्टानों (ग्रेनाइट, नाइस, शिस्ट) पर बसा है। पानी इन चट्टानों की दरारों से धीरे-धीरे बहता है और रास्ते में फ्लोराइड जैसे खनिज घोल लेता है। खेतों, शौचालयों और कचरा स्थलों के पास के उथले पंपों में नाइट्रेट और बैक्टीरिया भी पहुँच जाते हैं। 2024 के एक अध्ययन में उदयपुर शहर के पूर्व की ओर TDS, नाइट्रेट और फ्लोराइड बढ़ते पाए गए, जिनका संबंध तितरडी और बलीचा कचरा स्थलों से था<sup>[3]</sup>। ये प्रदूषक न दिखते हैं, न स्वाद देते हैं, इसलिए जाँच ही एकमात्र तरीका है।</p>

<h2>हमारा मानक: BIS IS 10500:2012</h2>
<p>भारत का पेयजल विनिर्देश कई पदार्थों के लिए दो सीमाएँ देता है। <b>स्वीकार्य सीमा</b> वह है जो पानी में होनी चाहिए। <b>अनुमेय सीमा</b> अधिकतम मात्रा है जो <i>केवल तब मान्य है जब कोई दूसरा स्रोत न हो</i>। कुछ पदार्थों में कोई छूट नहीं है।</p>
<div id="standardsTable"></div>

<h2>रिपोर्ट कैसे पढ़ें</h2>
<div class="legend-grid">
  <div class="legend safe"><b>सुरक्षित</b><span>हर मानक स्वीकार्य सीमा के भीतर है।</span></div>
  <div class="legend caution"><b>सावधानी</b><span>कम से कम एक मान स्वीकार्य और अनुमेय सीमा के बीच है। बेहतर स्रोत न हो तभी उपयोग करें।</span></div>
  <div class="legend unsafe"><b>असुरक्षित</b><span>कम से कम एक मान अनुमेय सीमा से बाहर है, या बैक्टीरिया मिले हैं।</span></div>
</div>

<h2>स्रोत</h2>
<ol class="sources">
  <li>भारतीय मानक ब्यूरो, <a href="https://www.bis.gov.in/other/DrinWatIS10500.pdf" target="_blank" rel="noopener">IS 10500:2012 पेयजल विनिर्देश</a></li>
  <li>इंडिया वॉटर पोर्टल, <a href="https://www.indiawaterportal.org/groundwater/assessing-water-quality-in-ayad-river-basin" target="_blank" rel="noopener">आयड़ नदी बेसिन में जल गुणवत्ता</a></li>
  <li><a href="https://doaj.org/article/204f56f8b4084e6280abbd4f7d62eede" target="_blank" rel="noopener">Scientific Reports (2024), उदयपुर के आसपास भूजल गुणवत्ता</a></li>
  <li><a href="https://www.youthkiawaaz.com/2016/11/drinking-water-problem-udaipur-village/amp/" target="_blank" rel="noopener">उदयपुर के गाँवों में पेयजल समस्या</a></li>
  <li>केंद्रीय भूजल बोर्ड, <a href="https://cgwb.gov.in/sites/default/files/2022-10/udaipur.pdf" target="_blank" rel="noopener">भूजल परिदृश्य, उदयपुर ज़िला</a></li>
  <li>Hanna Instruments, <a href="https://www.hannainstruments.co.uk/hi-7698194-multiparameter-ph-ec-do-temperature-probe-for-the-hi-98194-portable-meter.html" target="_blank" rel="noopener">HI98194 / HI7698194 प्रोब</a>, <a href="https://www.hannainstruments.co.uk/photometers/2713-hi-97728-nitrate-portable-photometer-with-cal-check" target="_blank" rel="noopener">HI97728 नाइट्रेट फोटोमीटर</a>, <a href="https://www.hannainstruments.co.uk/reagents/1489-fluoride-reagents" target="_blank" rel="noopener">फ्लोराइड रीएजेंट</a></li>
  <li><a href="https://ataljal.hid.gov.in/MIS/data/WebContent/Document/Report_638495739751657538.pdf" target="_blank" rel="noopener">अटल भूजल योजना फ़ील्ड टेस्ट किट दिशानिर्देश</a></li>
  <li>राज्यसभा, <a href="https://rsdebate.nic.in/bitstream/123456789/636219/2/PQ_232_30072014_U2011_p420_p422.pdf" target="_blank" rel="noopener">गुणवत्ता-प्रभावित बसावटों पर उत्तर (30 जुलाई 2014)</a></li>
</ol>
<p class="muted small">इस साइट पर हैंडपंप के नतीजे प्रदर्शन के लिए मॉक डेटा हैं। गाँवों के नाम असली हैं, पर लोकेशन अनुमानित और मान उदाहरण के लिए हैं।</p>
`,
  },
};
