# GEO (AI search) findings: off-site brand signals and AI-answer visibility

Audit date: 30 Oct 2026. Specialist: seo-geo (claude-seo 2.5.0), run inline.

**Scope.** This file covers the off-site half of GEO: brand mentions, entity presence, and which sources AI answers draw on. On-site items (crawler access, llms.txt, citability, SSR) are in the main audit's "AI Search Readiness" category.

Raw data: `C:\Users\ACER\.claude\jobs\0c52388a\tmp\research\authority.json` (`entities`, `ai_visibility`).

## Authority and brand signals score: 15 / 100

This covers one of seo-geo's five dimensions (20% weight). Basis:

- **Instagram:** active.
- **Facebook:** exists, but only a share link is public.
- **Missing:** YouTube, LinkedIn company page, Wikipedia, Reddit, news/press, and B2B marketplace profiles.
- **AI-proxy queries:** Divine is named in 0 of 4.

## Brand-mention scan (site: searches, India)

| Entity | YouTube | LinkedIn co. page | Instagram | Facebook | Wikipedia | Reddit | Press |
|---|---|---|---|---|---|---|---|
| **Divine Fabtech** | **none** | **none** | [yes](https://www.instagram.com/divine.fabtech/) | share link only | no | no | none |
| NK Polycross | [Shorts](https://www.youtube.com/shorts/SxOd_kRxcFE) | no (staff only) | ? | [274 likes](https://www.facebook.com/PATPOLYN/) | no | no | none |
| Everest Polymers | [channel](https://www.youtube.com/c/everestpolymers/videos) | [536 followers](https://www.linkedin.com/company/everest-polymers) | ? | ? | no | no | none |
| Comsyn | [channel](https://www.youtube.com/channel/UCKuP0A_hK-meisTMrvke1bw) | [yes](https://in.linkedin.com/company/commercial-syn-bags-limited) | ? | ? | no | no | screener.in, trendlyne |
| Shalimar | ? | [yes](https://www.linkedin.com/company/shalimar-pack) | ? | yes | no | no | none |
| Indo SMC | ? | ? | [1,696 followers](https://www.instagram.com/indosmc/) | ? | no | no | BSE listing, order news |
| Gokyo | [review videos](https://www.youtube.com/watch?v=B_pgVQ6gd6E) | ? | [yes](https://www.instagram.com/gokyo.in/) | [yes](https://www.facebook.com/gokyooutdoorandclothing/) | no | no | none |
| Rainkiss (NL) | [@rainkiss](https://www.youtube.com/@rainkiss) plus third-party reviews | ? | yes | yes | no | no | salesupply case study |

- No entity in the set has a Wikipedia article (site:en.wikipedia.org search returned nothing). For a small MSME this is expected and not worth pursuing: notability rules would delete it.
- Reddit has no brand mentions for anyone. The nearest is a generic r/IndiaBusiness "what are you manufacturing" thread ([link](https://www.reddit.com/r/IndiaBusiness/comments/1tnvwks/what_product_are_you_manufacturing/)) where a tarpaulin maker advertises. A genuine, non-promotional answer from the owner in threads like that is a low-cost mention, but don't spam.
- **YouTube is the biggest gap.** seo-geo's correlation table ranks YouTube mentions as the strongest predictor of AI citations (~0.74, versus ~0.27 for backlink domain rating). Three B2B rivals already publish product videos.

## AI-answer visibility proxy

Each query was run as a web search (Firecrawl, location India, top 10). AI assistants draw heavily on these ranking pages.

| Query | Divine named? | Who is named (sample) | Pages driving the answer |
|---|---|---|---|
| best rain poncho manufacturers in india | **no** | Shalimar, International Tarpaulin Co, JMD Helmets, Calcutta Poly Pack, Welpack, Aashi Rainwear, Aashapura, Frank Industries, KEFI Outdoors; consumer brands (Wildcraft, Duckback, Zeel, Decathlon) | IndiaMART impcat + Ahmedabad city page, Shalimar product page, Dinesh Hosiery "Top 10 raincoat brands" blog, Justdial rain-poncho category, Instagram "Top 10 raincoat manufacturers" post |
| best tarpaulin manufacturers in gujarat | **no** | Hinglaj Plastic, Aashapura, Frank Industries, Ambica Traders, Narmada Polyfab, SRF, Supreme, Hi-Tech, Gujarat Craft, Madras Canvas | IndiaMART Ahmedabad tarpaulins, Justdial, Instagram "Top 10 tarpaulin manufacturers", Frank Industries blog, TradeIndia Ahmedabad HDPE page, roctarps "Top 7" |
| top multilayer tarpaulin manufacturers india | **no** | Tandhan Polyplast, Amrut Plastopack, Bansal Canvas, Shalimar, Supreme, **NK Polycross**, Madras Canvas, Shree Bala Hanuman Polycoat | Tandhan's self-published "best manufacturers" blog, Amrut product page, Justdial Kolkata category, Supreme XF page, NK's 4bz.in update page |
| rain poncho supplier bulk india | **no** | Shalimar, Sundaram Polypack, Versalis International, Welpack, Supreme, HM Polymers (Ahmedabad), Tandhan | IndiaMART impcat wholesalers, Shalimar product, Justdial Bangalore wholesalers, TradeIndia Kalyan, ExportersIndia "Best Rain Poncho Manufacturers & Suppliers" |

### Sources cited most often (pitch and listing targets)

1. **IndiaMART category and city pages:** 4 of 4 queries ([impcat rain-poncho](https://m.indiamart.com/impcat/rain-poncho.html), [Ahmedabad tarpaulins](https://m.indiamart.com/city/ahmedabad/tarpaulins.html)). Divine needs a store to be eligible.
2. **Justdial category pages:** 4 of 4. Divine already appears in tarpaulin categories under the wrong name ("Divine Fab Tech, Adroda") and not in rain-poncho categories.
3. **Manufacturers' own "best/top manufacturers" posts and product pages:** 3 of 4 (Shalimar shop, Tandhan blog, Frank Industries blog, Amrut). Self-published comparison posts do get pulled into these results.
   - Divine already has [best-rain-poncho-manufacturers-in-india](https://www.divinefabtech.com/blog/best-rain-poncho-manufacturers-in-india) and [best-multilayer-tarpaulin-manufacturers-in-india](https://www.divinefabtech.com/blog/best-multilayer-tarpaulin-manufacturers-in-india).
   - Neither made the top 10 yet. They are 4 days old on a 1-day-old domain.
   - Give them time, link them from the GBP posts and listings, and keep them factual (named criteria, Divine's specs) rather than self-ranking.
4. **Instagram "Top 10" carousel posts:** 3 of 4 ([tarpaulin](https://www.instagram.com/p/DNM8RzaSmwh/), [raincoat](https://www.instagram.com/p/DKlkqjuoWdL/)). These are low-authority, but AI engines surface them. Divine's own Instagram can publish a factual "how to choose a tarpaulin manufacturer" carousel.
5. **TradeIndia and ExportersIndia category pages:** 2 of 4. The [ExportersIndia rain-poncho page](https://www.exportersindia.com/indian-suppliers/rain-poncho.htm) FAQ names HM Polymers, Tandhan, Internex Poly and Tirupati Industries, which shows the platform writes AI-friendly summaries of its own listed suppliers.

## Top 5 GEO actions (off-site)

1. **Create the IndiaMART store** with the exact NAP, GSTIN, every GSM and poncho colour, and photos. This one step makes Divine eligible for the source that appears in every query tested. Medium effort.
2. **Fix Justdial and add the rain-poncho category** so the existing syndication shows the right name. Low effort.
3. **Start a YouTube channel** with 4-6 short videos: GSM comparison (90 vs 200), the poncho in 5 colours, factory walk-through, how to measure a tarpaulin. Link the website in each description and add the channel to schema sameAs. Medium effort.
4. **Create a LinkedIn company page** and publish the Facebook page under a canonical URL. Use both as sameAs entity anchors. Low effort.
5. **List on TradeIndia and ExportersIndia.** Their category pages write supplier summaries that AI answers reuse. Low effort.

Recheck these four queries in 60-90 days. Also test them directly in ChatGPT, Perplexity and Google AI Mode; this run measured search rankings only.
