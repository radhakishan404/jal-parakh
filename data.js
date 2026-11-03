/*
 * Jal Parakh — data file
 *
 * PARAMS: what we test, BIS IS 10500:2012 limits, which instrument measures it.
 * PUMPS:  handpumps and their test results. ALL PUMP DATA BELOW IS MOCK / DEMO DATA.
 *
 * To add a real handpump, copy one PUMPS entry, give it a unique id,
 * and put the newest test first in `tests`.
 */

const CONFIG = {
  project: { en: 'Jal Parakh', hi: 'जल परख' },
  hub: { en: 'Global Shapers Community, Udaipur Hub', hi: 'ग्लोबल शेपर्स कम्युनिटी, उदयपुर हब' },
  demoData: true,
  // A lat/long search warns if the nearest tested pump is farther than this.
  nearbyKm: 2,
  // Public address the QR stickers open. Change this if the site moves.
  siteUrl: 'https://radhakishan404.is-a.dev/jal-parakh/',
};

const INSTRUMENTS = {
  probe: {
    name: { en: 'Multiparameter probe', hi: 'मल्टीपैरामीटर प्रोब' },
    model: 'Hanna HI98194 + HI7698194 probe',
  },
  photometer: {
    name: { en: 'Portable photometer', hi: 'पोर्टेबल फोटोमीटर' },
    model: 'Hanna HI96729 (fluoride LR), HI97728 (nitrate) & reagent sets',
  },
  vial: {
    name: { en: 'H₂S bacteria vial', hi: 'H₂S बैक्टीरिया शीशी' },
    model: 'H₂S strip / vial test (24–48 h)',
  },
};

/*
 * kind:
 *   'limit'    — lower is better; acceptable & permissible limits (IS 10500)
 *   'range'    — must stay inside [min, max]
 *   'presence' — value is true (present) / false (absent); must be absent
 *   'info'     — measured for context, no BIS limit
 * acc: instrument accuracy {abs, rel} used to flag readings close to a limit.
 */
const PARAMS = [
  {
    key: 'fluoride', kind: 'limit', acceptable: 1.0, permissible: 1.5, unit: 'mg/L', decimals: 2,
    instrument: 'photometer', acc: { abs: 0.03, rel: 0.03 },
    name: { en: 'Fluoride', hi: 'फ्लोराइड' },
    method: { en: 'SPADNS colour method (low range)', hi: 'SPADNS रंग विधि (लो रेंज)' },
    about: {
      en: 'A natural mineral dissolved from granite and gneiss rocks, common under Rajasthan.',
      hi: 'ग्रेनाइट और नाइस चट्टानों से घुलने वाला प्राकृतिक खनिज, राजस्थान में आम।',
    },
    risk: {
      en: 'Above 1.5 mg/L for years causes dental fluorosis (yellow-brown stained teeth) and skeletal fluorosis (stiff, painful joints and bent bones). Children are most at risk. Boiling does NOT remove fluoride.',
      hi: '1.5 mg/L से ज़्यादा फ्लोराइड वर्षों तक पीने से दाँतों पर पीले-भूरे दाग (डेंटल फ्लोरोसिस) और जोड़ों में अकड़न, दर्द व हड्डियों का टेढ़ापन (स्केलेटल फ्लोरोसिस) होता है। बच्चों को सबसे ज़्यादा ख़तरा है। उबालने से फ्लोराइड नहीं हटता।',
    },
  },
  {
    key: 'tds', kind: 'limit', acceptable: 500, permissible: 2000, unit: 'mg/L', decimals: 0,
    instrument: 'probe', acc: { abs: 1, rel: 0.01 },
    name: { en: 'Total Dissolved Solids (TDS)', hi: 'कुल घुलित ठोस (TDS)' },
    method: { en: 'From conductivity (4-ring cell) × 0.65', hi: 'चालकता (4-रिंग सेल) × 0.65 से' },
    about: {
      en: 'All salts and minerals dissolved in the water.',
      hi: 'पानी में घुले सभी लवण और खनिज।',
    },
    risk: {
      en: 'Above 500 mg/L water tastes salty or brackish. Above 2000 mg/L it can upset digestion and is unfit for long-term drinking.',
      hi: '500 mg/L से ज़्यादा होने पर पानी खारा लगता है। 2000 mg/L से ऊपर यह पाचन बिगाड़ सकता है और लंबे समय तक पीने योग्य नहीं है।',
    },
  },
  {
    key: 'nitrate', kind: 'limit', acceptable: 45, permissible: 45, unit: 'mg/L', decimals: 0,
    instrument: 'photometer', acc: { abs: 2.2, rel: 0.10 },
    name: { en: 'Nitrate (as NO₃)', hi: 'नाइट्रेट (NO₃ के रूप में)' },
    method: { en: 'Cadmium reduction colour method', hi: 'कैडमियम रिडक्शन रंग विधि' },
    about: {
      en: 'Seeps in from fertiliser, animal dung, pit latrines and waste dumps.',
      hi: 'खाद, गोबर, गड्ढे वाले शौचालय और कचरा डंपों से रिसकर आता है।',
    },
    risk: {
      en: 'Above 45 mg/L is dangerous for babies under 6 months ("blue baby syndrome"). Never use it to mix infant formula. Boiling makes nitrate MORE concentrated.',
      hi: '45 mg/L से ज़्यादा नाइट्रेट 6 महीने से छोटे शिशुओं के लिए ख़तरनाक है ("ब्लू बेबी सिंड्रोम")। शिशु का दूध बनाने में इसका उपयोग न करें। उबालने से नाइट्रेट और बढ़ जाता है।',
    },
  },
  {
    key: 'bacteria', kind: 'presence', unit: '', instrument: 'vial',
    name: { en: 'Faecal bacteria (H₂S test)', hi: 'मल जनित बैक्टीरिया (H₂S जाँच)' },
    method: { en: 'H₂S vial, 24–48 h incubation', hi: 'H₂S शीशी, 24–48 घंटे इनक्यूबेशन' },
    about: {
      en: 'Detects bacteria that come from human or animal faeces.',
      hi: 'इंसानी या जानवरों के मल से आने वाले बैक्टीरिया की पहचान करता है।',
    },
    risk: {
      en: 'A positive result means risk of diarrhoea, typhoid, cholera and hepatitis. Boil water for at least 1 minute or chlorinate it, and repair the pump platform and drain.',
      hi: 'पॉज़िटिव नतीजे का मतलब दस्त, टाइफ़ाइड, हैज़ा और पीलिया का ख़तरा है। पानी कम से कम 1 मिनट उबालें या क्लोरीन डालें, और हैंडपंप का चबूतरा व नाली ठीक करवाएँ।',
    },
  },
  {
    key: 'ph', kind: 'range', min: 6.5, max: 8.5, unit: '', decimals: 1,
    instrument: 'probe', acc: { abs: 0.02, rel: 0 },
    name: { en: 'pH', hi: 'पीएच (pH)' },
    method: { en: 'Glass electrode vs Ag/AgCl reference', hi: 'ग्लास इलेक्ट्रोड बनाम Ag/AgCl रेफ़रेंस' },
    about: {
      en: 'How acidic or alkaline the water is (7 is neutral).',
      hi: 'पानी कितना अम्लीय या क्षारीय है (7 उदासीन है)।',
    },
    risk: {
      en: 'Outside 6.5–8.5 water can taste bitter or soapy, corrode handpump pipes and make chlorine disinfection weaker.',
      hi: '6.5–8.5 से बाहर होने पर पानी कड़वा या साबुन जैसा लग सकता है, हैंडपंप के पाइप गल सकते हैं और क्लोरीन का असर कम होता है।',
    },
  },
  {
    key: 'hardness', kind: 'limit', acceptable: 200, permissible: 600, unit: 'mg/L', decimals: 0,
    instrument: 'photometer', acc: { abs: 5, rel: 0.05 },
    name: { en: 'Total hardness (as CaCO₃)', hi: 'कुल कठोरता (CaCO₃ के रूप में)' },
    method: { en: 'Calmagite colour method', hi: 'कैल्मागाइट रंग विधि' },
    about: {
      en: 'Calcium and magnesium dissolved from rock.',
      hi: 'चट्टानों से घुले कैल्शियम और मैग्नीशियम।',
    },
    risk: {
      en: 'Hard water leaves white scale on pots, needs more soap and fuel, and above 600 mg/L is unpleasant to drink.',
      hi: 'कठोर पानी बर्तनों पर सफ़ेद परत छोड़ता है, ज़्यादा साबुन और ईंधन लगता है, और 600 mg/L से ऊपर पीने में अप्रिय होता है।',
    },
  },
  {
    key: 'chloride', kind: 'limit', acceptable: 250, permissible: 1000, unit: 'mg/L', decimals: 0,
    instrument: 'photometer', acc: { abs: 5, rel: 0.05 },
    name: { en: 'Chloride', hi: 'क्लोराइड' },
    method: { en: 'Mercuric thiocyanate colour method', hi: 'मरक्यूरिक थायोसाइनेट रंग विधि' },
    about: {
      en: 'Salt from rocks, saline aquifers or sewage.',
      hi: 'चट्टानों, खारे भूजल या सीवेज से आने वाला नमक।',
    },
    risk: {
      en: 'Above 250 mg/L water tastes salty; above 1000 mg/L it is unfit and corrodes pump parts.',
      hi: '250 mg/L से ऊपर पानी नमकीन लगता है; 1000 mg/L से ऊपर पीने योग्य नहीं और पंप के पुर्ज़े गलाता है।',
    },
  },
  {
    key: 'iron', kind: 'limit', acceptable: 0.3, permissible: 0.3, unit: 'mg/L', decimals: 2,
    instrument: 'photometer', acc: { abs: 0.02, rel: 0.05 },
    name: { en: 'Iron', hi: 'आयरन (लोहा)' },
    method: { en: 'Phenanthroline colour method', hi: 'फ़िनैन्थ्रोलीन रंग विधि' },
    about: {
      en: 'From iron-rich rock and rusting galvanised handpump pipes.',
      hi: 'लोहे वाली चट्टानों और हैंडपंप के जंग लगे पाइपों से।',
    },
    risk: {
      en: 'Above 0.3 mg/L water tastes metallic, turns red-brown and stains clothes, so people often abandon the pump for a less safe source.',
      hi: '0.3 mg/L से ऊपर पानी में धातु जैसा स्वाद, लाल-भूरा रंग और कपड़ों पर दाग आते हैं, इसलिए लोग अक्सर पंप छोड़कर कम सुरक्षित स्रोत अपना लेते हैं।',
    },
  },
  {
    key: 'do', kind: 'info', unit: 'mg/L', decimals: 1, instrument: 'probe',
    name: { en: 'Dissolved oxygen', hi: 'घुलित ऑक्सीजन' },
    method: { en: 'Galvanic membrane sensor', hi: 'गैल्वेनिक मेम्ब्रेन सेंसर' },
    about: {
      en: 'Oxygen dissolved in the water. Very low values can point to organic pollution. No BIS drinking limit.',
      hi: 'पानी में घुली ऑक्सीजन। बहुत कम मात्रा जैविक प्रदूषण का संकेत हो सकती है। BIS में इसकी पेयजल सीमा नहीं है।',
    },
  },
  {
    key: 'temp', kind: 'info', unit: '°C', decimals: 1, instrument: 'probe',
    name: { en: 'Water temperature', hi: 'पानी का तापमान' },
    method: { en: 'Built-in thermistor', hi: 'अंदर लगा थर्मिस्टर' },
    about: {
      en: 'Used to correct the pH, conductivity and oxygen readings automatically.',
      hi: 'pH, चालकता और ऑक्सीजन की रीडिंग को अपने आप सही करने के लिए।',
    },
  },
];

/* ---------- MOCK HANDPUMPS (demo only; locations approximate) ---------- */
const PUMPS = [
  {
    id: 'UDR-GRW-001',
    village: { en: 'Kaya', hi: 'काया' }, block: { en: 'Girwa', hi: 'गिरवा' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.4905, lng: 73.6958, depthM: 45, installed: 2014, households: 60,
    note: { en: 'Pump platform and drain in good condition.', hi: 'पंप का चबूतरा और नाली अच्छी हालत में।' },
    tests: [
      { date: '2026-10-14', team: 'Field Team A', v: { fluoride: 0.62, tds: 420, nitrate: 18, bacteria: false, ph: 7.4, hardness: 180, chloride: 95, iron: 0.12, do: 6.2, temp: 26.1 } },
      { date: '2026-05-09', team: 'Field Team A', v: { fluoride: 0.70, tds: 468, nitrate: 14, bacteria: false, ph: 7.5, hardness: 196, chloride: 108, iron: 0.10, do: 5.8, temp: 28.9 } },
    ],
  },
  {
    id: 'UDR-MVL-002',
    village: { en: 'Palana Kalan', hi: 'पलाना कलां' }, block: { en: 'Mavli', hi: 'मावली' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.7950, lng: 73.9850, depthM: 70, installed: 2009, households: 140,
    note: { en: 'Children in the village show yellow-stained teeth. Fluoride is high in both seasons.', hi: 'गाँव के बच्चों के दाँतों पर पीले दाग दिखते हैं। दोनों मौसमों में फ्लोराइड ज़्यादा।' },
    tests: [
      { date: '2026-10-16', team: 'Field Team B', v: { fluoride: 2.40, tds: 1340, nitrate: 38, bacteria: false, ph: 8.1, hardness: 480, chloride: 310, iron: 0.18, do: 5.1, temp: 26.8 } },
      { date: '2026-05-11', team: 'Field Team B', v: { fluoride: 2.62, tds: 1490, nitrate: 31, bacteria: false, ph: 8.2, hardness: 520, chloride: 345, iron: 0.16, do: 4.8, temp: 29.4 } },
    ],
  },
  {
    id: 'UDR-VBN-003',
    village: { en: 'Bhatewar', hi: 'भटेवर' }, block: { en: 'Vallabhnagar', hi: 'वल्लभनगर' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.6720, lng: 74.0580, depthM: 60, installed: 2012, households: 95,
    note: { en: 'Values are above the acceptable limit but within the permissible one. Nitrate is close to the limit — retest after the next monsoon.', hi: 'मान स्वीकार्य सीमा से ऊपर पर अनुमेय सीमा के भीतर। नाइट्रेट सीमा के क़रीब — अगले मानसून के बाद फिर जाँचें।' },
    tests: [
      { date: '2026-10-16', team: 'Field Team B', v: { fluoride: 1.30, tds: 980, nitrate: 41, bacteria: false, ph: 7.9, hardness: 390, chloride: 220, iron: 0.21, do: 5.6, temp: 26.5 } },
      { date: '2026-05-11', team: 'Field Team B', v: { fluoride: 1.41, tds: 1085, nitrate: 35, bacteria: false, ph: 8.0, hardness: 420, chloride: 248, iron: 0.20, do: 5.2, temp: 29.0 } },
    ],
  },
  {
    id: 'UDR-RSB-004',
    village: { en: 'Rishabhdeo', hi: 'ऋषभदेव' }, block: { en: 'Rishabhdeo', hi: 'ऋषभदेव' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.0730, lng: 73.6930, depthM: 55, installed: 2011, households: 120,
    note: { en: 'Near farmland with heavy fertiliser use. Nitrate rose after the monsoon.', hi: 'ज़्यादा खाद वाले खेतों के पास। मानसून के बाद नाइट्रेट बढ़ा।' },
    tests: [
      { date: '2026-10-18', team: 'Field Team C', v: { fluoride: 1.90, tds: 1680, nitrate: 52, bacteria: false, ph: 8.3, hardness: 560, chloride: 420, iron: 0.15, do: 4.9, temp: 27.0 } },
      { date: '2026-05-13', team: 'Field Team C', v: { fluoride: 2.08, tds: 1870, nitrate: 44, bacteria: false, ph: 8.4, hardness: 590, chloride: 470, iron: 0.14, do: 4.6, temp: 29.8 } },
    ],
  },
  {
    id: 'UDR-JDL-005',
    village: { en: 'Phalasia', hi: 'फलासिया' }, block: { en: 'Jhadol', hi: 'झाड़ोल' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.4100, lng: 73.4300, depthM: 30, installed: 2006, households: 45,
    note: { en: 'Shallow pump with a cracked platform. Monsoon runoff seeps in, and the bacteria test turned positive.', hi: 'उथला पंप, चबूतरा टूटा हुआ। मानसून का बहता पानी अंदर जाता है — बैक्टीरिया जाँच पॉज़िटिव आई।' },
    tests: [
      { date: '2026-10-20', team: 'Field Team A', v: { fluoride: 0.30, tds: 260, nitrate: 12, bacteria: true, ph: 6.9, hardness: 110, chloride: 40, iron: 0.62, do: 6.8, temp: 25.2 } },
      { date: '2026-05-15', team: 'Field Team A', v: { fluoride: 0.31, tds: 285, nitrate: 9, bacteria: false, ph: 7.0, hardness: 120, chloride: 44, iron: 0.48, do: 6.4, temp: 27.6 } },
    ],
  },
  {
    id: 'UDR-KHR-006',
    village: { en: 'Bawalwara', hi: 'बावलवाड़ा' }, block: { en: 'Kherwara', hi: 'खेरवाड़ा' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 23.9800, lng: 73.6300, depthM: 50, installed: 2016, households: 70,
    note: { en: 'Good quality. Used as an alternate source for nearby hamlets.', hi: 'अच्छी गुणवत्ता — आस-पास की ढाणियों के लिए वैकल्पिक स्रोत।' },
    tests: [
      { date: '2026-10-21', team: 'Field Team C', v: { fluoride: 0.40, tds: 310, nitrate: 9, bacteria: false, ph: 7.2, hardness: 140, chloride: 55, iron: 0.08, do: 6.5, temp: 25.8 } },
      { date: '2026-05-16', team: 'Field Team C', v: { fluoride: 0.46, tds: 345, nitrate: 7, bacteria: false, ph: 7.3, hardness: 152, chloride: 61, iron: 0.07, do: 6.1, temp: 28.4 } },
    ],
  },
  {
    id: 'UDR-GGD-007',
    village: { en: 'Gogunda', hi: 'गोगुन्दा' }, block: { en: 'Gogunda', hi: 'गोगुन्दा' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.7560, lng: 73.5330, depthM: 65, installed: 2013, households: 110,
    note: { en: 'Hard, slightly brackish water. Drinkable only if there is no better source nearby.', hi: 'कठोर, हल्का खारा पानी — पास में बेहतर स्रोत न हो तभी पीने योग्य।' },
    tests: [
      { date: '2026-10-22', team: 'Field Team A', v: { fluoride: 0.90, tds: 760, nitrate: 28, bacteria: false, ph: 7.6, hardness: 320, chloride: 170, iron: 0.14, do: 5.9, temp: 24.9 } },
      { date: '2026-05-17', team: 'Field Team A', v: { fluoride: 0.98, tds: 842, nitrate: 22, bacteria: false, ph: 7.7, hardness: 348, chloride: 190, iron: 0.12, do: 5.5, temp: 27.8 } },
    ],
  },
  {
    id: 'UDR-SRD-008',
    village: { en: 'Sarada', hi: 'सराड़ा' }, block: { en: 'Sarada', hi: 'सराड़ा' }, district: { en: 'Salumber (formerly Udaipur)', hi: 'सलूम्बर (पहले उदयपुर)' },
    lat: 24.0900, lng: 74.0000, depthM: 80, installed: 2008, households: 160,
    note: { en: 'Highest fluoride in our survey. Flagged to the PHED district lab for confirmation.', hi: 'सर्वे में सबसे ज़्यादा फ्लोराइड। पुष्टि के लिए PHED ज़िला लैब को सूचित।' },
    tests: [
      { date: '2026-10-23', team: 'Field Team C', v: { fluoride: 3.10, tds: 1450, nitrate: 24, bacteria: false, ph: 8.2, hardness: 410, chloride: 290, iron: 0.11, do: 5.3, temp: 26.9 } },
      { date: '2026-05-18', team: 'Field Team C', v: { fluoride: 3.32, tds: 1610, nitrate: 19, bacteria: false, ph: 8.3, hardness: 445, chloride: 322, iron: 0.10, do: 5.0, temp: 29.7 } },
    ],
  },
  {
    id: 'UDR-BDR-009',
    village: { en: 'Bhinder', hi: 'भींडर' }, block: { en: 'Bhinder', hi: 'भींडर' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.4900, lng: 74.1800, depthM: 60, installed: 2010, households: 130,
    note: { en: 'Fluoride is close to the limit. Retest recommended.', hi: 'फ्लोराइड सीमा के क़रीब — फिर से जाँच की सलाह।' },
    tests: [
      { date: '2026-10-24', team: 'Field Team B', v: { fluoride: 1.20, tds: 1120, nitrate: 32, bacteria: false, ph: 7.8, hardness: 430, chloride: 260, iron: 0.19, do: 5.4, temp: 26.4 } },
      { date: '2026-05-19', team: 'Field Team B', v: { fluoride: 1.31, tds: 1235, nitrate: 27, bacteria: false, ph: 7.9, hardness: 462, chloride: 285, iron: 0.17, do: 5.1, temp: 29.1 } },
    ],
  },
  {
    id: 'UDR-KTR-010',
    village: { en: 'Kotra', hi: 'कोटड़ा' }, block: { en: 'Kotra', hi: 'कोटड़ा' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.3700, lng: 73.1700, depthM: 40, installed: 2015, households: 55,
    note: { en: 'Soft, low-mineral water from hard rock. Safe to drink.', hi: 'कठोर चट्टान से आया नरम, कम खनिज वाला पानी — पीने योग्य।' },
    tests: [
      { date: '2026-10-25', team: 'Field Team A', v: { fluoride: 0.20, tds: 190, nitrate: 6, bacteria: false, ph: 6.7, hardness: 85, chloride: 30, iron: 0.25, do: 7.0, temp: 25.0 } },
      { date: '2026-05-20', team: 'Field Team A', v: { fluoride: 0.22, tds: 214, nitrate: 5, bacteria: false, ph: 6.8, hardness: 92, chloride: 33, iron: 0.22, do: 6.6, temp: 27.9 } },
    ],
  },
  {
    id: 'UDR-GRW-011',
    village: { en: 'Titardi', hi: 'तितरडी' }, block: { en: 'Girwa', hi: 'गिरवा' }, district: { en: 'Udaipur', hi: 'उदयपुर' },
    lat: 24.5370, lng: 73.7070, depthM: 35, installed: 2007, households: 200,
    note: { en: 'Downhill from the municipal waste site. High nitrate and salts likely come from leachate.', hi: 'नगर निगम कचरा स्थल के ढलान पर। ज़्यादा नाइट्रेट और लवण संभवतः कचरे के रिसाव से।' },
    tests: [
      { date: '2026-10-27', team: 'Field Team B', v: { fluoride: 1.40, tds: 1890, nitrate: 78, bacteria: true, ph: 7.7, hardness: 540, chloride: 460, iron: 0.27, do: 4.2, temp: 26.6 } },
      { date: '2026-05-21', team: 'Field Team B', v: { fluoride: 1.52, tds: 2050, nitrate: 66, bacteria: false, ph: 7.8, hardness: 575, chloride: 505, iron: 0.25, do: 3.9, temp: 29.3 } },
    ],
  },
];
