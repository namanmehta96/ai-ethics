import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const nodes = [
  {
    id: 'foundation',
    number: '01',
    label: 'Foundation\nModel Provider',
    sublabel: 'OpenAI · Anthropic · Google DeepMind · Meta',
    color: '#C0392B',
    detail: {
      role: 'Builds the base model: training data, architecture, fine-tuning, and safety guardrails.',
      obligations: [
        'EU AI Act Article 53: GPAI providers must maintain technical documentation and publish training data summaries.',
        'Models with "systemic risk" (>10²⁵ FLOPs) face heightened obligations including adversarial testing and incident reporting.',
        'Must ensure GPAI models do not generate illegal content under copyright law.',
      ],
      gap: 'Providers routinely disclaim liability for how others use the model. They have no duty to ensure safe downstream deployment, and most of the GPAI rulebook runs on self-reporting.',
      verdict: 'Partial accountability. Strong documentation rules, weak enforcement where the harm actually lands.',
    },
  },
  {
    id: 'deployer',
    number: '02',
    label: 'Deployer',
    sublabel: 'Air Canada · Westlaw · Klarna · HR Platforms',
    color: '#C0392B',
    detail: {
      role: 'Plugs the model into a product or service. Knows the most about how it is actually being used.',
      obligations: [
        'EU AI Act: Deployers of high-risk AI must conduct conformity assessments, maintain logs, and report serious incidents.',
        'Must inform users when interacting with AI (Article 50 transparency obligations).',
        'Cannot instruct providers to violate the Act or outsource compliance.',
      ],
      gap: 'Air Canada argued its chatbot was a "separate legal entity"; the BC tribunal threw that out. Still, no common standard exists across sectors for what deployers owe.',
      verdict: 'Highest accountability in practice. Courts keep holding deployers responsible, no matter how autonomous the AI is said to be.',
    },
  },
  {
    id: 'professional',
    number: '03',
    label: 'Professional\nUser',
    sublabel: 'Lawyers · Doctors · HR Managers · Journalists',
    color: '#C0392B',
    detail: {
      role: 'The expert who folds AI output into professional decisions. Has the skills to double-check it, and often does not.',
      obligations: [
        'Professional codes of conduct (bar associations, medical boards) create duties of competence that extend to tool verification.',
        'Mata v. Avianca (2023): submitting AI-generated material without verification violated professional obligations.',
        'Lawyers sanctioned $5,000, setting precedent that professional responsibility applies to AI use.',
      ],
      gap: 'Automation bias, the habit of trusting confident AI too much, erodes careful checking. Professional codes have not been rewritten for AI, so "reasonable verification" is still anyone\'s guess.',
      verdict: 'On paper, professional codes apply. The New York lawyer case was a warning shot, not settled law.',
    },
  },
  {
    id: 'enduser',
    number: '04',
    label: 'End User',
    sublabel: 'Passengers · Patients · Job Applicants · Consumers',
    color: '#C0392B',
    detail: {
      role: 'The person on the receiving end of the decision. Usually has no idea AI was involved and no way to push back.',
      obligations: [
        'Article 50 EU AI Act: Right to be informed when interacting with an AI system.',
        'Article 86 (high-risk systems): Right to explanation of individual decisions.',
        'GDPR Article 22: Right not to be subject to solely automated decisions with significant effects.',
      ],
      gap: 'These rights exist on paper. In practice, disclosures are buried in terms of service. The applicants Amazon\'s AI cut never knew AI was involved.',
      verdict: 'Least accountability, most harm. Legal rights exist but are practically unenforceable.',
    },
  },
  {
    id: 'regulator',
    number: '05',
    label: 'Regulator',
    sublabel: 'EU · FTC · ICO · National Courts',
    color: '#C0392B',
    detail: {
      role: 'The institutional backstop. Sets the rules, enforces them, and is supposed to provide redress when AI causes harm.',
      obligations: [
        'EU AI Act: Establishes national surveillance authorities and a GPAI Office in Brussels for frontier models.',
        'Revised Product Liability Directive: Extends liability to AI software, but the "defect" definition remains contested.',
        'AI Liability Directive (draft): Would introduce rebuttable presumption of causation. Still not adopted as of 2024.',
      ],
      gap: 'The EU AI Act is not fully enforceable until 2027, and there is no global coordination. Enforcement bodies cannot really audit black-box systems, and the AI Liability Directive is stuck in limbo.',
      verdict: 'Structurally inadequate. The most powerful institutional actor is also the slowest.',
    },
  },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } },
})

export default function LiabilityChain() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const toggle = (id) => setActive(active === id ? null : id)
  const activeNode = nodes.find((n) => n.id === active)

  return (
    <div
      ref={ref}
      style={{ background: '#0d0d0d', borderTop: '1px solid #1e1e1e', padding: '120px 56px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">02 / Liability Chain</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 28,
            }}
          >
            THE LIABILITY CHAIN
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: '#A09888',
              maxWidth: 600,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            When AI causes harm, every player in the chain points to someone else.
            Click a node to see who owes what, and where each link breaks.
          </p>
        </motion.div>

        {/* Chain nodes */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            marginBottom: 2,
            overflowX: 'auto',
            paddingBottom: 8,
          }}
        >
          {nodes.map((node, i) => (
            <div key={node.id} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 160 }}>
              <motion.button
                onClick={() => toggle(node.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  flex: 1,
                  padding: '32px 24px',
                  background: active === node.id ? '#C0392B' : '#111',
                  border: `1px solid ${active === node.id ? '#C0392B' : '#2a2a2a'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.25s, border-color 0.25s',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    color: active === node.id ? 'rgba(245,240,232,0.6)' : '#C0392B',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  {node.number}
                </span>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    color: '#F5F0E8',
                    display: 'block',
                    lineHeight: 1.1,
                    marginBottom: 10,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {node.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 11,
                    color: active === node.id ? 'rgba(245,240,232,0.7)' : '#555',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    display: 'block',
                  }}
                >
                  {node.sublabel}
                </span>

                {/* Click indicator */}
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 9,
                    letterSpacing: '0.3em',
                    color: active === node.id ? 'rgba(245,240,232,0.5)' : '#444',
                    display: 'block',
                    marginTop: 16,
                  }}
                >
                  {active === node.id ? '▲ COLLAPSE' : '▼ EXPAND'}
                </span>
              </motion.button>
              {i < nodes.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 40,
                    background: '#C0392B',
                    flexShrink: 0,
                    opacity: 0.4,
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Expanded detail */}
        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  background: '#0e0e0e',
                  border: '1px solid #C0392B',
                  borderTop: '2px solid #C0392B',
                  padding: '48px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '48px',
                }}
              >
                {/* Left: Role + Obligations */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.3em',
                      color: '#C0392B',
                      marginBottom: 12,
                    }}
                  >
                    ROLE
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: '#F5F0E8',
                      lineHeight: 1.75,
                      marginBottom: 32,
                    }}
                  >
                    {activeNode.detail.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.3em',
                      color: '#C0392B',
                      marginBottom: 12,
                    }}
                  >
                    LEGAL OBLIGATIONS
                  </p>
                  <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                    {activeNode.detail.obligations.map((ob, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 14,
                          color: '#A09888',
                          lineHeight: 1.7,
                          marginBottom: 12,
                          paddingLeft: 16,
                          borderLeft: '2px solid #2a2a2a',
                        }}
                      >
                        {ob}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Gap + Verdict */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.3em',
                      color: '#C0392B',
                      marginBottom: 12,
                    }}
                  >
                    ACCOUNTABILITY GAP
                  </p>
                  <div
                    style={{
                      background: 'rgba(192,57,43,0.07)',
                      border: '1px solid rgba(192,57,43,0.2)',
                      padding: 24,
                      marginBottom: 32,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 15,
                        color: '#F5F0E8',
                        lineHeight: 1.75,
                        fontStyle: 'italic',
                      }}
                    >
                      {activeNode.detail.gap}
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 11,
                      letterSpacing: '0.3em',
                      color: '#C0392B',
                      marginBottom: 12,
                    }}
                  >
                    VERDICT
                  </p>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      color: '#F5F0E8',
                      lineHeight: 1.7,
                    }}
                  >
                    {activeNode.detail.verdict}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrow legend */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ width: 40, height: 1, background: '#C0392B' }} />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: '#555',
              fontStyle: 'italic',
            }}
          >
            Every link is a handoff of responsibility, and a place where accountability can fall through.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
