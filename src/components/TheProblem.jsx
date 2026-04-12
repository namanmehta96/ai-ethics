import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, prefix = '', suffix = '', decimals = 0, duration = 2.2, group = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration, decimals])

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : group
      ? Math.floor(count).toLocaleString()
      : String(Math.floor(count))

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

const stats = [
  {
    number: 4450000,
    prefix: '$',
    suffix: '',
    display: '$4.45M',
    label: 'Average cost of an AI-related data breach in 2023',
    source: 'IBM Cost of Data Breach Report, 2023',
    note: 'When AI trained on sensitive data fails, the bill gets huge fast.',
  },
  {
    number: 0,
    prefix: '',
    suffix: '',
    display: '0',
    label: 'Legal provisions creating a general duty for AI to tell the truth in EU law',
    source: 'Wachter, Mittelstadt & Russell, 2024',
    note: '"There is currently no general duty to tell the truth in EU law that applies to LLMs." It is the most glaring hole in the rulebook.',
  },
  {
    number: 2027,
    prefix: '',
    suffix: '',
    display: '2027',
    label: 'Year the EU AI Act becomes fully enforceable, three years after deployment exploded',
    source: 'EU AI Act, 2024 Implementation Timeline',
    note: 'Regulators are always three years behind the tech they police. Right now, nobody is really enforcing anything.',
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function TheProblem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid #1e1e1e',
        padding: '120px 56px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ marginBottom: 80 }}
        >
          <span className="section-label">01 / The Problem</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              maxWidth: 800,
              marginBottom: 32,
            }}
          >
            WHY AI ACCOUNTABILITY IS BROKEN
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: '#A09888',
              maxWidth: 680,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            AI now runs across healthcare, law, finance, and hiring. When it
            fails, nobody is clearly on the hook — and victims are left with
            nowhere to turn.
          </p>
        </motion.div>

        {/* The three-way accountability gap */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            borderLeft: '2px solid #C0392B',
            paddingLeft: 32,
            marginBottom: 100,
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              color: '#F5F0E8',
              lineHeight: 1.75,
            }}
          >
            "The entity that creates the model did not deploy it. The entity that deployed it
            did not write the harmful output. The output that caused harm cannot be traced
            to any single decision."
          </p>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 11,
              letterSpacing: '0.25em',
              color: '#C0392B',
              marginTop: 16,
            }}
          >
            CORE ACCOUNTABILITY PROBLEM
          </p>
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 2,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.15 * i + 0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              style={{
                background: '#0e0e0e',
                border: '1px solid #1e1e1e',
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Red accent line on top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: i === 1 ? '#C0392B' : '#1e1e1e',
                }}
              />

              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(56px, 8vw, 88px)',
                  color: i === 1 ? '#C0392B' : '#F5F0E8',
                  lineHeight: 1,
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.display === '$4.45M' ? (
                  <>$<Counter target={4.45} suffix="M" decimals={2} /></>
                ) : stat.display === '0' ? (
                  <Counter target={0} />
                ) : (
                  <Counter target={2027} group={false} />
                )}
              </div>

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  color: '#F5F0E8',
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                {stat.label}
              </p>

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: 20,
                }}
              >
                {stat.note}
              </p>

              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: '#C0392B',
                }}
              >
                {stat.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
