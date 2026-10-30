# SEO audit: www.divinefabtech.com (and the old divine-fabtech-industries.vercel.app)

- **Audit date:** 30 Oct 2026, one day after the move to the new domain.
- **Method:** the claude-seo 2.5.0 `seo-audit` workflow, run inline over all 30 sitemap pages. The skill's scripts used were `render_page`, `parse_html`, `content_quality`, `metadata_template`, `sitemap_discovery`, `agentic_check`, `agent_ux_check`, `preload_check`, `domain_history`, `seo_updates` and `capture_screenshot`.
- **Other sources:**
  - Lighthouse 13.5.0 lab runs, made locally because the public PageSpeed quota was used up that day;
  - the Search Console API for both properties;
  - the GA4 Data API;
  - a live India web search for 31 keywords.

## Executive summary

**SEO Health Score: 75 / 100.** The site is a local B2B manufacturer: a factory in Bavla, Ahmedabad, with a product catalogue and a buying-guide blog.

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 85 |
| Content Quality | 23% | 62 |
| On-Page SEO | 20% | 84 |
| Schema / Structured Data | 10% | 78 |
| Performance (Core Web Vitals) | 10% | 68 |
| AI Search Readiness | 10% | 68 |
| Images | 5% | 86 |

The build is technically clean. Every page is prerendered, self-canonical and indexable. Titles and descriptions are unique and well sized, and no metadata looks templated. The sitemap is valid and the redirects are correct.

What holds the site back is not the code. Three things do:
1. Google has not finished moving its trust from the old address to the new one.
2. Phones get a slow first view.
3. The selling pages are short and carry few trust signals for a buyer placing a bulk order.

### Top 5 issues

1. **The domain move isn't finished in Google (High).** The www home page shows "Duplicate, Google chose different canonical than user", so Google still prefers the old .vercel.app home page. Nine of the 30 www pages are not indexed yet.
2. **Mobile LCP is 4.6 to 5.2 s (High).** The hero photo downloads in 0.7 s, then waits 1.7 s to be painted because of the slideshow fade and render-blocking CSS and JavaScript.
3. **Thin money pages (High).** The product pages have about 240 words, the location pages 489 to 796, and the guides 303 to 768.
4. **Few trust signals (High).** There are no named people and no on-site reviews. The About page claims (500+ clients, ISO 9001:2015) are unconfirmed, and the Rs 20* asterisk is never explained. The Google Business Profile has 3.7 stars from 6 reviews.
5. **No GA4 key events (Medium).** Leads from search are not counted as conversions.

### Top 5 quick wins

1. Use the Change of Address tool in the old Search Console property, and request indexing for the home page and the three product pages.
2. Mark `contact_click` and `form_start` as key events in GA4.
3. Give the first hero slide `fetchpriority="high"` and no fade, and serve the logo as a small WebP.
4. Update the website link on the Google Business Profile, Justdial, Instagram and Facebook.
5. Add `geo`, `priceRange` and the Business Profile, Justdial and IndiaMART URLs to the LocalBusiness schema.

## 1. The domain move: both hosts side by side

| | divine-fabtech-industries.vercel.app (old) | www.divinefabtech.com (new) |
|---|---|---|
| What it serves now | 301 to the same path on www | 200, the live site |
| Search Console property | URL prefix, owner | `sc-domain:divinefabtech.com`, owner |
| Sitemap in Search Console | Last submitted 27 Aug 2025 (9 URLs) | Submitted 29 Oct 2026 19:54 UTC, read 2 s later: 30 URLs, 117 images, 0 errors |
| Pages indexed (URL Inspection, 30 Oct) | `/` plus 3 guides (crawled in the minutes around the switch) | 20 of 30 |
| Google's canonical for the home page | the old `/` | not www yet ("Google chose different canonical") |
| Clicks, last 90 days | 38 clicks, 225 impressions, average position 9.2 | 0 clicks, 2 impressions, average position 1.5 (data starts 29 Oct) |
| 29 Oct alone | 6 clicks, 18 impressions, average position 5.3 | first impressions |

**What happened on 29 Oct (UTC):**
- 19:11 and 19:14: Google crawled two guides on www while the build still declared the .vercel.app canonical.
- 19:17: the build that switched every canonical, the sitemap and robots.txt to www went live.
- 19:54: the sitemap was submitted.
- Afterwards: Google crawled 19 more www pages with the correct canonical within about 12 hours.

**Not indexed yet on www:**
- "Discovered - currently not indexed": `/products`, `/products/tarpaulins`, `/products/poncho`, `/tarpaulin-manufacturer-in-india`, `/faq`, `/gallery`.
- "Unknown to Google": `/blog`, `/contact`, `/inquiry`.

**Why the old host still ranks:** you're right that the .vercel.app address still ranks for now. Google has trusted that home page for over a year, and it switches the canonical only after it has re-crawled the old URLs and seen the 301 a few times. The Change of Address tool and the permanent 301 speed this up. Once Google switches, the old URL's position passes to www. Typically that takes a few days for the home page and a few weeks for everything else.

## 2. Rankings, 30 Oct 2026 (live India web search, top 30)

11 of 31 searches show the site in the top 30 (9 in the top 10). 7 are non-brand, up from 1 on 26 Oct. Most of these results still show the old .vercel.app home page. They will switch to www once Google moves the canonical.

**Moves since 26 Oct:**
- **rain poncho manufacturer in gujarat:** from outside the top 30 to #2.
- **best rain poncho manufacturer in gujarat:** #2.
- **best rain poncho manufacturer in ahmedabad:** #8.
- **rain poncho manufacturer in ahmedabad:** from outside the top 30 to #11.
- **recyclable rain poncho:** #7, with the www page.
- **recyclable poncho raincoat:** #12, with the www page.
- **multilayer tarpaulin manufacturer rupal bavla:** from #12 to #4, with the www guide.

**Still missing:**
- **best rain poncho manufacturers in india** and the other India-wide poncho searches.
- 12 generic tarpaulin searches. IndiaMART or Justdial hold #1 on most of them.

**Brand searches:** these still show the old .vercel.app home page at #1, or #3 for "divine fab tech ahmedabad". www guides are at #2 to #5.

| Search | Group | 26 Oct | 30 Oct | Host | Page | #1 now |
|---|---|---|---|---|---|---|
| divine fabtech | Brand | #1 | #1 | .vercel.app (old) | `/` | Divine Fabtech (divine-fabtech-industries.vercel.app) |
| divine fabtech industries | Brand | #1 | #1 | .vercel.app (old) | `/` | Divine Fabtech (divine-fabtech-industries.vercel.app) |
| divine fab tech ahmedabad | Brand | #1 | #3 | .vercel.app (old) | `/` | Justdial (justdial.com) |
| divine fabtech tarpaulin | Brand | #1 | #1 | .vercel.app (old) | `/` | Divine Fabtech (divine-fabtech-industries.vercel.app) |
| multilayer tarpaulin manufacturer rupal bavla | Tarpaulin (local) | #12 | #4 | www (new) | `/blog/best-multilayer-tarpaulin-manufacturers-in-india` | IndiaMART (m.indiamart.com) |
| tarpaulin manufacturer bavla | Tarpaulin (local) | – | – |  |  | Justdial (justdial.com) |
| multilayer tarpaulin manufacturer in ahmedabad | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| tarpaulin manufacturer in ahmedabad | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| multilayer tarpaulin manufacturer in gujarat | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| tarpaulin manufacturer in gujarat | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| multilayer tarpaulin manufacturer in india | Tarpaulin | – | – |  |  | Amrut Plastopack (amrutplastopack.in) |
| tarpaulin manufacturer in india | Tarpaulin | – | – |  |  | IndiaMART (dir.indiamart.com) |
| multilayer tarpaulin | Tarpaulin | – | – |  |  | Shalimar Group (shalimargroupindia.com) |
| tadpatri manufacturer ahmedabad | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| ldpe tarpaulin manufacturer | Tarpaulin | – | – |  |  | IndiaMART (m.indiamart.com) |
| 90 gsm tarpaulin | Tarpaulin | – | – |  |  | Purchasekart (purchasekart.com) |
| indoline tarpaulin | Tarpaulin (brand) | – | – |  |  | Indo SMC (indosmc.com) |
| rain poncho manufacturer in ahmedabad | Poncho | – | #11 | .vercel.app (old) | `/` | IndiaMART (m.indiamart.com) |
| rain poncho manufacturer in gujarat | Poncho | – | #2 | .vercel.app (old) | `/` | IndiaMART (m.indiamart.com) |
| rain poncho manufacturer in india | Poncho | – | – |  |  | IndiaMART (m.indiamart.com) |
| poncho raincoat manufacturer | Poncho | – | – |  |  | IndiaMART (dir.indiamart.com) |
| poncho raincoat manufacturer in gujarat | Poncho | – | – |  |  | IndiaMART (m.indiamart.com) |
| poncho raincoat manufacturer in india | Poncho | – | – |  |  | IndiaMART (dir.indiamart.com) |
| recyclable poncho raincoat | Poncho | – | #12 | www (new) | `/recyclable-poncho-raincoat` | RAINKISS (rainkiss.com) |
| recyclable rain poncho | Poncho | – | #7 | www (new) | `/recyclable-poncho-raincoat` | GreenGear Supply (greengearsupply.com) |
| rain poncho bulk order | Poncho | – | – |  |  | IndiaMART (dir.indiamart.com) |
| poncho raincoat with pant | Poncho | – | – |  |  | Gokyo (gokyo.in) |
| raincoat pant manufacturer | Poncho | – | – |  |  | KNR Uniforms (knruniform.in) |
| best rain poncho manufacturers in india | Poncho (goal) | not tracked | – |  |  | IndiaMART (m.indiamart.com) |
| best rain poncho manufacturer in gujarat | Poncho (goal) | not tracked | #2 | .vercel.app (old) | `/` | IndiaMART (m.indiamart.com) |
| best rain poncho manufacturer in ahmedabad | Poncho (goal) | not tracked | #8 | .vercel.app (old) | `/` | IndiaMART (m.indiamart.com) |

Method: a Firecrawl web search set to India, reading the top 30, the same way as on 26 Oct. This isn't a signed-in Google results page. "–" means not in the top 30. Full data is in `seo/rank-check-2026-10-30.csv`.

## 3. Technical SEO: 85

**What works:**
- Old host redirects 301 path for path; the bare domain redirects 308 to www. HTTPS with HSTS.
- 30 of 30 pages are self-canonical on www and set to `index, follow, max-image-preview:large`.
- Prerendered HTML: 855 words on the home page are readable without JavaScript.
- Unknown URLs return a real 404 (not a soft 404).
- robots.txt is reachable and points at a valid sitemap (30 URLs plus 117 images).
- Anti-framing headers are live: `frame-ancestors` lists the two hosts, plus `X-Frame-Options: SAMEORIGIN`.

**Findings:**

| Severity | Finding | Fix |
|---|---|---|
| High | Home page canonical still on the old host; 9 pages not indexed | Change of Address and request indexing (Action plan 1 and 2) |
| Medium | Bing Webmaster Tools and IndexNow not set up (Bing feeds Copilot and ChatGPT search) | Import the site from Search Console into Bing |
| Low | Every sitemap `lastmod` is the same build date | Emit each page's real last-edited date |
| Low | `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy` are missing | Add them in `vercel.json` |

## 4. Content quality: 62

These are main-content word counts (navigation and footer removed) against the claude-seo coverage floors. Word count is not a ranking factor in itself; the floors flag pages that probably leave buyer questions unanswered.

| Page type | Pages | Words | Floor |
|---|---|---|---|
| Home page | `/` | 556 | 500 ✓ |
| Product pages | `/products/poncho`, `/products/tarpaulins` | 231, 243 | 400 |
| Location and service landing pages | 5 | 489 to 796 | 800 |
| Buying guides | 15 | 303 to 768 | 1,500 |

- The claude-seo `content_quality` check scored the pages from 65 to 93. It found **0 filler phrases and 0 AI-writing patterns**. It flagged thin content on 10 pages: the 3 product pages, `/blog`, 3 guides, `/gallery`, `/contact` and `/inquiry`.
- **E-E-A-T (Google's experience, expertise, authority and trust signals):** Experience is moderate: real product photos and specific GSM and size facts. Expertise is moderate. Authority is low: a new domain with few mentions elsewhere. Trust is low to moderate:
  - there's a phone number, address, map and WhatsApp;
  - there are no named people and no testimonials;
  - the About page has unconfirmed claims;
  - the price asterisk is unexplained;
  - the Google Business Profile has 3.7 stars from 6 reviews.

## 5. On-page SEO: 84

**What works:**
- 30 unique titles, all 60 characters or fewer.
- Descriptions are 124 to 155 characters.
- One H1 per page.
- The `metadata_template` check found 0 of 30 pages templated (site risk: low).
- No orphan pages: the least-linked guide has 7 internal links in.
- Breadcrumbs on 29 pages.

| Severity | Finding | Fix |
|---|---|---|
| Medium | Each landing page and its "best ... manufacturers" guide aim at nearly the same search (Gujarat poncho, India poncho, the tarpaulin pairs) | Keep landing pages commercial (MOQ, quote) and guides informational (how to choose); link guide to landing page with the exact phrase; watch which URL Google picks |
| Low | Product page H1s are generic ("Multilayer Tarpaulin", "Poncho Raincoats") | Add manufacturer, bulk or the location |

## 6. Schema: 78

**Detected:**
- LocalBusiness (with PostalAddress, ContactPoint, OpeningHoursSpecification and hasMap), WebSite and WebPage on all 30 pages.
- BreadcrumbList on 29 pages.
- BlogPosting on 15 guides, with datePublished and dateModified.
- Product with an Offer (Rs 20, INR, InStock) on `/products/poncho`.
- FAQPage on 6 pages.

All blocks are valid JSON-LD with `https://schema.org` context and absolute URLs.

| Severity | Finding | Fix |
|---|---|---|
| Medium | LocalBusiness has no `geo` and no `priceRange`; `sameAs` lists only Instagram and Facebook | Add geo (5 decimals), priceRange, and the Business Profile, Justdial and IndiaMART URLs |
| Low | BlogPosting `author` is the business | Add a named Person author with a short bio |
| Info | FAQPage on 6 pages: Google retired FAQ rich results for all sites on 7 May 2026 | Leave it; no action needed |

## 7. Performance: 68 (lab data; no Chrome field data yet, too little traffic)

| Page | Mobile perf | Mobile LCP | TBT | CLS | Desktop perf | Desktop LCP |
|---|---|---|---|---|---|---|
| `/` | 74 | 5.2 s | 127 ms | 0 | 99 | 0.9 s |
| `/poncho-raincoat-manufacturer-in-gujarat` | 72 | 4.6 s | 139 ms | 0 | 98 | 1.0 s |
| `/products/poncho` | 71 | 4.9 s | 50 ms | 0 | 98 | 1.1 s |
| `/blog/tarpaulin-gsm-guide` | 73 | 4.7 s | 98 ms | 0 | 100 | 0.6 s |

Lighthouse SEO is 100, Best Practices 100 and Accessibility 96 to 97 on every run.

**Home page LCP breakdown (mobile):** the LCP element is the first hero slide (`multilayer-tarpaulin-rolls-yellow-blue.webp`).

| Part | Time |
|---|---|
| Server response (TTFB) | 110 ms |
| Load delay | 9 ms |
| Download | 727 ms |
| **Render delay** | **1,746 ms** |

The slide sits inside an `opacity` transition, and the image has no `fetchpriority="high"`.

**Other weight:**
- `logo.png` is 110 KB, of which 108 KB is wasted.
- `gtag.js` is 181 KB, with 76 KB unused.
- The vendor JavaScript is 125 KB, with 72 KB unused.
- The CSS blocks rendering for 150 ms.
- No connections are preconnected.
- The `preload_check` score is 50: no speculation rules and no LCP priority hint.

## 8. AI search readiness: 68

**AI crawler access:**

| Crawler | Allowed? | What it governs |
|---|---|---|
| OAI-SearchBot | yes | ChatGPT search |
| Claude-SearchBot | yes | Claude search |
| PerplexityBot | yes | Perplexity |
| Googlebot | yes | Search and AI Overviews |
| GPTBot, ClaudeBot, Google-Extended | yes | model training; allowed by `*` |

User-triggered agents are not blocked.

**Other results:**
- Agent-UX heuristic: **100/100**. There are 86 interactive nodes, all named, with real buttons and links and 11 landmarks.
- Lighthouse Agentic Browsing wasn't measured, because the PageSpeed quota was used up.
- `llms.txt`, Markdown versions and `ai-catalog.json` are absent. That's optional, not a defect; Google Search ignores `llms.txt`.
- AI referrals in GA4 over 90 days: one ChatGPT session. The brand has almost no presence off the site (no YouTube, sparse directory listings), and that is what AI answers draw on.

## 9. Images: 86

**What works:**
- 208 images, all WebP except the logo.
- All 208 have width and height.
- Alt text is descriptive. The 37 empty alts are deliberate decorative duplicates (`alt=""`), which is correct.
- 152 are lazy-loaded.
- The image sitemap lists 117 photos.

**Fixes:**
- Logo PNG: 110 KB.
- Five-colour poncho photo: 1580×504, shown in a 380×380 box.
- About 140 KiB could be saved on the home page alone.

## 10. Local SEO (brick-and-mortar manufacturer)

- **NAP (name, address, phone):** site, schema and the Google Business Profile embed agree. Divine Fabtech Industries, Survey No 710-711, Village Rupal, Bavla, Jivapura, Gujarat 382220, +91 98251 48321.
- **Google Business Profile:** 3.7 stars from 6 reviews. The map embed on `/contact` works on the new domain (checked in a real browser on 30 Oct).
- **Justdial:** "Divine Fab Tech, Adroda", 3.5 stars from 8 ratings. The name and locality differ from the site; make them match.
- **Citations:** the IndiaMART and TradeIndia profiles that dominate this market's search results don't link to the new domain yet.

## 11. Analytics (GA4 property 501922503)

- **Last 90 days, both hosts:** 119 sessions.

  | Channel | Sessions |
  |---|---|
  | Direct | 64 |
  | Organic Google | 47 |
  | ChatGPT | 1 |
  | Bing | 1 |
  | Instagram | 1 |
  | Vercel referral | 3 |
  | Unassigned | 2 |

- **Events:** 5 `contact_click` and 4 `form_start`. **None is marked as a key event.**
- **30 Oct Direct spike:** www showed 34 Direct sessions from 33 users that day. Most came from data-centre towns (Ashburn, Boardman, Council Bluffs, Groningen, Santa Clara) and lasted 0 to 5 seconds. That's scanner and bot traffic, typical in the first days of a new domain. Real visits came from Ahmedabad, Vadodara, Mumbai and Bengaluru.
- **Data stream:** now points at the new domain. Filter reports by hostName = `www.divinefabtech.com` from 29 Oct on.

## 12. Context

- **Domain history:** registered 29 Oct 2026 at GoDaddy, so there's no previous owner and no spam history. It also has no authority of its own until the 301s pass it over.
- **Google updates since August 2026:** the September 2026 Spam Update ran 24 Sep to 8 Oct, before the move, so it doesn't explain any change since. Search Console now has a "Search generative AI" setting per property. Keep it on the default, include.
- **Not covered:**
  - Backlink metrics: no Moz, Bing or DataForSEO keys, and a 2-day-old domain has none to measure.
  - Chrome field data: no traffic yet, and no API key.
  - A PDF version of this report: WeasyPrint needs GTK on Windows.

## Files

- Web version of this report (private): https://claude.ai/artifact/Y3vsiengWdokKUWBoodJx5
- `ACTION-PLAN.md`: the prioritised to-do list.
- `audit-data.json`: the structured envelope for the claude-seo report generator.
- `data/`: Search Console snapshots for both properties, the per-page summary, Lighthouse summary, metadata, sitemap, agent-readiness and domain-history checks.
- `screenshots/`: home page (mobile and desktop) and the Contact page map.
- `../rank-check-2026-10-30.csv`: the keyword check.
