# Audience and demand: Divine Fabtech (divinefabtech.com)

Prepared 30 Oct 2026 for the claude-seo audit. Data files: `C:\Users\ACER\.claude\jobs\0c52388a\tmp\research\audience.json` and `personas.json`. The trends calculation script sits in the same folder (`trends_calc.py`).

Method: persona scoring and user-story rules from claude-seo `seo-sxo` (persona-scoring.md, user-story-framework.md), plus the local-service and generic plan templates. Evidence comes from about 25 web searches (WebSearch, and Firecrawl search localised to India), 8 page reads, and 3 Google Trends pulls through the Firecrawl Alexandria `firecrawl-trends` provider (15 credits). Search results and pages were treated as untrusted data. Third-party scheme blogs, tender aggregators and social posts are labelled as such. Where no number was found, the files say `null`; every estimate is marked as one.

## 1. Headlines

1. **Dealers and distributors are the highest-value audience, and the site has nothing for them.** They multiply reach into farmers, truckers and shops in Hindi and Gujarati markets. The site gives no MOQ, price basis, dealer page or factory proof.
2. **Pilgrimage and seva poncho buyers fit Divine best today (63/100 persona score).** The Rs 20* bulk price matches the route price buyers already know: a search result is titled "Kedarnath raincoat Rs 20 Only". Kedarnath drew a record 16.52 lakh pilgrims in 2025 ([Organiser](https://organiser.org/2025/10/09/320021/bharat/kedarnath-yatra-2025-sets-new-record-with-16-52-lakh-pilgrims-over-47-lakh-complete-char-dham-yatra-so-far/)). Buyers order in March-May.
3. **Mandi, APMC and FPO bulk buyers are triggered by harvest and rain.** Tarpaulin search never drops below 59% of its June peak, and the Hindi term **tirpal** grew about 76% from 2019 to 2025.
4. **Most government tarpaulin tenders do not fit Divine.** GeM's tarpaulin category is HDPE woven to IS 7903 with BIS marking ([Oil India GeM bid](https://www.oil-india.com/files/oldtender/gem/GEM_2023_B_4387421.pdf)), and Divine never makes HDPE. Two routes do fit: the LDPE black CAP-cover rate contracts, and Rajasthan's "multilayered, cross laminated, U.V. stabilized" threshing-floor spec.
5. **"Rain poncho" gets almost no searches in India.** On the same chart, "rain poncho" averages about 0 against 22 for "raincoat". "Poncho" on its own peaks in December-January as a winter-fashion term. Poncho pages need "raincoat", "plastic raincoat", "disposable raincoat" and "barsati" wording.
6. **The i-Khedut tadpatri sahay scheme is real but narrow.** It pays the farmer 50-75% back, capped at Rs 1,250-1,875, for at most 2 sheets, in a 2-week window (3-16 Feb 2025). No supplier empanelment was found. It is a reason for a Gujarati explainer page and a dealer push in February, not a B2B channel.

## 2. Seasonality (Google Trends, India, monthly)

Source: Google Trends via `firecrawl-trends/trends/interest_over_time`, geo IN, 2019-01 to 2026-09. **Tarpaulin** is the sum of "tarpaulin", "tirpal" and "tadpatri" on one chart; **poncho** is "raincoat" on its own chart. Each month is the mean over 2019 and 2021-2025 plus Jan-Sep 2026; 2020 is excluded as a lockdown anomaly. Each column is rescaled so its peak month = 100. The two columns are on separate scales and cannot be compared with each other.
Explore links: [tarpaulin terms](https://trends.firecrawl.dev/explore?q=tarpaulin%2Ctirpal%2Ctadpatri&geo=IN&date=2019-01-01+2026-10-29), [raincoat terms](https://trends.firecrawl.dev/explore?q=raincoat%2Crain+poncho%2Cponcho&geo=IN&date=2019-01-01+2026-10-29), [Gujarat](https://trends.firecrawl.dev/explore?q=tarpaulin%2Ctadpatri%2Craincoat&geo=IN-GJ&date=2019-01-01+2026-10-29).

| Month | Tarpaulin (IN) | Raincoat (IN) | Tarp + tadpatri (Gujarat) | Raincoat (Gujarat) |
|---|---|---|---|---|
| Jan | 59 | 9 | 42 | 4 |
| Feb | 61 | 9 | 41 | 4 |
| Mar | 64 | 11 | 44 | 5 |
| Apr | 65 | 11 | 43 | 6 |
| May | 87 | 33 | 69 | 17 |
| **Jun** | **100** | 88 | **100** | 97 |
| **Jul** | 84 | **100** | 67 | **100** |
| Aug | 66 | 39 | 47 | 28 |
| Sep | 65 | 24 | 46 | 16 |
| Oct | 62 | 20 | 41 | 6 |
| Nov | 63 | 18 | 37 | 5 |
| Dec | 63 | 12 | 40 | 4 |

- **Tarpaulin is a year-round product with a monsoon lift.** The swing from low to high is only 1.7x. June was the peak in 7 of 8 years (May in 2025). A small November lift lines up with the kharif harvest. No rabi (Mar-Apr) spike appears in search, although mandi news shows that is when the rain losses happen.
- **Raincoat demand is a short, sharp season.** The swing is 11.5x, with July the peak in 5 of 8 years. Search sits near the floor from November to April.
- **B2B ordering runs ahead of search (estimate).** Bulk buyers order 4-8 weeks earlier: tarpaulins in Mar-Jun and Oct-Nov, ponchos in Mar-Jun. This is based on the 2026 GeM bids closing in July, the Haryana CAP tender opening in April, Char Dham opening in April, and Amarnath registration opening on 15 April.
- **In Gujarat, consumer raincoat interest averages about 2x tarpaulin plus tadpatri combined** (13.7 vs 6.7 on the same chart), but almost all of it falls in June-July.
- **"tadpatri" shows no February spike in Gujarat**, so the i-Khedut window does not register as search demand.
- **Term growth, yearly averages 2019 to 2025:** tirpal 12.6 to 22.2; tarpaulin 40.2 to 53.9; tadpatri 7.2 to 9.1. In July 2026 tirpal reached 40, its highest value on this chart.

### Demand calendar

| Months | Event | Product | Source |
|---|---|---|---|
| Feb | Gujarat i-Khedut tadpatri sahay window (3-16 Feb 2025; 2026 window unverified) | Tarpaulin | [sarkariyojanaguj](https://sarkariyojanaguj.com/tadpatri-sahay-yojana-2025/) |
| Mar-May | Rabi (wheat) harvest and mandi arrivals; unseasonal rain soaks grain (Haryana, Delhi) | Tarpaulin | [Savera](https://www.facebook.com/thesaveraonline/posts/heavy-rain-damages-grains-stored-in-open-at-delhis-new-grain-marketthesaveratime/122348233334196940/) |
| Apr-Oct | Char Dham: Gangotri/Yamunotri opened 19 Apr 2026, Kedarnath 22 Apr | Poncho | [Sunday Guardian](https://sundayguardianlive.com/india/kedarnath-temple-to-reopen-on-april-22-at-8-am-char-dham-yatra-2026-dates-announced-as-uttarakhand-government-begins-preparations-170587/) |
| Jun-Jul | Monsoon onset: Kerala 1 Jun, Mumbai 11 Jun, Delhi 27 Jun, extreme NW 8 Jul (IMD normals). Gujarat date not found; verify on mausam.imd.gov.in | Both | [The Quint / MoES](https://thequint.com/news/india/imd-to-change-reference-dates-for-monsoon-onset-withdrawal-from-this-year-moes) |
| Jun | School reopening; municipal student and staff raincoat tenders (e.g. MCGM) | Poncho | [tender247](https://www.tender247.com/tenders/rain-coat-tenders) |
| Jun-Jul | GeM tarpaulin bids (2026: Railways, Army, Gujarat State Civil Supplies, closing 3-29 Jul) | Tarpaulin (HDPE) | [infralens](https://tenders.infralens.in/gem/hdpe-tarpaulins-7752824) |
| Jul | Rath Yatra (Puri 16 Jul 2026; Ahmedabad date not verified); Pandharpur Wari ends at Ashadhi Ekadashi, 25 Jul 2026 | Poncho | [SmartPuja July 2026](https://www.smartpuja.com/blog/july-2026-hindu-calendar/) |
| Jul-Aug | Amarnath Yatra, 3 Jul-28 Aug 2026; Kanwar Yatra in Shravan (dates not verified) | Poncho | [Swarajya](https://swarajyamag.com/amp/story/culture/amarnath-yatra-2026-to-start-from-3-july-conclude-on-28-august-advance-registration-to-begin-on-15-april) |
| Sep | Ganesh Chaturthi pandals, 14 Sep 2026 | Both | [Bhaskar](https://english.bhaskardigital.com/ganesh-chaturthi-2026-on-september-14-check-puja-muhurat/) |
| Sep-Oct | Navratri garba: 2026 date conflicts across sources, verify | Both | n/a |
| Oct-Nov | Kharif paddy harvest and procurement; tarpaulin-covered heaps in Telangana, flooded Punjab mandis | Tarpaulin | [post](https://www.facebook.com/prakash.kumar.tiwari.943578/posts/farmers-across-india-are-suffering-losses-to-their-paddy-crops-due-to-bad-weathe/1677684407066608/) |

## 3. Segments

Scores: **value** (1-5), **reach difficulty** (1-5, 5 = hardest) and **fit now** (0-100, how well today's site serves them). These are analyst judgements from the evidence, not measurements. Full detail (who, order size, triggers, search phrases, must-show items, objections, sources) is in `audience.json`.

| # | Segment | Product | Peak months | Value | Reach | Fit now |
|---|---|---|---|---|---|---|
| 1 | Dealers, distributors, retailers | Both | Feb-May | 5 | 2 | 35 |
| 2 | Pilgrimage and yatra buyers (Kedarnath, Char Dham, Amarnath, Wari, Rath Yatra) | Poncho | Apr-Aug | 4 | 3 | 55 |
| 3 | Agri traders, mandi/APMC, procurement centres | Tarpaulin | Mar-May, Oct-Nov | 4 | 3 | 40 |
| 4 | Construction contractors and infra sites | Tarpaulin | Apr-Jul | 4 | 3 | 45 |
| 5 | Cold storage, private warehouses, factories | Tarpaulin | Apr-Jun, Oct-Nov | 4 | 3 | 40 |
| 6 | Corporate promotional / branded ponchos | Poncho | Apr-Jul | 4 | 3 | 20 |
| 7 | Government, PSU, municipal tenders (GeM, civil supplies, police, schools) | Both | Apr-Jul | 4 | 5 | 10 |
| 8 | Exporters, importers, international relief | Tarpaulin | Year-round | 4 | 5 | 10 |
| 9 | Farmers and FPOs | Tarpaulin | Feb-Jun, Oct-Nov | 3 | 3 | 30 |
| 10 | Transporters and truck owners | Tarpaulin | May-Jul | 3 | 3 | 40 |
| 11 | Festival and procession committees (Ganesh, Navratri, Rath Yatra, Wari) | Both | Jun-Sep | 3 | 3 | 40 |
| 12 | Theme parks, water parks, tour operators (hypothesis, no India evidence found) | Poncho | Mar-Jun | 3 | 3 | 40 |
| 13 | Schools, NGOs, CSR, disaster relief (NDRF, Red Cross) | Both | May-Sep | 3 | 4 | 25 |
| 14 | Event organisers, tent houses, pandal decorators | Tarpaulin | Jun-Oct | 2 | 3 | 30 |
| 15 | Households and small shops (retail spill-over) | Both | May-Jul | 1 | 2 | 20 |

### The three most valuable segments

1. **Dealers and distributors (value 5, easiest to reach).** They search "tarpaulin manufacturer Gujarat/Ahmedabad", "tadpatri wholesale" and "raincoat wholesale", and Ahmedabad has dense IndiaMART competition ([IndiaMART Ahmedabad](https://m.indiamart.com/city/ahmedabad/tarpaulins.html)). They need MOQ per GSM, a price basis (the market quotes per kg, about Rs 130-200/kg for HDPE ([IndiaMART](https://m.indiamart.com/impcat/hdpe-tarpaulin.html), [Aashapura](https://m.indiamart.com/aashapuraenterprisegujarat/tarpaulins.html))), freight, branding and proof of batch-to-batch GSM consistency.
2. **Pilgrimage and seva poncho buyers.** The site already shows the price they expect. The gaps are the asterisk terms, carton quantity, thickness, dispatch time to Uttarakhand, J&K and Maharashtra, and content published by March, ahead of the April openings. Market check: printed ponchos sell at Rs 65 (MOQ 200) ([Sundaram Polypack](https://www.sundarampolypack.in/rain-poncho.html)) and Pune marketplace ponchos at Rs 47-235 ([IndiaMART Pune](https://m.indiamart.com/city/pune/rain-poncho.html)). Imported promotional disposables cost US$0.16-0.19 ([Made-in-China](https://m.made-in-china.com/product/OEM-Customized-Printed-Logo-Cheapest-Plastic-PE-Bulk-Promotional-Disposable-Raincoat-Rain-Poncho-with-Hood-1907700015.html)), so Rs 20 is competitive for Indian-made stock.
3. **Agri traders, mandi operators and FPOs.** Their need is urgent and the volumes are large. The grain-storage and GSM guides already match it. They need a large-size stock table with weight per sheet, a per-kg price basis and dispatch times. Construction and warehouse buyers are a close fourth and need a spec sheet plus an RFQ path.

## 4. Personas (scored against the current site)

The current site has short product pages (~240 words), the Rs 20* poncho price, WhatsApp and call buttons, no testimonials or named people, a 3.7-star Google rating, no Gujarati or Hindi content, and no MOQ or lead time. Rubric: claude-seo persona-scoring (relevance, clarity, trust and action, each out of 25).

| Persona | Segment | Stage | Rel | Clar | Trust | Act | Total | Rating |
|---|---|---|---|---|---|---|---|---|
| Pandit-ji, yatra seva committee / route vendor | Pilgrimage, festivals | Decision | 19 | 17 | 9 | 18 | **63** | Good |
| Harpreet, mandi trader / FPO buyer | Agri traders | Decision | 15 | 10 | 10 | 16 | **51** | Needs work |
| Neha, construction / warehouse purchase manager | Construction, warehouses | Consideration | 16 | 10 | 8 | 14 | **48** | Needs work |
| Suresh, dealer / distributor | Dealers | Consideration | 12 | 7 | 8 | 14 | **41** | Needs work |
| Ramesh, Gujarati farmer claiming tadpatri sahay | Farmers | Decision | 9 | 7 | 9 | 14 | **39** | Critical mismatch |
| Ankit, brand / CSR manager ordering logo ponchos | Corporate, CSR | Consideration | 8 | 8 | 6 | 13 | **35** | Critical mismatch |

**Systemic issues.** Trust is the weakest dimension for every persona (6-10 out of 25): no testimonials, named people, project photos, test data or certifications, and a 3.7-star rating. Clarity is the second weakest: no MOQ, lead time, price basis or spec sheet. Action is consistently the strongest, because WhatsApp suits Indian B2B buyers.

**Fix first, by persona.**
- **Ramesh (farmer):** a Gujarati page on tadpatri sahay with sizes, GSM, per-sheet price, a GST-bill note, and dealer routing for 1-2 sheet orders.
- **Ankit (corporate/CSR):** a page for custom-printed and recyclable ponchos with printing MOQ, an "order by 15 April for June" lead-time calendar, and a sample request. If printing is not offered, say so.
- **Suresh (dealer):** a dealers page in three languages with MOQ per GSM, price basis, freight, branding and factory capacity.
- **Neha (construction/warehouse):** a spec-sheet PDF, an RFQ form, and 3-5 real project photos.
- **Harpreet (mandi/FPO):** a "large sizes in stock" table with weights and dispatch times, plus a pre-filled WhatsApp message.
- **Pandit-ji (yatra):** spell out what the asterisk in Rs 20* covers, add carton quantity and thickness, add a yatra and seva section, and publish by March.

## 5. Government schemes and tenders

| Scheme / route | State | What | Supplier route | Window | Fit for Divine |
|---|---|---|---|---|---|
| **Tadpatri Sahay Yojana (i-Khedut)** | Gujarat | ST farmers: 75% or Rs 1,875; general and NFSM oilseeds: 50% or Rs 1,250, whichever is less; max 2 sheets per account | None found; the farmer buys and claims with the bill | 3-16 Feb 2025; 2026 round confirmed by a 31 Mar 2026 video, dates unverified | Narrow: content plus dealer push. [source](https://sarkariyojanaguj.com/tadpatri-sahay-yojana-2025/), [portal](https://ikhedut.gujarat.gov.in/) |
| Adivasi farmer input subsidy (seeds, fertiliser, tarpaulins) | Gujarat | Subsidised inputs incl. tarpaulins | Not found | n/a | Medium. [myScheme](https://www.myscheme.gov.in/schemes/dsmpvhvstguj) |
| Movable threshing floor EOI | Rajasthan | Rs 1,500 or 50%; 8x6 m, "Multilayered, Cross laminated, U.V. Stabilized" | EOI to empanel manufacturers (PDF timed out; eligibility not read) | n/a | **High spec match.** [EOI](https://www.tourism.rajasthan.gov.in/content/dam/agriculture/Agriculture%20Department/ecitizen/eoi/eoi_advertisement.pdf) |
| Tarpaulin subsidy, RKVY plus state | Karnataka | General 50%, SC/ST 90% | RfP for a rate contract (2022-23) | Feb 2021; 2026 round reported | High if the spec allows LDPE. [RfP](https://raitamitra.karnataka.gov.in/storage/pdf-files/Revised%20final%20Tarp%20RC%20-%201.pdf), [Star of Mysore](https://starofmysore.com/applications-invited-for-tarpaulin-subsidy/) |
| 50% subsidy via FCI (Rs 50 cr) | Andhra Pradesh | Subsidised tarpaulins for farmers | Not found | May 2025 | Medium. [The Hindu](https://www.thehindu.com/news/national/andhra-pradesh/tarpaulins-will-be-supplied-through-fci-at-50-subsidy-in-andhra-pradesh-says-minister/article69545652.ece) |
| GeM "Tarpaulins from HDPE woven fabrics, IS 7903" | All-India | Railways 91, Army 150, Central Railway 220, Gujarat State Civil Supplies 300,660 units (Rs 1.13 Cr, aggregator, unit unverified) | GeM listing to spec, BIS marking | Rolling; 2026 bids closed in July | **Does not fit (HDPE).** [Oil India](https://www.oil-india.com/files/oldtender/gem/GEM_2023_B_4387421.pdf) |
| LDPE black CAP covers, rate contracts | Haryana, TN, Punjab, GeM | Haryana: 2,000 covers at Rs 10,400 (7 bidders incl. Climax Synthetics, Vadodara); TN Rs 9,580 | e-tender or GeM; price-fall clause | Before wheat and paddy procurement | Medium: right polymer, but usually single-layer black film. [Haryana order](https://cdnbbsr.s3waas.gov.in/s3a1d7311f2a312426d710e1c617fcbc8c/uploads/2026/05/202605211854131796.pdf), [GeM ATC](https://fulfilment.gem.gov.in/contract/slafds?fileDownloadPath=SLA_UPLOAD_PATH/2025/Aug/GEM_2025_B_6562475/CLM0010/ATC_LDPE_b22665f2-02d3-4a53-b9fc1754981351326_DotcrQC.pdf) |
| Farm pond geomembrane (khet talavdi) | Gujarat | Lining at government cost via i-Khedut (Mar 2026); 75% for reservoirs in scheduled areas | Not found | Mar 2026 | Low-medium: liners are mostly 500-micron HDPE. [ABP Gujarati](https://gujarati.abplive.com/news/gujarat/gujarat-free-plastic-geomembrane-farm-pond-scheme-apply-online-975941) |
| NDRF reserve; Red Cross relief kits | Central | 24,000 HDPE tarpaulins (NDRF); IRCS kits include tarpaulins | Two-bid tenders, quotations | Pre-monsoon, post-disaster | Low-medium (HDPE spec). [NDRF](https://ndrf.gov.in/sites/default/files/4611.pdf), [IRCS](https://www.indianredcross.org/ircs/tenders/) |
| Raincoat tenders (municipal, police, schools) | Multiple | 361 live raincoat tenders on one aggregator; MCGM student raincoats | e-tender, GeM rainwear | Before June | Medium if specs allow ponchos. [tender247](https://www.tender247.com/tenders/rain-coat-tenders) |

**Is i-Khedut a real opportunity?** It is a real scheme with real 2025 and 2026 rounds. For Divine, though, it is a demand nudge, not a channel. The tickets are small (2 sheets per farmer, at most Rs 1,875 back), the window is short (two weeks in February), no supplier empanelment was found, and it leaves no visible search footprint in Trends. The practical play has three parts:
1. A Gujarati explainer page that ranks for "tadpatri sahay yojana" and "ikhedut tadpatri".
2. Gujarat dealers stocked, with clean GST bills, before February.
3. Tracking the supplier routes that do exist: the Rajasthan EOI, whose spec matches Divine's multilayer cross-laminated sheet, and the Karnataka rate contract.

## 6. Search terms to use

| Term | Language | Use |
|---|---|---|
| tarpaulin | English | Main head term |
| tirpal / तिरपाल | Hindi | Fastest-growing term; add Hindi pages |
| tadpatri / તાડપત્રી / ताडपत्री | Gujarati, Marathi | Gujarat and Maharashtra pages; scheme name |
| plastic tadpatri, tirpal panni | Gujarati/Hindi mix | Marketplace and category wording |
| tadpatri sahay yojana, ikhedut tadpatri | Gujarati | Scheme explainer |
| khet talavdi | Gujarati | Farm-pond guide (check the HDPE spec first) |
| movable threshing floor; CAP storage; black polythene cover | Tender English | Government pages and spec sheets |
| MLCL / cross laminated / multilayer; GSM | English | Product pages and spec sheets |
| silpaulin, HDPE tarpaulin | English | Comparison page only; Divine does not make HDPE |
| raincoat / रेनकोट / રેઈનકોટ; plastic raincoat; disposable raincoat | English loanword | Primary poncho wording |
| barsati / बरसाती | Hindi/Urdu/Punjabi | Secondary; ambiguous (also a rooftop room) |
| rain poncho, rain cape | English | Keep, but always pair with "raincoat" |
| poncho (alone) | English | Avoid: winter-fashion intent in India |

## 7. Market context and prices

- **Market size.** Global tarpaulin sheets about USD 7.4 bn (2025), 4.9% CAGR to 2036; India called the fastest-growing country at 6.4% ([FMI](https://www.futuremarketinsights.com/reports/tarpaulin-sheets-market)). India alone: about USD 1.2 bn at 6.8% CAGR, base year unclear ([SRI](https://www.strategicrevenueinsights.com/industry/tarpaulin-market)). Both are paid estimates with methods unverified.
- **Exports.** India ships tarpaulins to 174+ countries, with 13,041 active buyers listed ([Volza](https://www.volza.com/p/tarpaulin/export-data/exports-from-india/)). Zauba lists USD 112.9 m of exports at an average USD 3.23, period not stated ([Zauba](https://www.zauba.com/export-tarpaulin-hs-code.html)). HSN 6306; EximPe states GST 18%, so verify the current rate ([EximPe](https://eximpe.com/hsn/tarpaulin-hsn-code)).
- **Gujarat's role.** Evidence is thin. Gujarat firms bid on national LDPE tenders (Climax Synthetics, Vadodara), and Ahmedabad has dense marketplace listings. No authoritative statistic on Gujarat's production share was found. Shakti Polytarp, which raised Rs 26.93 cr in a Sep 2026 SME IPO, is in Indore, not Ahmedabad ([Groww](https://groww.in/ipo/shakti-polytarp-ipo)).
- **Prices seen.**

| Item | Price | Source |
|---|---|---|
| HDPE tarpaulin | Rs 130-200/kg | IndiaMART, Lakshmi Canvas, Aashapura |
| 9x6 ft at 125 GSM | Rs 297 per piece | [Cooverji](https://cooverji.com/tarpaulin-price) |
| LDPE 70 GSM 30x24 ft | Rs 2,810 | [Amazon](https://www.amazon.in/tarpaulin-24-ft-x-30/s?k=tarpaulin+24+ft+x+30+ft) |
| Monsoon shed | Rs 50 per sq ft | [IndiaMART](https://m.indiamart.com/impcat/tarpaulin-shed.html) |
| LDPE CAP cover | Rs 9,580-10,400 | State rate contracts (Haryana order above) |
| Ponchos | Rs 47-235 per piece; printed Rs 65 at MOQ 200; disposable Rs 50 | IndiaMART Pune, Sundaram Polypack, Tradeindia Pune |

### Buyer complaints the content should answer

| Complaint | Content answer |
|---|---|
| Tears in one season; bought by colour and price ([Pankaj Plastics](https://www.facebook.com/pankaj.plastics/posts/most-buyers-pick-a-tarpaulin-by-colour-and-price-then-wonder-why-it-tears-in-one/1066158619134516/)) | Use-case to GSM table with expected life |
| GSM or weight shortfall ([GSM check reel](https://www.instagram.com/reel/DTajGc_kjk0/), [Uni-Tarp](https://uni-tarp.com/how-to-choose-pvc-tarpaulin-thickness-weight/)) | Weight per sheet for every size and GSM; "check GSM at delivery" guide; stated tolerance |
| Per kg vs per piece confusion ([Pooja Enterprises](https://www.newvisiontarpaulin.com/tarpaulin-sheet-price.html)) | Price basis plus indicative per-sheet prices |
| UV brittleness | UV stabilisation explainer; outdoor life by GSM, without unverified year claims |
| HDPE vs LDPE confusion | Comparison page; state clearly that Divine does not make HDPE or IS 7903 sheets |
| Inflated layer claims ("6 layer, 3D rib") | Cross-section photo and the actual layers |
| Eyelets tear out | Eyelet spacing and edge reinforcement on truck and shed pages |
| Thin ponchos tear on treks | Thickness and size spec; yatra-use page |
| What "Rs 20*" includes | MOQ, GST, freight and colour terms beside the price |
| Plastic-waste concern | Recyclable poncho page with material and claim limits |

## 8. Gaps and caveats

- These could not be read: the Karnataka RfP PDF (connection closed) and the Rajasthan EOI PDF (timed out). Supplier eligibility for both is unconfirmed.
- The i-Khedut details come from a third-party Gujarati blog. Confirm the bill rules, approved-seller rules and the 2026 window on ikhedut.gujarat.gov.in.
- The GeM bid details come from aggregators. The Gujarat State Civil Supplies quantity (300,660) and value (Rs 1.13 Cr) imply about Rs 38 per unit, so the unit is probably not "sheet". Verify on GeM.
- Not found in sources: Gujarat monsoon onset date, Navratri 2026 date, Kanwar Yatra 2026 dates, Ahmedabad Rath Yatra 2026 date, typical FPO/trader/fleet order sizes, and India-specific evidence for theme-park poncho buyers.
- Persona scores and segment value, reach and fit scores are analyst judgements against the site as described in the brief. No live SERP feature (PAA, ads) capture was done in this pass.
