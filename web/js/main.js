// Depends on sanity.js (sanityFetch, formatDate)

function renderTestimonial(t) {
  return `
    <blockquote class="testimonial">
      <p>&ldquo;${t.quote}&rdquo;</p>
      <footer class="testimonial-footer">
        <strong>${t.organisation}</strong>
        ${t.organisationSubtitle ? `<span>${t.organisationSubtitle}</span>` : ''}
        ${t.authorName ? `<span>${t.authorName}</span>` : ''}
      </footer>
    </blockquote>
  `
}

async function loadTestimonials() {
  const grid = document.getElementById('testimonials-grid')
  if (!grid) return

  try {
    const testimonials = await sanityFetch(
      `*[_type == "testimonial" && showOnWebsite == true] | order(order asc) {
        _id, quote, organisation, organisationSubtitle, authorName
      }`
    )

    if (!testimonials || testimonials.length === 0) {
      grid.closest('section').style.display = 'none'
      return
    }

    grid.innerHTML = testimonials.map(renderTestimonial).join('')
  } catch (err) {
    console.error('Failed to load testimonials:', err)
    grid.closest('section').style.display = 'none'
  }
}

async function applySettings() {
  try {
    const settings = await sanityFetch(`*[_id == "siteSettings"][0]{ showEventsPage }`)
    const showEvents = settings?.showEventsPage !== false
    const navLink = document.getElementById('nav-events')
    if (navLink) navLink.style.display = showEvents ? '' : 'none'
  } catch (err) {
    // Non-fatal — nav link stays hidden if settings can't load
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form')
  if (!form) return

  const submitBtn = document.getElementById('contact-submit')
  const status = document.getElementById('form-status')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const data = new FormData(form)
    const enquiryType = data.get('enquiry-type')

    submitBtn.disabled = true
    submitBtn.textContent = 'Sending…'
    status.textContent = ''
    status.className = 'form-status'

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
          access_key: '48850c94-d52c-41ad-9172-116ebbf7f2d7',
          subject: `HT Direct Enquiry — ${enquiryType}`,
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || 'Not provided',
          enquiry_type: enquiryType,
          message: data.get('message'),
        }),
      })

      const result = await res.json()

      if (result.success) {
        status.textContent = 'Message sent — we\'ll be in touch shortly.'
        status.classList.add('form-status--success')
        form.reset()
      } else {
        throw new Error(result.message)
      }
    } catch (err) {
      console.error('Form error:', err)
      status.textContent = 'Something went wrong. Please email us directly at support@htdirect.co.uk'
      status.classList.add('form-status--error')
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Send Message'
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  applySettings()
  loadTestimonials()
  initContactForm()
})
