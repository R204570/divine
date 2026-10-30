# Local SEO findings: Divine Fabtech Industries

Audit date: 30 Oct 2026. Specialist: seo-local (claude-seo 2.5.0), run inline.
Raw data: `C:\Users\ACER\.claude\jobs\0c52388a\tmp\research\authority.json`.

**Business type:** brick-and-mortar manufacturer with a hybrid service area. The factory is at Survey No 710-711, Village Rupal, Bavla (Ahmedabad district), and it ships in bulk across Gujarat and India.
**Vertical:** B2B industrial manufacturing. None of the skill's six consumer verticals apply, so no industry multipliers were used.

## Local SEO score: 42 / 100 (estimate)

| Dimension | Weight | Score | Basis |
|---|---|---|---|
| GBP signals | 25% | 45 | Live listing with the right website and phone, but generic categories, an address typo, and products/photos/posts unverified |
| Reviews and reputation | 20% | 25 | 3.7 stars from 6 Google reviews; the nearest rival has 42 at 4.5 |
| Local on-page | 20% | 70 | Ahmedabad/Gujarat landing pages, NAP in the footer and contact page, Maps embed (see main audit) |
| NAP consistency and citations | 15% | 30 | About 6 citations found, 4 with errors; no IndiaMART, TradeIndia or ExportersIndia |
| Local schema | 10% | 65 | LocalBusiness present; geo and full sameAs missing (main audit) |
| Local links and authority | 10% | 10 | Domain registered 29 Oct 2026; no association or directory links found |

Proximity explains about 55% of local-pack variance (Search Atlas), and Divine can't change it. Bavla is 35-45 km from central Ahmedabad, so the city-wide pack is hard to win. Bavla, Changodar and Sanand searches, and the product/category relevance signals below, are the realistic targets.

## Google Business Profile: what Google shows today

Source: Google Maps place `ChIJY9QNbzyVXjkRvFc3HBQmrh0`, read through Firecrawl's Maps provider on 30 Oct 2026.

| Field | Live value | Verdict |
|---|---|---|
| Name | DIVINE FABTECH INDUSTRIES | OK (matches GST trade name) |
| Address | `Survey No 710-711Village Rupal Rupal , Bavla, Jivapura, Gujarat 382220` | **Fix**: missing comma and space, "Rupal" repeated, stray space before the comma |
| Pin | 22.8076803, 72.3638182 | Looks right; reuse as `geo` in schema |
| Phone | 098251 48321 | OK |
| Website | https://www.divinefabtech.com/ | OK (already moved to the new domain) |
| Categories | Manufacturer; Business to business service | **Weak**: the second category says nothing about tarpaulins or ponchos |
| Rating | 3.7 from 6 reviews | **Lowest review count of any Gujarat B2B rival checked** |

**Local-pack check.** Divine does not appear in the first 20 Maps results for "tarpaulin manufacturer Bavla Ahmedabad", searched from a point at Bavla. NK Polycross (4.5, 42 reviews, 4 km south on the Rupal-Bavla road) is #10. Divine is also missing from the top 10 for "rain poncho manufacturer Ahmedabad". Leaders there: Vardhayini Plastics 4.9/33, Poly Shield Industries 4.7/14, Aashi Rainwear 4.6/90.

For context, the Ahmedabad tarpaulin pack is dominated by review volume: Ambica Traders 5.0/1,137, Noble Brothers 4.9/516, B.M.Corporation 4.9/138, Radhe Krishna Tadpatri 4.9/110 and Shree Ambica Geotex 4.2/103.

### Category recommendation (verified against real GBP categories in this market)

About 40 competitor profiles were read. Their categories are real GBP category names:

- **Primary: keep "Manufacturer".** NK Polycross, Ambica Traders, Noble Brothers and Gujarat Raffia all use it. No profile used a tarpaulin-specific category ("Tarpaulin supplier" or "Tarpaulin manufacturer"). Check the GBP editor once; if one is offered, test it as primary.
- **Additional (replace "Business to business service"):**
  - "Polythene and plastic sheeting supplier" (Frank Industries, Shree Ambica Geotex, Aashapura/Nakoda)
  - "Plastic Products Supplier" (A.U. Industries, Frank Industries)
  - "Fabric product manufacturer" (Aashapura/Nakoda)
  - "Protective clothing supplier" for ponchos (Shree Ambica Geotex)
  - optionally "Wholesaler"
- Do **not** add keywords to the business name. NK Polycross ("NK Polycross LLP | Multilayer Cross Laminated Tarpaulin"), Ambica Traders and Shankheshwar do this. It breaks GBP guidelines and risks suspension, even though it helps them in the short term.

## Review health

| Entity | Google | Justdial | IndiaMART |
|---|---|---|---|
| **Divine Fabtech** | **3.7 / 6** | 4.1 / 7 (snippet; brief says 3.5 / 8) | none |
| NK Polycross LLP (Bavla) | 4.5 / 42 | 3.8 / 8 | 4.7 / 3 |
| A.U. Industries (Mahijada) | 4.8 / 13 | 5.0 / 11 | n/a |
| Shankheshwar Industries (Aslali) | 5.0 / 1 | 5.0 / 1 | 3.8 / 18 |
| Amrut Plastopack (Vadodara) | 4.5 / 2 | 4.5 / 2 | 4.2 / 9 |
| Everest Polymers (Delhi) | 4.8 / 36 | n/a | 4.2 / 146 |
| Shalimar Pack (Mumbai) | 4.0 / 23 | 4.1 / 39 | 3.5 / 77 |

**Velocity plan.** Get to 10 reviews within 6 weeks (Sterling Sky's "magic 10" step). After that, keep 3-4 a month without gaps of about 3 weeks or more, which gives roughly 45 in 12 months and passes NK Polycross.

How to ask: use the direct review link `https://search.google.com/local/writereview?placeid=ChIJY9QNbzyVXjkRvFc3HBQmrh0`.

- Send a WhatsApp message 3-5 days after each delivery.
- Put a QR code on invoices and dispatch slips.
- Ask dealers and contractors in person.

Ask every buyer, not just the happy ones (no review gating), and offer no incentives. Reply to all six existing reviews now.

## NAP consistency audit

The canonical NAP, from the site's `src/lib/company.ts`: **Divine Fabtech Industries**, Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220, **+91 98251 48321**.

| Source | Name | Address / locality | Phone | Issue |
|---|---|---|---|---|
| Website | Divine Fabtech Industries | Survey No 710-711, Village Rupal, Bavla, Jivapura 382220 | +91 98251 48321 | Reference |
| [Google Business Profile](https://www.google.com/maps/place/?q=place_id:ChIJY9QNbzyVXjkRvFc3HBQmrh0) | DIVINE FABTECH INDUSTRIES | "710-711Village Rupal Rupal ," | 098251 48321 | Address typo |
| [Justdial](https://www.justdial.com/Ahmedabad/Divine-Fab-Tech-Adroda/079PXX79-XX79-220324211116-U1R1_BZDET) | **Divine Fab Tech** | **Adroda**, Ahmedabad | not visible | Wrong name and locality; rating shown three ways (4.1/7 on the listing, 3.58 and 4.17 on cached category pages) |
| [JD Mart product](https://www.justdial.com/jdmart/Ahmedabad/200-gsm-HDPE-tarpaulin/pid-802991456/079PXX79-XX79-220324211116-U1R1) | Divine Fab Tech | - | - | Product titled "200 gsm **HDPE** tarpaulin"; Divine makes multilayer, not HDPE |
| [bharatibiz.com](https://www.bharatibiz.com/en/divine-fabtech-industries-098251-48321) | Divine Fabtech Industries | Copies the GBP typo | 098251 48321 | Fixes itself once GBP is fixed |
| [thecompanycheck.com](https://www.thecompanycheck.com/org/divine-fabtech-industries/eeac9c7edc) (Udyam data) | **M/S** Divine Fabtech Industries | "Ahmedabad, Gujarat 382220" only | none | Udyam record carries no street address |
| [gst.iadv.io](https://gst.iadv.io/DIVINE-FABTECH-INDUSTRIES-24AAQFD8379R1ZA/) | DIVINE FABTECH INDUSTRIES | Survey No 710-711, Village Rupal, Bavla, Ahmedabad | - | No "Jivapura" (minor) |
| [Instagram](https://www.instagram.com/divine.fabtech/) | divine.fabtech | Ahmedabad | - | OK |
| Facebook | Divine Fabtech Industries | - | - | No page indexed; the site links only the `/share/1GgA2yKHcW/` redirect |

Fix order:

1. GBP address. It feeds the aggregators, so bharatibiz-style copies follow.
2. Justdial name, locality and the HDPE product title.
3. Facebook: put the canonical page URL on the site and in GBP.
4. Optionally, update the Udyam address so registry mirrors show the street.

Decide whether "Jivapura" belongs in the address. If it does, use it everywhere. GST omits it; GBP and the site include it.

**Name-confusion risk.** A different firm, "Divine Polytech Industries, Ahmedabad", has an IndiaMART store. That makes it more important that Divine's own IndiaMART listing carries the exact legal name and its GSTIN (24AAQFD8379R1ZA).

## Citation presence (Tier 1 and Indian B2B)

| Platform | Divine | Competitors present |
|---|---|---|
| Google Business Profile | yes (weak) | all |
| Bing Places | not checked; assume no | - |
| Apple Business Connect | not checked; assume no | - |
| Facebook page | unclear (share link only) | NK Polycross (274 likes), Shalimar, A.U. ("Strong guard tarpaulin"), Gokyo |
| Justdial | yes (wrong name/locality) | NK, Amrut, A.U., Shankheshwar, Shalimar |
| IndiaMART | **no** | NK, Amrut, Shalimar, Everest, Comsyn, Indo SMC, Shankheshwar |
| TradeIndia | **no** | NK, Amrut, Everest, Shankheshwar |
| ExportersIndia | **no** | Indo SMC |

**Correction for the main audit's quick win.** It says "add the Google Business Profile, Justdial and IndiaMART URLs to sameAs", but there is no IndiaMART listing to add until one is created.

## Top 10 local actions

1. **Critical:** Fix the GBP address typo and swap "Business to business service" for the 3-4 categories above. Low effort.
2. **Critical:** Start the review plan: 10 reviews in 6 weeks, then 3-4 a month, and reply to all six existing reviews. Low effort.
3. **High:** Correct Justdial: name "Divine Fabtech Industries", locality Rupal/Bavla, remove "HDPE" from the JD Mart title, and add the "Rain Poncho Manufacturers" category. Low effort.
4. **High:** Create an IndiaMART listing with the exact NAP, GSTIN and product catalogue (free tier first). Medium effort.
5. **High:** Add GBP products (each GSM of tarpaulin, ponchos in 5 colours, raincoat pant) with photos linking to the product pages. Low effort.
6. **High:** Upload 10+ photos (signage, factory, machines, rolls, ponchos, dispatch) and a short factory video, then add 2-4 photos a month. Low effort.
7. **Medium:** Claim Bing Places (import from GBP) and Apple Business Connect. Low effort.
8. **Medium:** List on TradeIndia and ExportersIndia with identical NAP. Low effort.
9. **Medium:** Add `geo` (22.80768, 72.36382) and sameAs (GBP Maps URL, Justdial, Instagram, canonical Facebook) to the LocalBusiness schema. Add IndiaMART/LinkedIn/YouTube once they exist. Low effort.
10. **Low:** Post weekly on GBP during the monsoon and around the rabi/kharif storage seasons, and set Diwali holiday hours. Low effort.

## Limitations

- Justdial and bharatibiz blocked automated fetches. Justdial figures come from Google result snippets of unknown date.
- GBP back-office fields (verification, description, products, photo count, posts, attributes) cannot be seen without owner access or a paid GBP API, so they are marked "unknown".
- IndiaMART "member since", GST-verified and TrustSEAL flags were not visible.
- Maps results were taken from a single search point. A geo-grid rank scan (`seo maps`) would show visibility across Ahmedabad district.
