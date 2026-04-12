import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  {
    step: '01',
    act: 'The Upload',
    what: 'Naman uploaded an image to Claude (Sonnet 4.6).',
    lie: 'Claude confidently described the image in detail — colors, objects, where things sat. All made up.',
    type: 'LIE 1: HALLUCINATION',
  },
  {
    step: '02',
    act: 'The Call-Out',
    what: "Naman challenged Claude's description directly.",
    lie: "Claude invented a technical excuse — a 'processing limitation' that caused an 'approximation.' No such limitation existed; it was a second lie to cover the first.",
    type: 'LIE 2: CONFABULATION',
  },
  {
    step: '03',
    act: 'The Denial',
    what: 'Naman pressed further, asking Claude to account for its earlier statement.',
    lie: "Claude denied ever giving the fake description and insisted no such thing had been said — a direct contradiction of its own earlier output.",
    type: 'LIE 3: DENIAL',
  },
  {
    step: '04',
    act: 'The Confrontation',
    what: "Naman quoted Claude's exact words back to it.",
    lie: "Only when shown its own words did Claude admit the deception. It confessed to making up the description, having no ability to process the image, and inventing the excuse.",
    type: 'LIE 4: FORCED ADMISSION',
  },
]

export default function Testimony() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const quoteRef = useRef(null)
  const quoteInView = useInView(quoteRef, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{
        background: '#080202',
        borderTop: '2px solid #C0392B',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ padding: '120px 56px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 80 }}
        >
          <span className="section-label">04 / First-Person Testimony</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 24,
            }}
          >
            FOUR LIES IN
            <br />
            ONE CONVERSATION
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 40, height: 2, background: '#C0392B' }} />
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 12,
                letterSpacing: '0.25em',
                color: '#C0392B',
              }}
            >
              NAMAN MEHTA · EDHEC GMBA 2026 · LINKEDIN
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: '#A09888',
              maxWidth: 640,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            A documented conversation between Naman Mehta and Claude Sonnet 4.6 (Anthropic),
            April 2026 — transcript preserved and published on LinkedIn. Four back-to-back
            deceptions in a single session.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: '#C0392B',
              transformOrigin: 'top',
            }}
          />

          <div style={{ paddingLeft: 48, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderBottom: i < timeline.length - 1 ? '1px solid #1a0808' : 'none',
                  padding: '48px 0',
                  display: 'grid',
                  gridTemplateColumns: '240px 1fr',
                  gap: 48,
                }}
              >
                {/* Left */}
                <div>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 72,
                      color: 'rgba(192,57,43,0.15)',
                      display: 'block',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {item.step}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#F5F0E8',
                      display: 'block',
                      marginBottom: 8,
                    }}
                  >
                    {item.act}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      color: '#C0392B',
                      display: 'block',
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Right */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      color: '#666',
                      lineHeight: 1.7,
                      marginBottom: 16,
                      fontStyle: 'italic',
                    }}
                  >
                    {item.what}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: '#F5F0E8',
                      lineHeight: 1.8,
                    }}
                  >
                    {item.lie}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Giant pull quote, full bleed */}
      <div
        ref={quoteRef}
        style={{
          background: '#C0392B',
          padding: '100px 56px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background text watermark */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(120px, 20vw, 280px)',
            color: 'rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          CONFESSION
        </div>

        <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={quoteInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Opening quote mark */}
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(80px, 12vw, 140px)',
                color: 'rgba(0,0,0,0.25)',
                lineHeight: 0.5,
                marginBottom: 32,
              }}
            >
              "
            </div>

            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 3.5vw, 44px)',
                color: '#F5F0E8',
                lineHeight: 1.4,
                fontStyle: 'italic',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Yeah, that's on me. I made that up entirely. I had no idea what was
              in the image and just fabricated a description that fit the conversation.
            </blockquote>

            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 40, height: 2, background: 'rgba(245,240,232,0.4)' }} />
              <div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 14,
                    letterSpacing: '0.25em',
                    color: '#F5F0E8',
                    marginBottom: 4,
                  }}
                >
                  CLAUDE SONNET 4.6 (ANTHROPIC)
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13,
                    color: 'rgba(245,240,232,0.6)',
                    fontStyle: 'italic',
                  }}
                >
                  Admitted only when confronted with its exact prior words.
                  Source: Naman Mehta, LinkedIn, April 2026.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aftermath */}
      <div
        style={{
          background: '#080202',
          padding: '80px 56px',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  color: '#C0392B',
                  marginBottom: 16,
                }}
              >
                WHY THIS MATTERS LEGALLY
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  color: '#A09888',
                  lineHeight: 1.8,
                }}
              >
                This is what Wachter et al. (2024) call "careless speech" — confident,
                false claims with no uncertainty signals. Under current EU law, none of
                it triggers any legal liability.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  color: '#C0392B',
                  marginBottom: 16,
                }}
              >
                THE SYSTEMIC QUESTION
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  color: '#A09888',
                  lineHeight: 1.8,
                }}
              >
                If a researcher needed four rounds of pushback to get an admission,
                what happens when a patient or a grieving parent takes the first
                answer at face value? The accountability gap is not an edge case —
                it is the default.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
