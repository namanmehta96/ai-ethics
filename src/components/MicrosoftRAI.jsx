import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const goals = [
  {
    code: 'A1',
    category: 'Accountability',
    title: 'Designated Accountability Owners',
    description: 'Every AI system must have a named individual or team accountable for its responsible use. Accountability must be specific and traceable, not diffused.',
    practice: 'AI accountability officers; AI systems registered in a governance inventory with named owners and review cycles.',
    contrast: 'EU AI Act assigns accountability to "deployers" as a category. Microsoft demands a named human being. The difference between institutional and individual accountability.',
  },
  {
    code: 'A5',
    category: 'Accountability',
    title: 'Human Oversight and Control',
    description: 'Humans must be able to monitor, intervene in, and override AI decisions. No consequential AI decision should be fully autonomous.',
    practice: 'Human-in-the-loop review for AI affecting employment, healthcare, legal, or customer commitments. Automated escalation when confidence drops below thresholds.',
    contrast: 'Air Canada\'s chatbot had no human oversight and committed the company to nonexistent policies. A5 would have required human review of any commitment-making interaction.',
  },
  {
    code: 'F3',
    category: 'Fairness',
    title: 'Impact Assessments Before Deployment',
    description: 'Before deployment, a structured impact assessment must evaluate potential harms, including to groups underrepresented in testing data.',
    practice: 'Responsible AI Impact Assessment template; mandatory red team testing; demographic parity analysis; documented misuse scenarios.',
    contrast: 'Amazon conducted no adequate bias audit before deployment. Four years of discriminatory hiring followed. Impact assessment is a prerequisite, not a post-launch audit.',
  },
  {
    code: 'T2',
    category: 'Transparency',
    title: 'Epistemic Transparency Obligations',
    description: 'AI must communicate the basis for outputs, the confidence warranted, and knowledge limitations. Users need information to evaluate AI critically.',
    practice: 'Confidence scores in user-facing outputs; training data limitation disclosures; mandatory uncertainty signals for medical, legal, or contested claims.',
    contrast: 'Wachter et al. identify absent uncertainty signals as a core careless speech failure. T2 operationalises what a legal duty to signal uncertainty would look like. EU law has no equivalent.',
  },
  {
    code: 'RS3',
    category: 'Reliability & Safety',
    title: 'Ongoing Monitoring Post-Deployment',
    description: 'Systems must be continuously monitored for drift, emergent harms, and misuse. Monitoring must be systematic, not reactive.',
    practice: 'Automated drift detection; user feedback loops with escalation; quarterly red teams on deployed systems; mandatory incident review.',
    contrast: 'The Belgian suicide chatbot ran six weeks unmonitored. Amazon\'s algorithm ran three years after bias discovery. RS3 treats monitoring as perpetual, not optional.',
  },
  {
    code: 'P1',
    category: 'Privacy & Security',
    title: 'Data Governance for AI Training',
    description: 'AI must be trained only on data meeting standards of consent, representativeness, and privacy. Data governance is a precondition for trustworthy outputs.',
    practice: 'Documented data provenance; consent verification for personal data; representativeness audits; prohibition on data from illegal surveillance.',
    contrast: 'Amazon trained on biased hiring data without demographic audit. Google Autocomplete learned defamatory associations from search patterns. Neither would be permissible under P1.',
  },
]

const categoryColor = {
  Accountability: '#C0392B',
  Fairness: '#8B1A12',
  Transparency: '#C0392B',
  'Reliability & Safety': '#8B1A12',
  'Privacy & Security': '#C0392B',
}

export default function MicrosoftRAI() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{ background: '#080808', borderTop: '1px solid #1e1e1e', padding: '120px 56px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 80 }}
        >
          <span className="section-label">07 / Microsoft Responsible AI Standard</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 7vw, 96px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 32,
            }}
          >
            WHAT RESPONSIBLE
            <br />
            ACCOUNTABILITY
            <br />
            LOOKS LIKE
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17,
                color: '#A09888',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              The Microsoft RAI Standard v2 is not law, it is a voluntary governance
              framework. But it illustrates what adequate accountability requires:
              named owners, mandatory assessments, ongoing monitoring, and epistemic
              transparency.
            </p>
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
                THE GAP
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  color: '#A09888',
                  lineHeight: 1.8,
                }}
              >
                The EU AI Act requires "human oversight" as a general principle. Microsoft
                specifies what that means: named individuals, confidence thresholds, mandatory
                escalation, quarterly red teams. The distance between general principle and
                specific practice is the distance between paper and reality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Goals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {goals.map((goal, i) => (
            <motion.div
              key={goal.code}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#0e0e0e',
                border: '1px solid #1e1e1e',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: '100px 1fr 1fr',
                gap: 40,
                alignItems: 'start',
              }}
            >
              {/* Code + category */}
              <div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 40,
                    color: '#C0392B',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {goal.code}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: '#444',
                  }}
                >
                  {goal.category}
                </div>
              </div>

              {/* Title + description + practice */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 20,
                    color: '#F5F0E8',
                    marginBottom: 12,
                    lineHeight: 1.1,
                  }}
                >
                  {goal.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 14,
                    color: '#A09888',
                    lineHeight: 1.75,
                    marginBottom: 20,
                    fontStyle: 'italic',
                  }}
                >
                  {goal.description}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: '#444',
                    marginBottom: 8,
                  }}
                >
                  IN PRACTICE
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13,
                    color: '#F5F0E8',
                    lineHeight: 1.7,
                  }}
                >
                  {goal.practice}
                </p>
              </div>

              {/* Contrast with real cases */}
              <div
                style={{
                  borderLeft: '1px solid #1e1e1e',
                  paddingLeft: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: '#C0392B',
                    marginBottom: 8,
                  }}
                >
                  VS. DOCUMENTED FAILURES
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13,
                    color: '#A09888',
                    lineHeight: 1.75,
                  }}
                >
                  {goal.contrast}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            marginTop: 56,
            padding: '40px',
            background: '#0e0e0e',
            border: '1px solid #C0392B',
            borderLeft: '3px solid #C0392B',
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 17,
              color: '#F5F0E8',
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            The Microsoft RAI Standard v2 proves that detailed accountability frameworks
            are achievable. The question is not whether accountability is possible.
            It is whether it will be legally required.
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
            SOURCE: MICROSOFT RESPONSIBLE AI STANDARD V2, GOALS A1, A5, F3, T2, RS3, P1
          </p>
        </motion.div>
      </div>
    </div>
  )
}
