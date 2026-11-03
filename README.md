# Jal Parakh (जल परख): Handpump water quality, Udaipur

A Global Shapers Udaipur Hub project. Each tested handpump gets a QR sticker. When someone scans it, or searches by pump ID or latitude/longitude, the site shows the latest test results graded against **BIS IS 10500:2012**, in English and Hindi.

> All handpump results in `data.js` are **mock data** for demonstration.

## Files

| File | What it holds |
|---|---|
| `index.html` | Page shell (header, footer, scripts) |
| `data.js` | Parameters and BIS limits (`PARAMS`), instruments, **handpumps and test results (`PUMPS`)** |
| `i18n.js` | All English/Hindi text, plus the “Our machine” and “About” pages |
| `app.js` | Search, nearest-pump lookup, grading, map, report card, QR stickers |
| `styles.css` | Styles, including print layout for stickers |

There is no build step. It is plain HTML, CSS and JavaScript. Fonts (Anek, Google Fonts), the map (Leaflet + OpenStreetMap tiles) and the QR library load from the internet.

## Run it locally

```bash
python3 -m http.server 4321 --directory /Volumes/CodeDrive/jal-parakh
```

Then open http://localhost:4321. Add `?lang=hi` to any link (for example `https://your-site/?lang=hi#/`) to open the site in Hindi.

## Add a real handpump

In `data.js`, copy one entry in `PUMPS`. Give it a unique `id` and put the **newest test first** in `tests`:

```js
{
  id: 'UDR-GRW-012',
  village: { en: 'Village name', hi: 'गाँव का नाम' },
  block: { en: 'Girwa', hi: 'गिरवा' },
  district: { en: 'Udaipur', hi: 'उदयपुर' },
  lat: 24.5, lng: 73.7, depthM: 50, installed: 2015, households: 80,
  note: { en: 'Optional field note', hi: 'वैकल्पिक टिप्पणी' },
  tests: [
    { date: '2027-05-10', team: 'Field Team A',
      v: { fluoride: 0.8, tds: 450, nitrate: 20, bacteria: false, ph: 7.4,
           hardness: 190, chloride: 90, iron: 0.1, do: 6.0, temp: 28.5 } },
  ],
}
```

- Enter nitrate **as NO₃**. The photometer reads NO₃-N, so multiply by 4.43.
- `bacteria`: `true` if the H₂S vial turned black, `false` otherwise.
- When the site goes live, set `CONFIG.demoData = false` to hide the demo banner.

## Put it online (free)

- **GitHub Pages:** push this folder to a repository, then go to Settings → Pages → Deploy from branch.
- **Netlify:** drag this folder onto app.netlify.com/drop.

The live site is **https://radhakishan404.is-a.dev/jal-parakh/**. QR codes encode `CONFIG.siteUrl` in `data.js` plus `#/pump/<ID>`. If the site moves, update `siteUrl` (or paste the new address on the QR stickers page) before printing.

## Grading logic

- ≤ acceptable limit → **Safe**
- between acceptable and permissible → **Caution** (allowed only if no alternate source)
- above permissible, outside the pH range, or bacteria present → **Not safe**
- If a reading is within the instrument’s accuracy of a limit, it is also flagged **“close to the limit, retest”**.
