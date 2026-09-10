# Rozenberg Family Chiropractic landing page

This is a static promotional landing page for Rozenberg Family Chiropractic in Farmington, Michigan. It is designed to be hosted for free on GitHub Pages, Netlify, or Cloudflare Pages with no build step.

The page profiles Dr. Brittany Anderson, D.C., a graduate of Life University’s College of Chiropractic, and highlights the practice's central Farmington location, easy car access, and on-site parking. Current hours are Sunday through Thursday, 10:00 AM-8:00 PM, and Friday, 10:00 AM-5:00 PM.

Live page: https://frozenbe.github.io/rozenberg-chiropractic-landing-page/

## Files

- `index.html` is the local homepage content, SEO metadata, structured data, and outbound links.
- `back-pain-chiropractor-farmington.html` answers symptom-first back pain searches with safety guidance, local details, and cited health sources.
- `neck-pain-chiropractor-farmington.html` answers neck, shoulder, and upper-back pain searches with safety guidance, realistic chiropractic information, and cited health sources.
- `sciatica-chiropractor-farmington.html` answers local sciatica and radiating leg-pain searches with safety guidance, local details, and cited health sources.
- `truck-driver-foot-pain-farmington.html` addresses sore feet, swelling, numbness, and musculoskeletal strain after long driving hours, especially for professional drivers.
- `styles.css` is the responsive layout and visual design.
- `sitemap.xml` lists the self-canonical homepage and privacy page. The four legacy symptom guides now prefer the official-site versions and are intentionally excluded.
- `robots.txt` is a project-folder reference only; crawlers look for robots.txt at the host root. Submit the exact project sitemap directly in Search Console, Bing Webmaster Tools, and the audit crawler.
- `6e91c38e92d84d92a15a6e7a2b4f7c31.txt` verifies the site for Bing and other IndexNow-supported search engines.
- `analytics.js` loads GA4 only after visitor consent and records booking, phone, and email lead clicks.
- `privacy.html` explains the Google Analytics data use and gives visitors access to privacy choices.

## Analytics

- GA4 account: `Rozenberg Family Chiropractic`
- GA4 property: `Rozenberg Family Chiropractic Website`
- Web stream: `Rozenberg Chiropractic Landing Page`
- Measurement ID: `G-T8H1H3W6HW`
- Optional Google advertising signals and account-level data sharing are disabled.

## Current outbound links

- Main site: `https://rozenbergfamilychiropractic.com/`
- Scheduling: `https://rozenbergfamilychiropractic.com/schedule-now/`
- Pricing: `https://rozenbergfamilychiropractic.com/pricing-packages/`
- First visit: `https://rozenbergfamilychiropractic.com/your-visit/`
- Google reviews: `https://maps.app.goo.gl/4jcfa6Mh9xQxSKBa8`
- Facebook business Page: `https://www.facebook.com/profile.php?id=61593890954507`
- Yelp: `https://m.yelp.com/biz/rozenberg-family-chiropractic-farmington?ylpcid=6fa3684f691841c48980c66c5cd639fa714d51fa`
- Insurance: Medicare participation is not currently approved. Blue Cross applications are in progress and are not yet approved.
- Payment: Cash, checks, all credit cards, Venmo, and Zelle are accepted (confirmed by the clinic on September 6, 2026). Visible payment information and business structured data are consistent across the landing page and four legacy guides; visitors are asked to call about current participation in select insurance plans.

## Free hosting options

### GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open Settings, then Pages.
3. Choose the main branch and root folder.
4. Save and wait for GitHub to publish the page.

### Netlify

1. Drag the project folder into Netlify Drop, or connect the GitHub repository.
2. Leave build command blank.
3. Use `/` as the publish directory.

### Cloudflare Pages

1. Create a new Pages project from the repository.
2. Leave build command blank.
3. Set output directory to `/`.

## After publishing

Update social previews and local SEO signals:

- Use the official website as the primary website on Google Business Profile and other clinic listings.
- Submit `sitemap.xml` in both Google Search Console and Bing Webmaster Tools.
- Keep all hours, doctor credentials, location details, and insurance information consistent on the main website, Google Business Profile, Bing Places, Yelp, and other directory listings.
- Share the matching official-site resource URLs in new posts and outreach; keep existing GitHub links working for previous visitors.
- Optionally add a custom domain or subdomain, such as `care.rozenbergfamilychiropractic.com`.

## Official resource consolidation (September 4, 2026)

The four legacy GitHub articles substantially overlap the new official articles. They remain readable at their existing URLs, include a prominent official-guide link, and declare the matching official URL as canonical. Google treats this as a preference, not a guarantee. The homepage remains a distinct, self-canonical local overview.

- `back-pain-chiropractor-farmington.html` → `https://rozenbergfamilychiropractic.com/back-pain-farmington-mi/`
- `neck-pain-chiropractor-farmington.html` → `https://rozenbergfamilychiropractic.com/neck-pain-farmington-mi/`
- `sciatica-chiropractor-farmington.html` → `https://rozenbergfamilychiropractic.com/sciatica-farmington-mi/`
- `truck-driver-foot-pain-farmington.html` → `https://rozenbergfamilychiropractic.com/foot-pain-long-driving/`

- Header branding and business logo metadata use the new clinic logo.
- Care links go directly to `/chiropractic/`, avoiding the legacy misspelling.
- Consent-based analytics are unchanged. A scheduling-link click is an inquiry signal, not a confirmed appointment.
- The pricing section states the user-confirmed $65 chiropractic visit rate. The user confirmed on September 9 that a $50 deposit counts toward that price, leaving $15, and patients usually pay $65 when they arrive. Other service/package prices remain on the official site; no lowest-price or all-inclusive care claim is made.
- The homepage leads with Dr. Brittany's care, Sunday and evening appointments, central Farmington access, and on-site parking. The $65 fee remains in the pricing section; prominent call and text links help visitors request an appointment without implying a confirmed booking.
- `hours-notice.js` displays the September 7, 2026 Labor Day closure only during that day in America/Detroit (EDT). The dated structured-data exception remains valid only for September 7. The script is independent of analytics consent and collects no data.
- Text and Facebook click analytics run only after analytics consent; no message contents are collected. A contact click is not a confirmed appointment.
- Choosing “No thanks” after previously allowing analytics now blocks subsequent click events and sets Google's documented `ga-disable` flag immediately for the current page.
- Printable review materials are kept outside the public website upload.

## Technical SEO cleanup (September 9, 2026)

- Use the supported Schema.org `MedicalClinic` type for the practice on the homepage and four legacy guides. Remove the incorrect `medicalSpecialty: "Chiropractic"` declaration; chiropractic remains explicit in the business name and visible service copy. No credential or specialty is invented.
- Internal home links use `./` (and `./#doctor` / `./#location`) to resolve directly to the canonical homepage, avoiding the `/index.html` alias.
- Privacy-page Open Graph and X card metadata describe the privacy notice. The notice and analytics behavior are unchanged.
- Keep the four legacy guide canonicals pointing to their official-site counterparts and keep only the homepage and privacy page in this sitemap.

## Shared clinic photo library (September 9, 2026)

The homepage now includes eight authentic doctor, treatment and office photos, available as complete images with captions and descriptive alt text. The files preserve the approved photographs; no AI image alteration was used. The treatment photograph was explicitly authorized by the clinic for marketing use. Office photos remain in the collection as requested, and are not labeled as photos of a future location.

The homepage declares the doctor portrait as its preferred page image, includes all eight photos in clinic structured data and the image sitemap, and permits large image previews. Search engines choose whether and where to show an image. The full-resolution approved navy/sage logo is stored as `rozenberg-family-chiropractic-logo.png` and used in clinic logo metadata. The existing matching header artwork is retained.

## Appointment contact improvements (September 9, 2026)

The header and pricing-section primary buttons now open the clinic phone directly. The `#appointments` section explains how to request a time by call or text, current hours, the confirmed visit price and deposit credit. Appointment availability is confirmed by the office; no live calendar or specific open slots are implied. Existing consent-based phone and text click measurement remains in place.
