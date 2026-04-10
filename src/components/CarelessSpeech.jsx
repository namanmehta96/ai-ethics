import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const types = [
  {
    number: '01',
    name: 'Hallucination',
    definition: 'Generating factual claims with no basis in training data or reality, stated with complete confidence.',
    example: 'ChatGPT citing six nonexistent court cases (Mata v. Avianca). ChatGPT inventing a sexual harassment allegation against Jonathan Turley. Claude fabricating a detailed image description.',
    source: 'Wachter et al., 2024 §2.1',
    severity: 'CRITICAL',
  },
  {
    number: '02',
    name: 'Non-Representative Sources',
    definition: 'Synthesizing responses from training data that over-represents certain perspectives, presenting a skewed sample as general truth.',
    example: 'Medical LLMs trained on Western data giving recommendations that ignore population-specific risk factors. Legal AI trained on US case law giving advice inapplicable elsewhere.',
    source: 'Wachter et al., 2024 §2.2',
    severity: 'HIGH',
  },
  {
    number: '03',
    name: 'Incompleteness',
    definition: 'Providing responses that are technically accurate but omit crucial context or qualifications, creating a false impression of completeness.',
    example: 'An AI health assistant listing medication benefits without contraindications. A legal AI describing one party\'s rights without noting opposing doctrine.',
    source: 'Wachter et al., 2024 §2.3',
    severity: 'HIGH',
  },
  {
    number: '04',
    name: 'No Uncertainty Signals',
    definition: 'Presenting probabilistic or contested information as established fact, failing to communicate the epistemic status of claims.',
    example: 'An AI diagnostic tool stating 94% confidence without disclosing the test set was demographically unrepresentative. Claude stating a fabricated image description as fact.',
    source: 'Wachter et al., 2024 §2.4',
    severity: 'CRITICAL',
  },
  {
    number: '05',
    name: 'Fake References',
    definition: 'Fabricating academic citations, case names, or publication details, presenting invented sources as verifiable evidence.',
    example: 'ChatGPT generating six fictional case citations with docket numbers and judicial quotes (Mata v. Avianca). LLMs producing fake abstracts that pass superficial credibility checks.',
    source: 'Wachter et al., 2024 §2.5',
    severity: 'CRITICAL',
  },
  {
    number: '06',
    name: 'Inaccurate Summaries',
    definition: 'Distorting or selectively representing real sources, producing summaries that contradict the original text.',
    example: 'An AI legal tool summarising a ruling as favourable to the defendant when the ruling was the opposite. News summarisers flattening nuanced reporting into misleading headlines.',
    source: 'Wachter et al., 2024 §2.6',
    severity: 'HIGH',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const severityColor = {
  CRITICAL: '#C0392B',
  HIGH: '#8B1A12',
}

export default function CarelessSpeech() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{ background: '#0d0d0d', borderTop: '1px solid #1e1e1e', padding: '120px 56px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">06 / Careless Speech</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 32,
            }}
          >
            CARELESS SPEECH
          </h2>

          {/* Definition */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'start',
            }}
          >
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
                WACHTER ET AL. DEFINITION
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 17,
                  color: '#F5F0E8',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                "Careless speech describes AI outputs that create false impressions through
                inaccuracy, incompleteness, or the failure to communicate epistemic uncertainty,
                constituting speech that falls below what a duty of care would require."
              </p>
            </div>
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
                WHY IT MATTERS LEGALLY
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  color: '#A09888',
                  lineHeight: 1.8,
                }}
              >
                Careless speech is distinct from both intentional deception and random error.
                It is a systematic failure mode specific to LLMs that existing legal frameworks
                have not been updated to address. The Google autocomplete cases establish that
                AI-generated speech can ground legal claims, but this has not been extended
                to LLM hallucinations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Types grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 2,
          }}
        >
          {types.map((t) => (
            <motion.div
              key={t.number}
              variants={item}
              style={{
                background: '#0a0a0a',
                border: '1px solid #1e1e1e',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Number watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 20,
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 80,
                  color: 'rgba(255,255,255,0.02)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {t.number}
              </div>

              {/* Severity badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    color: '#C0392B',
                  }}
                >
                  TYPE {t.number}
                </span>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: severityColor[t.severity],
                    border: `1px solid ${severityColor[t.severity]}40`,
                    padding: '2px 8px',
                  }}
                >
                  {t.severity}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: '#F5F0E8',
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {t.name}
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
                {t.definition}
              </p>

              <div style={{ height: 1, background: '#1e1e1e', marginBottom: 20 }} />

              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: '#444',
                  marginBottom: 10,
                }}
              >
                DOCUMENTED EXAMPLES
              </p>

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 13,
                  color: '#F5F0E8',
                  lineHeight: 1.75,
                  marginBottom: 20,
                }}
              >
                {t.example}
              </p>

              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  color: '#C0392B',
                }}
              >
                {t.source}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
