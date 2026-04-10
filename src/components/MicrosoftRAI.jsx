import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const goals = [
  {
    code: 'A1',
    category: 'Accountability',
    title: 'Designated Accountability Owners',
    description: 'Every AI system must have a named individual or team accountable for its responsible use throughout its lifecycle. Accountability cannot be diffused across an organisation — it must be specific and traceable.',
    practice: 'Appointment of AI accountability officers; registration of AI systems in an internal governance inventory with named owners and review cycles.',
    contrast: 'EU AI Act assigns accountability to "deployers" as a category. Microsoft\'s standard demands a named human being. The difference between institutional accountability and individual accountability is the difference between enforceable and diffuse.',
  },
  {
    code: 'A5',
    category: 'Accountability',
    title: 'Human Oversight and Control',
    description: 'AI systems must be designed so that humans can monitor, intervene in, and override AI decisions. High-stakes systems require mandatory human review before action is taken. No consequential AI decision should be fully autonomous.',
    practice: 'Mandatory human-in-the-loop review for AI outputs affecting employment, credit, healthcare, legal proceedings, or customer commitments. Automated escalation to human review when AI confidence scores fall below defined thresholds.',
    contrast: 'Air Canada\'s chatbot had no human oversight on its output — it committed the company to policies that did not exist. Goal A5 would have required human review of any commitment-making interaction. The accountability gap was structural, not accidental.',
  },
  {
    code: 'F3',
    category: 'Fairness',
    title: 'Impact Assessments Before Deployment',
    description: 'Before any AI system is deployed in a consequential context, a structured impact assessment must evaluate potential harms to affected populations — including harms to groups that may be underrepresented in testing data.',
    practice: 'Structured Responsible AI Impact Assessment (RAIA) template; mandatory red team testing; demographic parity analysis across protected characteristics; documentation of foreseeable misuse scenarios.',
    contrast: 'Amazon conducted no adequate bias audit of its hiring algorithm before deployment, or discovered and buried the results. Four years of discriminatory hiring followed. Impact assessment is not auditing after deployment — it is a prerequisite for deployment.',
  },
  {
    code: 'T2',
    category: 'Transparency',
    title: 'Epistemic Transparency Obligations',
    description: 'AI systems must communicate the basis for their outputs, the degree of confidence warranted, and the limitations of their knowledge. Users must be given the information they need to evaluate AI outputs critically.',
    practice: 'Confidence scores in user-facing outputs where relevant; disclosure of training data limitations; mandatory uncertainty signalling when AI responses concern contested facts, medical information, or legal advice.',
    contrast: 'Wachter et al. identify the absence of uncertainty signals as a core careless speech failure. Microsoft\'s T2 standard operationalises what a legal duty to signal uncertainty would look like in practice. EU law has no equivalent obligation.',
  },
  {
    code: 'RS3',
    category: 'Reliability & Safety',
    title: 'Ongoing Monitoring Post-Deployment',
    description: 'Responsible AI does not end at deployment. Systems must be continuously monitored for drift, emergent harms, bias amplification, and misuse patterns. Monitoring must be systematic, not reactive.',
    practice: 'Automated drift detection on model outputs; user feedback loops with escalation paths; quarterly red team exercises on deployed systems; mandatory incident review for all AI-related harms reported to the organisation.',
    contrast: 'The Belgian suicide chatbot ran for six weeks without any monitoring of conversations involving self-harm. Amazon\'s hiring algorithm ran for three years after internal discovery of its bias. RS3 treats monitoring as a perpetual obligation, not a post-launch option.',
  },
  {
    code: 'P1',
    category: 'Privacy & Security',
    title: 'Data Governance for AI Training',
    description: 'AI systems must be trained and fine-tuned only on data that meets defined standards of consent, representativeness, and privacy protection. Training data governance is a precondition for trustworthy outputs.',
    practice: 'Documented data provenance for all training datasets; consent verification for personal data used in fine-tuning; representativeness audits to identify systematic underrepresentation of demographic groups; prohibition on training on data derived from illegal surveillance.',
    contrast: 'Amazon\'s hiring algorithm was trained on historically biased hiring data without demographic audit. Google Autocomplete learned defamatory associations from user search patterns. Neither would have been permissible under a P1-equivalent standard.',
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
          <span className="section-label">07 — Microsoft Responsible AI Standard</span>
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
              The Microsoft Responsible AI Standard v2 is not law — it is a voluntary
              internal governance framework. But it illustrates exactly what a legally
              adequate accountability system would require: named owners, mandatory
              assessments, ongoing monitoring, and epistemic transparency.
              Compare each standard to the cases documented in this report.
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
                The EU AI Act requires deployers to implement "human oversight" as a general
                principle. Microsoft's standard specifies exactly what that means: named individuals,
                confidence thresholds, mandatory escalation paths, quarterly red team exercises,
                and incident review. The distance between the EU's general principle and Microsoft's
                specific practice is the distance between accountability on paper and accountability
                in practice.
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
            The Microsoft RAI Standard v2 demonstrates that technically detailed accountability
            frameworks are achievable. The argument that AI accountability is too complex to specify
            is refuted by the existence of this document. The question is not whether accountability
            is possible — it is whether it will be legally required.
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
            SOURCE: MICROSOFT RESPONSIBLE AI STANDARD V2 — GOALS A1, A5, F3, T2, RS3, P1
          </p>
        </motion.div>
      </div>
    </div>
  )
}
