import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const laws = [
  {
    name: 'EU AI Act (2024)',
    subtitle: 'Risk-tiered regulation of AI systems',
    coverage: 68,
    covers: [
      'Prohibited AI practices (social scoring, real-time biometric surveillance)',
      'High-risk AI conformity assessments (healthcare, employment, law enforcement)',
      'GPAI model transparency and documentation',
      'Article 50: Right to know you are interacting with AI',
    ],
    gap: 'Zero provision for a duty to tell the truth. Hallucinating and inventing citations are not banned — the Act sorts AI by risk category, not by whether it is honest.',
    gapScore: 'CRITICAL GAP',
  },
  {
    name: 'Product Liability Directive (Revised, 2024)',
    subtitle: 'Extended to cover software and AI as products',
    coverage: 38,
    covers: [
      'AI software now classified as a "product" subject to liability',
      'Manufacturers liable for defective products causing damage',
      'Burden of proof shifted to defendant in some circumstances',
    ],
    gap: '"Defect" means a physical safety defect, not an accuracy one. A chatbot inventing case law is not "defective" unless someone gets physically hurt — information harms are shut out entirely.',
    gapScore: 'MAJOR GAP',
  },
  {
    name: 'AI Liability Directive (Draft)',
    subtitle: 'Proposed framework for AI-specific civil liability',
    coverage: 22,
    covers: [
      'Rebuttable presumption of causation for high-risk AI in some cases',
      'Right to access evidence from AI developers and deployers',
      'Disclosure obligations before litigation',
    ],
    gap: 'As of 2024 it is still a draft, with no Council agreement in sight. Even if it passes, the presumption only covers high-risk AI — LLM hallucinations sit outside the scope.',
    gapScore: 'NOT ADOPTED',
  },
  {
    name: 'Digital Services Act (2022)',
    subtitle: 'Platform accountability for illegal content',
    coverage: 15,
    covers: [
      'Obligations for very large platforms to remove illegal content',
      'Transparency requirements for algorithmic recommenders',
      'Risk assessments for systemic risks from largest platforms',
    ],
    gap: 'The DSA targets illegal content, not inaccurate AI output. It was built for stuff users post, not for things AI invents — so hallucinations and AI defamation slip through.',
    gapScore: 'WRONG INSTRUMENT',
  },
]

export default function LegalVoid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{ background: '#0a0a0a', borderTop: '1px solid #1e1e1e', padding: '120px 56px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">05 / The Legal Void</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 32,
            }}
          >
            THE LEGAL VOID
          </h2>

          {/* Wachter quote */}
          <div
            style={{
              borderLeft: '2px solid #C0392B',
              paddingLeft: 32,
              maxWidth: 760,
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                color: '#F5F0E8',
                lineHeight: 1.75,
                fontStyle: 'italic',
              }}
            >
              "There is currently no general duty to tell the truth in EU law that
              applies to LLMs or their operators. No existing regulation creates
              such an obligation."
            </p>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 10,
                letterSpacing: '0.25em',
                color: '#C0392B',
                marginTop: 16,
              }}
            >
              WACHTER, MITTELSTADT & RUSSELL, 2024
            </p>
          </div>
        </motion.div>

        {/* Coverage bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {laws.map((law, i) => (
            <motion.div
              key={law.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#0e0e0e',
                border: '1px solid #1e1e1e',
                padding: '40px',
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 24,
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#F5F0E8',
                      marginBottom: 4,
                    }}
                  >
                    {law.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 13,
                      color: '#666',
                      fontStyle: 'italic',
                    }}
                  >
                    {law.subtitle}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: '#C0392B',
                    border: '1px solid rgba(192,57,43,0.3)',
                    padding: '4px 10px',
                    flexShrink: 0,
                  }}
                >
                  {law.gapScore}
                </span>
              </div>

              {/* Coverage bar */}
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      color: '#444',
                    }}
                  >
                    COVERAGE OF AI ACCOUNTABILITY GAPS
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 14,
                      color: '#C0392B',
                    }}
                  >
                    {law.coverage}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: '#1e1e1e',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={inView ? { width: `${law.coverage}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.2 * i + 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, #C0392B, #8B1A12)`,
                      borderRadius: 2,
                    }}
                  />
                </div>
                {/* Uncovered portion label */}
                <div
                  style={{
                    marginTop: 6,
                    textAlign: 'right',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 12,
                      color: '#444',
                      fontStyle: 'italic',
                    }}
                  >
                    {100 - law.coverage}% of AI accountability gaps remain unaddressed
                  </span>
                </div>
              </div>

              {/* Two columns: covers vs gap */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      color: '#444',
                      marginBottom: 12,
                    }}
                  >
                    WHAT IT COVERS
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {law.covers.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 13,
                          color: '#A09888',
                          lineHeight: 1.65,
                          marginBottom: 8,
                          paddingLeft: 16,
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: '#C0392B',
                          }}
                        >
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      color: '#C0392B',
                      marginBottom: 12,
                    }}
                  >
                    CRITICAL GAP
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 13,
                      color: '#A09888',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                    }}
                  >
                    {law.gap}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid #1e1e1e' }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 16,
              color: '#666',
              lineHeight: 1.8,
              maxWidth: 720,
              fontStyle: 'italic',
            }}
          >
            Wachter et al. call the EU's landscape a "patchwork of incomplete obligations" —
            AI can invent facts, defame people, and mislead professionals with no legal
            consequences. The problem is simple: pre-digital laws cannot govern a technology
            that speaks with authority it has not earned.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
