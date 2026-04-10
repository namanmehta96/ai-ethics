import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Top' },
  { id: 'problem', label: 'The Problem' },
  { id: 'liability', label: 'Liability Chain' },
  { id: 'cases', label: 'Real Cases' },
  { id: 'testimony', label: 'Testimony' },
  { id: 'legal-void', label: 'Legal Void' },
  { id: 'careless-speech', label: 'Careless Speech' },
  { id: 'microsoft-rai', label: 'Microsoft RAI' },
  { id: 'verdict', label: 'Verdict' },
]

export default function SideNav() {
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const observers = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: 'fixed',
        right: 28,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9000,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        alignItems: 'flex-end',
      }}
    >
      {sections.map(({ id, label }) => (
        <div
          key={id}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollTo(id)}
        >
          <AnimatePresence>
            {hovered === id && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  color: active === id ? '#C0392B' : '#F5F0E8',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
          <motion.button
            aria-label={label}
            animate={{
              width: active === id ? 24 : 6,
              height: active === id ? 6 : 6,
              borderRadius: active === id ? 3 : 50,
              background: active === id ? '#C0392B' : '#444444',
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ background: '#C0392B', scale: 1.2 }}
            style={{ border: 'none', cursor: 'pointer', display: 'block', padding: 0 }}
          />
        </div>
      ))}
    </nav>
  )
}
