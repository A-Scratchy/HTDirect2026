# HTDirect2026 — Project Guide

## What this is
A Sanity-backed website for **HT Direct Event Services Ltd**, a Halifax, West Yorkshire company providing event medical cover and first aid training.

**Full company name:** HT Direct Event Services Ltd  
**Tagline:** "FIRST CLASS FIRST-AID TRAINING & EVENT COVER"  
**Brand statement:** "We make events safe and equip people with the skills and knowledge to save lives."  
**USPs (from leaflet):** Friendly · Experienced · Affordable  
**Address:** 28 Clay House Ln, Greetland, Halifax, HX4 8AW  
**Phone:** 01422 64 60 66  
**Emails:** Training@htdirect.co.uk / Events@htdirect.co.uk  

Reference site: https://www.htdirect.co.uk  
Old HTML draft: G:/Repos/HTDirect/index.html  
Leaflet images: G:/Downloads/picshtdirect/

The goal is a redesigned public-facing site where the non-technical client can self-manage content (courses, events, site copy) via Sanity Studio.

---

## Business context

### Services
1. **Event Medical Provisions** — tailored medical cover for events of all sizes, from small community events to town-wide events with thousands of attendees. Also offer risk assessment support and staffing guidance.
2. **First Aid Training** — Qualsafe approved training centre

### Staff credentials (event cover)
- FREC 3 First Responders
- HCPC Registered Paramedics
- Registered Nurses
- Medical Health Professionals
- Radio communications + comprehensive equipment
- Public Liability Insurance + Medical Malpractice Insurance

### Accreditation
- **Qualsafe approved training centre** (confirmed from leaflet)
- FAIB, fofato, chrt (logos from old draft — confirm if still current)

### Notable clients (real testimonials from leaflet)
1. **Shay Stadium / Halifax Town FC & Halifax Panthers** — 8 years of match day medical provision
   > *"Neil & his team from HT Direct Event Services Ltd have provided the medical coverage for the Shay Stadium for the past 8 years... The medical provision we receive is second to none. Staff are always smart, on time and fully competent when dealing with patients requiring their services."*

2. **Woodhouse Grove School** — 18 months of First Aid cover for fixtures
   > *"HT Direct have been an outstanding provider of the First Aid service at Woodhouse Grove for the past 18 months... We are totally comfortable that all issues relating to anything First Aid will be dealt professionally, promptly and with the greatest care."*

### About Us (from leaflet — use as copy basis)
> "We believe in offering affordable, high quality, local medical teams to events of all sizes. We have experience in providing medical staff to small scale events up to large town wide events that attract multiple thousands of people."
>
> "Along with this, we are a Qualsafe approved training centre, offering a wide range of courses including First Aid at Work, Paediatric First Aid, First Response Emergency Care Level 3 (FREC 3) and Immediate Life Support."

### Assets available
- Team photo (staff in green/yellow HCPC paramedic uniforms) — from leaflet
- Ambulance photos (yellow ambulances on location) — from leaflet
- Aerial/wide event shot — from leaflet
- Logo: circular badge with Star of Life, "HT Direct Event Services" text

---

## Repo layout
```
/                  ← Sanity Studio (already bootstrapped)
  schemaTypes/     ← Sanity schema definitions
/web               ← Public-facing website (plain HTML/CSS/JS)
  index.html
  courses.html
  events.html
  contact.html
  style.css
  main.js
```

---

## Sanity project
- **Project ID:** `zap5gndn`
- **Dataset:** `production`
- **Studio:** `npm run dev` from repo root → http://localhost:3333
- **Deploy Studio:** `npm run deploy`
- **Schemas:** defined in `schemaTypes/`

---

## Content types (schemas to build)

### 1. Course
Fields:
- `title` (string) — e.g. "Paediatric First Aid Course"
- `slug` (slug)
- `duration` (string) — e.g. "12 Hours", "3 Days", "1 Day"
- `level` (string) — e.g. "HSE Approved", "Level 2"
- `description` (text)
- `targetAudience` (text) — who the course is for
- `pricePerPerson` (number)
- `groupPrice` (number, optional) — bulk/group rate
- `groupSize` (number, optional) — how many people the group price covers
- `image` (image)
- `availableDates` (array of dates) — upcoming course dates
- `bookingLink` (url, optional)
- `isActive` (boolean) — hide/show on site

Known courses (from old draft):
1. Paediatric First Aid — 12 hrs, Ofsted/EYFS compliant, £50/person
2. First Aid at Work (HSE approved) — 3 days, high-risk workplaces, £25/person, £500/group of 12
3. Annual First Aid Refresher (HSE recommended) — £99/person, £5000/group of 50
4. Emergency First Aid at Work (HSE approved) — 1 day, low-risk workplaces, £50/person
5. Health and Safety in the Workplace — Level 2, all sectors, £50/person
6. Food Safety in Catering — Levels 2 & 3, food preparation staff, £50/person
7. Fire Safety Training — all staff, £50/person
8. Anaphylaxis Awareness / Epi-pen Training — staff dealing with auto-injectors, £50/person
9. Risk Assessment Training for Childcare — childcare settings, £50/person

### 2. Event (upcoming events the client has cover booked / featured work)
Fields:
- `title` (string)
- `date` (date)
- `location` (string)
- `eventType` (string) — e.g. Music/Festival, Corporate, Sports, etc.
- `description` (text)
- `image` (image, optional)

Event types covered (from old draft):
Music concerts & festivals, Corporate events & parties, Equestrian events, Carnivals,
Firework events, Fun days, Fetes, Football & Rugby matches, Sport days, Charity events & walks

### 3. SiteSettings (singleton — one document)
Fields:
- `heroHeadline` (string)
- `heroSubtext` (text)
- `aboutText` (text)
- `phone1` (string) — 01422 646066
- `phone2` (string) — 07778 177582
- `emailEvents` (string) — events@htdirect.co.uk
- `emailTraining` (string) — training@htdirect.co.uk
- `emailSupport` (string) — support@htdirect.co.uk
- `address` (text)
- `facebookUrl` (url)
- `instagramUrl` (url)
- `seoDescription` (text)

---

## Accreditations (footer logos in old draft)
- FAIB (First Aid Industry Body) — `img/FAIB.jpg`
- fofato — `img/fofato.png` (confirm what this is)
- chrt — `img/chrt.jpg` (confirm what this is)

---

## Frontend (`/web`)
- Plain HTML + CSS + vanilla JS — no framework, no build step
- Fetches published content from Sanity CDN using `@sanity/client` (or public CDN URL)
- Fresh content on every page load — content changes live immediately, no redeploy needed
- Pages: Home (hero + course cards + events cover intro + contact), Courses, Events, Contact
- Developer builds layout/design in code; client only touches content via Studio

### Design direction (from old draft)
- Black/white/green colour palette (green = #00591c approx)
- Professional, clean, medical/safety sector
- Card-based layout for courses (image, title, duration, price, available dates chip)
- Mobile-responsive

---

## Hosting
- **Public site:** Namecheap shared hosting — FTP upload of `/web` static files
- **Sanity Studio:** hosted at Sanity's CDN via `npm run deploy`
- Client edits content in Studio → changes are live on site immediately (client-side CDN fetch)

---

## Developer workflow
1. `npm run dev` from repo root — Sanity Studio at localhost:3333
2. Edit schemas in `schemaTypes/`, export from `schemaTypes/index.ts`
3. Build frontend HTML/CSS/JS in `/web`, test locally with Live Server or similar
4. Run `/sanity-best-practices` skill before any Sanity schema work

---

## Competitor landscape

| Competitor | Focus | Scale | Pricing shown |
|---|---|---|---|
| [First Line Medical](https://www.firstlinemedical.co.uk/) | Event cover + training + managed kits | UK-wide, 68 staff, 1250+ events/yr | No |
| [Medics UK](https://www.medicsuk.net/) | Event cover + training | UK-wide, ~500 staff, Tour de France/Yorkshire Marathon | No |
| [Outdoor Medical Solutions](https://outdoormedicalsolutions.co.uk/) | Ambulances, event cover, film/TV, repatriation | CQC-regulated, NHS-approved | No |
| [Elite Medical](https://elitemedical.uk/) | Ambulances, clinics, event cover, training | 45 vehicles, 100+ staff, CQC/HCPC | No |
| [Event Medic Services](https://www.eventmedicservices.co.uk/) | Event cover (paramedics) | South East focus, 38+ yrs experience | No |
| [UK Medical & Event Services](https://event-medical.co.uk/) | Event cover + ambulance conveyance + transport + training | Nationwide, CQC registered, Stoke-on-Trent training centre | No |

**HT Direct differentiators to push in the new site:**
- Only competitor that **shows pricing upfront** — make this prominent
- **Local Yorkshire roots** — community events, not just big national festivals
- **Training + event cover** under one roof
- Approachable for **smaller/community events** that large operators won't prioritise
- **FAIB-accredited** — add credibility badge prominently

## Open questions
- Does the new site include a **Supplies/Shop** section? (old draft had it; current live site doesn't)
- Are the FAIB / fofato / chrt accreditation logos still current? Do we have digital versions?
- Who is **Neil** (named in the Shay Stadium testimonial)? Is he the owner/founder — worth naming on the site?
