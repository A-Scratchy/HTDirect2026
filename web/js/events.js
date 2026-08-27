// Depends on sanity.js (sanityFetch, formatDate)

const EVENT_TYPE_LABELS = {
  sports: 'Sports',
  music: 'Music / Festival',
  corporate: 'Corporate',
  community: 'Community',
  charity: 'Charity',
  education: 'Education',
  other: 'Other',
}

function renderEventCard(event) {
  const dateStr = event.date ? formatDate(event.date) : 'Date TBC'
  const typeLabel = EVENT_TYPE_LABELS[event.eventType] ?? event.eventType ?? ''

  return `
    <div class="event-card">
      <div class="event-card-date">${dateStr}</div>
      <div class="event-card-body">
        ${typeLabel ? `<span class="chip chip-green">${typeLabel}</span>` : ''}
        <h3 class="event-title">${event.title}</h3>
        ${event.location ? `<p class="event-location">${event.location}</p>` : ''}
        ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
      </div>
    </div>
  `
}

async function loadEvents() {
  const grid = document.getElementById('events-grid')
  if (!grid) return

  const query = `*[_type == "event" && showOnWebsite == true] | order(date asc) {
    _id, title, date, location, eventType, description
  }`

  try {
    const events = await sanityFetch(query)
    if (!events || events.length === 0) {
      grid.innerHTML = `<p class="empty-state">No upcoming events listed at the moment. <a href="mailto:events@htdirect.co.uk">Get in touch</a> if you need cover for your event.</p>`
      return
    }
    grid.innerHTML = events.map(renderEventCard).join('')
  } catch (err) {
    console.error('Failed to load events:', err)
    grid.innerHTML = `<p class="empty-state">Unable to load events right now. Please <a href="mailto:events@htdirect.co.uk">contact us directly</a>.</p>`
  }
}

async function init() {
  try {
    const settings = await sanityFetch(`*[_id == "siteSettings"][0]{ showEventsPage }`)

    if (settings?.showEventsPage === false) {
      window.location.replace('index.html')
      return
    }

    // Show the events nav link on this page too
    const navLink = document.getElementById('nav-events')
    if (navLink) navLink.style.display = ''
  } catch (err) {
    // If settings fail, still show the page
  }

  loadEvents()
}

document.addEventListener('DOMContentLoaded', init)
