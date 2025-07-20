// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Toggle hamburger icon
      const icon = navToggle.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const icon = navToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      })
    })
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(17, 24, 39, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.backgroundColor = "#111827"
    navbar.style.backdropFilter = "none"
  }
})

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".service-card, .portfolio-card, .product-card, .testimonial-card")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animation styles
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".service-card, .portfolio-card, .product-card, .testimonial-card")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Run animation on load and scroll
  animateOnScroll()
  window.addEventListener("scroll", animateOnScroll)
})

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
    const increment = target / 100
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = counter.textContent.replace(/\d+/, target)
        clearInterval(timer)
      } else {
        counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current))
      }
    }, 20)
  })
}

// Trigger counter animation when stats section is visible
function checkStatsVisibility() {
  const statsSection = document.querySelector(".stats")
  if (statsSection) {
    const rect = statsSection.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animateCounters()
      window.removeEventListener("scroll", checkStatsVisibility)
    }
  }
}

window.addEventListener("scroll", checkStatsVisibility)

// Form handling (for future forms)
function handleFormSubmit(formId, successMessage) {
  const form = document.getElementById(formId)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        alert(successMessage || "Thank you for your message! We will get back to you soon.")
        form.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
}

// Initialize form handlers
document.addEventListener("DOMContentLoaded", () => {
  handleFormSubmit("contact-form", "Thank you for contacting us! We will respond within 24 hours.")
  handleFormSubmit(
    "partnership-form",
    "Thank you for your partnership application! We will review it and get back to you soon.",
  )
})

// Add loading states to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.classList.contains("btn-primary") || this.classList.contains("btn-yellow")) {
      // Add subtle click animation
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    }
  })
})

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "0"
        img.style.transition = "opacity 0.3s ease"

        img.onload = () => {
          img.style.opacity = "1"
        }

        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })
})

// World image hover effect
document.addEventListener("DOMContentLoaded", () => {
  const worldImage = document.querySelector(".world-image")
  if (worldImage) {
    worldImage.addEventListener("mouseenter", () => {
      worldImage.style.filter = "brightness(1.1) saturate(1.2)"
    })

    worldImage.addEventListener("mouseleave", () => {
      worldImage.style.filter = "brightness(1) saturate(1)"
    })
  }
})
