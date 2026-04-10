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
      role: 'Creates the base large language model — the training data, architecture, RLHF fine-tuning, and safety guardrails.',
      obligations: [
        'EU AI Act Article 53: GPAI providers must maintain technical documentation, register with EU database, and publish training data summaries.',
        'Models with "systemic risk" (>10²⁵ FLOPs) face heightened obligations: adversarial testing, incident reporting, cybersecurity measures.',
        'Must ensure GPAI models do not generate illegal content under copyright law.',
      ],
      gap: 'Providers cannot foresee all deployment contexts and routinely disclaim liability for third-party use. No obligation to ensure safe downstream deployment exists in the AI Act. The GPAI framework is largely self-declaratory.',
      verdict: 'Partial accountability. Strong documentation requirements, weak enforcement at the point of harm.',
    },
  },
  {
    id: 'deployer',
    number: '02',
    label: 'Deployer',
    sublabel: 'Air Canada · Westlaw · Klarna · HR Platforms',
    color: '#C0392B',
    detail: {
      role: 'Integrates the foundation model into a product or service offered to end users. Has the highest awareness of the deployment context.',
      obligations: [
        'EU AI Act: Deployers of high-risk AI must conduct conformity assessments, maintain logs, conduct human oversight, and report serious incidents.',
        'Must inform users when interacting with AI (Article 50 transparency obligations).',
        'Cannot instruct providers to violate the Act — cannot outsource compliance.',
      ],
      gap: 'Air Canada\'s failed defense — arguing the chatbot was a "separate legal entity" — illustrated how deployers attempt to externalize liability to the AI system itself. The BC Civil Resolution Tribunal firmly rejected this. However, no universal standard exists across sectors for deployer accountability.',
      verdict: 'Highest accountability in practice. Courts are increasingly holding deployers responsible regardless of AI autonomy arguments.',
    },
  },
  {
    id: 'professional',
    number: '03',
    label: 'Professional\nUser',
    sublabel: 'Lawyers · Doctors · HR Managers · Journalists',
    color: '#C0392B',
    detail: {
      role: 'Domain expert who integrates AI output into professional decisions. Possesses the knowledge to verify AI outputs — but frequently does not.',
      obligations: [
        'Existing professional codes of conduct (bar associations, medical boards) create duties of competence that extend to tool verification.',
        'Mata v. Avianca (2023): Judge Castel held that submitting AI-generated material without verification violated professional obligations.',
        'Lawyers sanctioned $5,000 — precedent that professional responsibility applies to AI use.',
      ],
      gap: 'Automation bias — the documented tendency to over-rely on confident, authoritative-sounding AI outputs — undermines verification. Professional codes have not yet been updated to specifically address AI verification duties. The threshold for "reasonable verification" remains undefined.',
      verdict: 'Accountability exists in theory via professional codes, but not yet formalized for AI contexts. The lawyer case is a warning shot, not settled doctrine.',
    },
  },
  {
    id: 'enduser',
    number: '04',
    label: 'End User',
    sublabel: 'Passengers · Patients · Job Applicants · Consumers',
    color: '#C0392B',
    detail: {
      role: 'The final recipient of AI-mediated decisions. Often has no knowledge that AI was involved, and no means to contest the output.',
      obligations: [
        'Article 50 EU AI Act: Right to be informed when interacting with an AI system.',
        'Article 86 (EU AI Act, high-risk systems): Right to explanation of individual decisions.',
        'GDPR Article 22: Right not to be subject to solely automated decisions with significant effects.',
      ],
      gap: 'These rights exist on paper. In practice: disclosures are buried in terms of service, explanations are technically opaque, and job applicants eliminated by Amazon\'s AI system had no idea AI was involved. Digital literacy gaps mean most users cannot evaluate AI reliability even when informed.',
      verdict: 'Least accountability, most harm. Legal rights exist but are practically unenforceable without technical literacy and legal resources.',
    },
  },
  {
    id: 'regulator',
    number: '05',
    label: 'Regulator',
    sublabel: 'EU · FTC · ICO · National Courts',
    color: '#C0392B',
    detail: {
      role: 'The institutional backstop — responsible for setting rules, enforcing them, and providing redress mechanisms when AI harms occur.',
      obligations: [
        'EU AI Act: Establishes national market surveillance authorities; GPAI Office in Brussels for frontier models.',
        'EU Product Liability Directive (revised): Extends product liability to AI software — but "defect" definition remains contested.',
        'AI Liability Directive (draft): Would introduce rebuttable presumption of causation — still not adopted as of 2024.',
      ],
      gap: 'EU AI Act won\'t be fully enforceable until 2027. No global coordination exists — AI systems can be hosted in permissive jurisdictions and deployed globally. Enforcement bodies lack the technical expertise to audit black-box AI systems. The AI Liability Directive remains stalled in Council.',
      verdict: 'Structurally inadequate. The most powerful institutional actor is also the slowest. Enforcement lags deployment by years.',
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
          <span className="section-label">02 — Liability Chain</span>
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
            When AI causes harm, every actor in the chain points to someone else.
            Click each node to understand their obligations — and where they fail.
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
            Each connector represents a handoff of responsibility — and a potential gap in accountability.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
