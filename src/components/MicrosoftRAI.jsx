import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const goals = [
  {
    code: 'A1',
    category: 'Accountability',
    title: 'Designated Accountability Owners',
    description: 'Every AI system needs a named person or team on the hook for it. Not a category, not a committee. A name.',
    practice: 'AI accountability officers; AI systems registered in a governance inventory with named owners and review cycles.',
    contrast: 'The EU AI Act pins accountability on "deployers" as a category. Microsoft demands a named human. That is the gap between institutional and personal responsibility.',
  },
  {
    code: 'A5',
    category: 'Accountability',
    title: 'Human Oversight and Control',
    description: 'Humans must be able to watch, step in, and overrule the AI. No consequential decision should be fully automatic.',
    practice: 'Human-in-the-loop review for AI affecting employment, healthcare, legal, or customer commitments. Automated escalation when confidence drops below thresholds.',
    contrast: 'Air Canada\'s chatbot had zero human oversight, so it promised customers policies that did not exist. A5 would have forced a human to sign off on any interaction that made a commitment.',
  },
  {
    code: 'F3',
    category: 'Fairness',
    title: 'Impact Assessments Before Deployment',
    description: 'Before launch, a structured impact assessment has to map the potential harms, including to groups barely represented in the test data.',
    practice: 'Responsible AI Impact Assessment template; mandatory red team testing; demographic parity analysis; documented misuse scenarios.',
    contrast: 'Amazon ran no real bias audit before launch, and four years of discriminatory hiring followed. Impact assessments belong before deployment, not after the damage is done.',
  },
  {
    code: 'T2',
    category: 'Transparency',
    title: 'Epistemic Transparency Obligations',
    description: 'AI has to say where its answer comes from, how confident it should be, and what it does not know. Users cannot judge the output without that.',
    practice: 'Confidence scores in user-facing outputs; training data limitation disclosures; mandatory uncertainty signals for medical, legal, or contested claims.',
    contrast: 'Wachter et al. flag missing uncertainty signals as a core careless speech failure. T2 shows what a legal duty to signal uncertainty would actually look like. EU law has nothing like it.',
  },
  {
    code: 'RS3',
    category: 'Reliability & Safety',
    title: 'Ongoing Monitoring Post-Deployment',
    description: 'Systems have to be watched continuously for drift, new harms, and misuse. Monitoring has to be built in, not bolted on after something breaks.',
    practice: 'Automated drift detection; user feedback loops with escalation; quarterly red teams on deployed systems; mandatory incident review.',
    contrast: 'The Belgian suicide chatbot ran six weeks with nobody watching. Amazon kept its biased algorithm running three years after the problem was found. RS3 makes monitoring non-optional.',
  },
  {
    code: 'P1',
    category: 'Privacy & Security',
    title: 'Data Governance for AI Training',
    description: 'AI can only be trained on data that meets standards for consent, representativeness, and privacy. Without clean data going in, you cannot trust what comes out.',
    practice: 'Documented data provenance; consent verification for personal data; representativeness audits; prohibition on data from illegal surveillance.',
    contrast: 'Amazon trained on biased hiring data with no demographic audit, and Google Autocomplete learned defamatory associations from search patterns. Neither would pass P1.',
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
              Microsoft's RAI Standard v2 is not law. It is a voluntary framework the
              company follows. But it shows what real accountability looks like: named
              owners, mandatory assessments, ongoing monitoring, and honest signals of
              what the model does and does not know.
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
                spells it out: named people, confidence thresholds, mandatory escalation,
                quarterly red teams. That gap between principle and practice is the gap
                between paper and reality.
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
            Microsoft's RAI Standard v2 proves detailed accountability frameworks are
            doable. The question is not whether accountability is possible. It is
            whether it will ever be legally required.
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
