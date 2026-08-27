// Depends on sanity.js (sanityFetch, formatDate)

function renderCourseCard(course) {
  const dates = course.availableDates ?? []
  const dateCount = dates.length
  const dateChipClass = dateCount > 0 ? 'chip-available' : 'chip-none'
  const dateLabel = dateCount === 1
    ? '1 date available'
    : dateCount > 1 ? `${dateCount} dates available` : 'No upcoming dates'

  const hasGroupPrice = course.groupPrice && course.groupSize

  const metaChips = [
    course.accreditation ? `<span class="chip chip-green">${course.accreditation}</span>` : '',
    course.duration ? `<span class="chip">${course.duration}</span>` : '',
  ].filter(Boolean).join('')

  const pricingHtml = course.pricePerPerson
    ? `<div class="course-pricing">
        <div><span class="price">£${course.pricePerPerson}</span><span class="price-label"> / person</span></div>
        ${hasGroupPrice ? `<div class="price-group"><span class="price" style="font-size:1rem">£${course.groupPrice}</span><span class="price-label"> / group of ${course.groupSize}</span></div>` : ''}
       </div>`
    : ''

  const enquirySubject = encodeURIComponent(`Course Enquiry: ${course.title}`)

  return `
    <div class="course-card">
      <div class="course-card-body">
        ${metaChips ? `<div class="course-meta">${metaChips}</div>` : ''}
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description ?? ''}</p>
        <div class="course-footer">
          ${pricingHtml}
          <span class="chip ${dateChipClass}">${dateLabel}</span>
        </div>
        <a href="mailto:training@htdirect.co.uk?subject=${enquirySubject}" class="btn btn-outline">Enquire</a>
      </div>
    </div>
  `
}

async function loadCourses() {
  const grid = document.getElementById('course-grid')
  if (!grid) return

  const query = `*[_type == "course" && status != "hidden"] | order(_createdAt asc) {
    _id, title, duration, accreditation, description,
    pricePerPerson, groupPrice, groupSize, availableDates
  }`

  try {
    const courses = await sanityFetch(query)
    if (!courses || courses.length === 0) {
      grid.innerHTML = `<p class="empty-state">Courses coming soon. <a href="mailto:training@htdirect.co.uk">Get in touch</a> to find out what's available.</p>`
      return
    }
    grid.innerHTML = courses.map(renderCourseCard).join('')
  } catch (err) {
    console.error('Failed to load courses:', err)
    grid.innerHTML = `<p class="empty-state">Unable to load courses right now. Please <a href="mailto:training@htdirect.co.uk">contact us directly</a>.</p>`
  }
}

document.addEventListener('DOMContentLoaded', loadCourses)
