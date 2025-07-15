// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Smooth scrolling for navigation links
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

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const nav = document.querySelector(".nav")
let mobileMenuOpen = false

mobileMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation()

  if (!mobileMenuOpen) {
    // Abrir menú
    nav.classList.add("mobile-open")
    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>'
    mobileMenuOpen = true
  } else {
    // Cerrar menú
    nav.classList.remove("mobile-open")
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    mobileMenuOpen = false
  }
})

// Cerrar menú cuando se hace clic fuera de él
document.addEventListener("click", (e) => {
  if (mobileMenuOpen && !nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    nav.classList.remove("mobile-open")
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    mobileMenuOpen = false
  }
})

// Cerrar menú móvil cuando se hace clic en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768 && mobileMenuOpen) {
      nav.classList.remove("mobile-open")
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
      mobileMenuOpen = false
    }
  })
})

// Cerrar menú al redimensionar ventana
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("mobile-open")
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
    mobileMenuOpen = false
  }
})

// Gallery card hover effects
document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Button click animations with ripple effect
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.background = "rgba(255, 255, 255, 0.3)"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.6s linear"
    ripple.style.pointerEvents = "none"

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Heart floating animation
function createFloatingHeart() {
  const heart = document.createElement("i")
  heart.className = "fas fa-heart"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * 100 + "vw"
  heart.style.bottom = "-50px"
  heart.style.fontSize = Math.random() * 10 + 15 + "px"
  heart.style.color = ["#f43f5e", "#ec4899", "#fda4af", "#f9a8d4"][Math.floor(Math.random() * 4)]
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "1000"
  heart.style.animation = "floatUp 4s linear forwards"

  document.body.appendChild(heart)

  setTimeout(() => {
    if (heart.parentNode) {
      heart.remove()
    }
  }, 4000)
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 2000)

// Add scroll-based parallax effect for floating hearts
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-hearts i")

  parallaxElements.forEach((element, index) => {
    const speed = (index + 1) * 0.2
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"

  // Trigger animations for elements already in view
  const elementsInView = document.querySelectorAll(".timeline-item, .gallery-card")
  elementsInView.forEach((element) => {
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("animate")
    }
  })
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  console.log("💕 Página de aniversario cargada con amor 💕")

  // Start floating hearts after page load
  setTimeout(() => {
    createFloatingHeart()
  }, 1000)
})

// Add ripple animation CSS
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)

// Observe timeline items and gallery cards
document.querySelectorAll(".timeline-item, .gallery-card").forEach((item) => {
  observer.observe(item)
})
