import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── 3D HERO BACKGROUND ───────────────────────────────────────────────────────
function initThreeBackground(): void {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.z = 4

  // Floating particles
  const count = 1200
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const mat = new THREE.PointsMaterial({ color: 0x22d3ee, size: 0.025, transparent: true, opacity: 0.7 })
  const particles = new THREE.Points(geo, mat)
  scene.add(particles)

  // Wireframe torus knot
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.1, 0.35, 120, 20),
    new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.18 })
  )
  knot.position.set(3.5, 0, -1)
  scene.add(knot)

  // Mouse parallax
  let mouseX = 0, mouseY = 0
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
  })

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const clock = new THREE.Clock()
  function animate(): void {
    const t = clock.getElapsedTime()
    particles.rotation.y = t * 0.04
    particles.rotation.x = t * 0.02
    knot.rotation.x = t * 0.3
    knot.rotation.y = t * 0.5
    camera.position.x += (mouseX - camera.position.x) * 0.05
    camera.position.y += (-mouseY - camera.position.y) * 0.05
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
}

// ─── GSAP SCROLL ANIMATIONS ───────────────────────────────────────────────────
function initAnimations(): void {
  // Hero text entrance
  gsap.from('#hero-text > *', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.3,
  })

  // Section headings
  gsap.utils.toArray<HTMLElement>('section h2, section h3').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  })

  // Project cards
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%' },
      y: 60,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power2.out',
    })
  })

  // Skill tags
  gsap.utils.toArray<HTMLElement>('.skill-tag').forEach((tag, i) => {
    gsap.from(tag, {
      scrollTrigger: { trigger: tag, start: 'top 90%' },
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      delay: i * 0.06,
      ease: 'back.out(1.7)',
    })
  })

  // About card
  gsap.from('#about-card', {
    scrollTrigger: { trigger: '#about-card', start: 'top 85%' },
    x: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
  })

  // Experience timeline items
  gsap.utils.toArray<HTMLElement>('.exp-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%' },
      x: -40,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power2.out',
    })
  })

  // Skills groups
  gsap.utils.toArray<HTMLElement>('.skills-group').forEach((group, i) => {
    gsap.from(group, {
      scrollTrigger: { trigger: group, start: 'top 90%' },
      y: 30,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.08,
      ease: 'power2.out',
    })
  })

  // Contact section
  gsap.from('#contact-card', {
    scrollTrigger: { trigger: '#contact-card', start: 'top 85%' },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
  })
}

// ─── TYPED HEADLINE ───────────────────────────────────────────────────────────
function initTyped(): void {
  const el = document.getElementById('typed-role')
  if (!el) return
  const roles = ['Backend Engineer', 'Full-Stack Engineer', 'DevOps Engineer', 'TypeScript Developer']
  let ri = 0, ci = 0, deleting = false
  const target = el  // narrowed non-null ref

  function tick(): void {
    const current = roles[ri]
    target.textContent = deleting ? current.slice(0, ci--) : current.slice(0, ci++)
    if (!deleting && ci > current.length) { deleting = true; setTimeout(tick, 1200); return }
    if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % roles.length }
    setTimeout(tick, deleting ? 50 : 90)
  }
  tick()
}

// ─── NAV ACTIVE LINK ──────────────────────────────────────────────────────────
function initNav(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('text-white'))
          const active = document.querySelector<HTMLAnchorElement>(`nav a[href="#${e.target.id}"]`)
          active?.classList.add('text-white')
        }
      })
    },
    { threshold: 0.5 }
  )
  document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initThreeBackground()
  initAnimations()
  initTyped()
  initNav()
})
