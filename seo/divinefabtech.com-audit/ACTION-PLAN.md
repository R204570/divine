# Action plan: www.divinefabtech.com

Audit date: 30 Oct 2026. Full findings are in `FULL-AUDIT-REPORT.md`; raw evidence is in `data/`.

Each item says what to do, who does it, and how you will know it worked.

## Phase 1: finish the domain move (this week)

| # | Action | Who | How you know it worked |
|---|---|---|---|
| 1 | In Search Console, open the old property `https://divine-fabtech-industries.vercel.app/` > Settings > **Change of address** > choose `divinefabtech.com`. | You (needs owner access) | Search Console shows "Moving" on the old property. Within 2 to 6 weeks, URL Inspection of `https://www.divinefabtech.com/` shows "Submitted and indexed" with Google's canonical on www. |
| 2 | **Request indexing** in the `divinefabtech.com` property for `/`, `/products/poncho`, `/products/tarpaulins`, `/tarpaulin-manufacturer-in-india`. | You | Those URLs change from "Discovered - currently not indexed" to "Submitted and indexed". |
| 3 | Change the website link on the **Google Business Profile**, Justdial, Instagram and Facebook to `https://www.divinefabtech.com`. | You | Each profile shows the new address. |
| 4 | In GA4 Admin > Events, mark **contact_click** and **form_start** as key events. | You | GA4 reports show key events by channel; organic leads become countable. |
| 5 | Keep the 301 from `divine-fabtech-industries.vercel.app` in place permanently, and keep the old Search Console property. | You | `curl -I https://divine-fabtech-industries.vercel.app/faq` keeps returning 301 to www. |

## Phase 2: speed and markup (weeks 2 to 3, code changes)

| # | Action | How you know it worked |
|---|---|---|
| 6 | Hero: render the first slide without the opacity fade, add `fetchpriority="high"` to it, and start the slideshow after load. | Lighthouse mobile LCP on `/` drops from 5.2 s toward 2.5 s. |
| 7 | Serve the logo as a small WebP (about 5 KB) instead of the 110 KB PNG; resize the five-colour poncho photo for its 380 px box. | Lighthouse "Improve image delivery" savings fall from 140 KiB to near zero. |
| 8 | Load the Google tag after the page has loaded (or on first interaction). | Lighthouse "Reduce unused JavaScript" no longer lists gtag.js at the top. |
| 9 | LocalBusiness schema: add `geo` (5 decimals), `priceRange`, and the Google Business Profile, Justdial and IndiaMART URLs in `sameAs`. | Rich Results Test shows the extra fields with no warnings. |
| 10 | Add `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` and a minimal `Permissions-Policy` in `vercel.json`. | `curl -I https://www.divinefabtech.com/` lists the three headers. |
| 11 | Add the site to **Bing Webmaster Tools** by importing from Search Console, and submit the sitemap. | Bing shows the 30 sitemap URLs as discovered. |

## Phase 3: content and trust (month 2)

| # | Action | How you know it worked |
|---|---|---|
| 12 | Expand `/products/poncho`, `/products/tarpaulins` and the three poncho landing pages: spec table, MOQ, lead time, packing, delivery area, real factory photos, a short customer example. | Search Console impressions for those URLs grow; average position improves on poncho queries. |
| 13 | Trust: name the founder or team with a photo, add real testimonials, keep only About claims you can prove (500+ clients, 5000+ products, ISO 9001:2015), and explain the asterisk on Rs 20*. | Fewer unverifiable claims; the About page cites evidence. |
| 14 | Ask recent buyers for Google reviews (now 3.7 stars from 6). | Review count and rating rise on the Google Business Profile. |
| 15 | Make the Justdial listing match the site exactly (name "Divine Fabtech Industries", address in Rupal, Bavla, same phone), and list on IndiaMART and TradeIndia with a link to www. | Brand searches show consistent listings; the new domain gets its first referring links. |

## Phase 4: monitoring (ongoing)

- Weekly: Search Console Pages report and Performance for `sc-domain:divinefabtech.com`.
- Monthly: repeat the keyword check in `seo/rank-check-2026-10-30.csv` and compare.
- Watch which URL ranks for each "best rain poncho manufacturer" search. If a guide and a landing page swap places, strengthen internal links to the one you want.
