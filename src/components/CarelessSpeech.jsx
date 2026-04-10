import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const types = [
  {
    number: '01',
    name: 'Hallucination',
    definition: 'Generating factual claims that have no basis in training data or reality — stated with complete confidence and without uncertainty signals.',
    example: 'ChatGPT citing six nonexistent court cases in a federal filing (Mata v. Avianca, 2023). ChatGPT inventing Jonathan Turley\'s sexual harassment allegation. Claude fabricating a detailed image description when it could not process the image.',
    source: 'Wachter et al., 2024 §2.1',
    severity: 'CRITICAL',
  },
  {
    number: '02',
    name: 'Non-Representative Sources',
    definition: 'Synthesizing responses from training data that systematically over-represents certain perspectives, demographics, or viewpoints — presenting a skewed sample as general truth.',
    example: 'Medical LLMs trained predominantly on Western clinical data giving recommendations that do not account for population-specific risk factors. Legal AI trained on US jurisprudence giving advice inapplicable to other jurisdictions — without disclosing this limitation.',
    source: 'Wachter et al., 2024 §2.2',
    severity: 'HIGH',
  },
  {
    number: '03',
    name: 'Incompleteness',
    definition: 'Providing responses that are technically accurate but omit crucial context, counterevidence, or qualifications — creating a false impression of completeness.',
    example: 'An AI health assistant listing the benefits of a medication without mentioning contraindications. A legal AI describing one party\'s rights without noting the opposing doctrine. An AI investment advisor citing historical returns without noting that past performance does not predict future results.',
    source: 'Wachter et al., 2024 §2.3',
    severity: 'HIGH',
  },
  {
    number: '04',
    name: 'No Uncertainty Signals',
    definition: 'Presenting probabilistic, contested, or unknown information as established fact — failing to communicate the epistemic status of claims.',
    example: 'An AI diagnostic tool stating a diagnosis with 94% confidence without disclosing that this figure was computed on a demographically non-representative test set. An AI summarising contested scientific literature as though consensus exists. Claude stating a fabricated image description as fact.',
    source: 'Wachter et al., 2024 §2.4',
    severity: 'CRITICAL',
  },
  {
    number: '05',
    name: 'Fake References',
    definition: 'Fabricating academic citations, statistics, case names, authors, or publication details — presenting invented sources as verifiable evidence.',
    example: 'ChatGPT generating six complete but entirely fictional case citations with docket numbers and judicial quotes (Mata v. Avianca, 2023). LLMs producing fake academic paper abstracts that pass superficial credibility checks. AI-generated misinformation citing invented WHO reports or IPCC statistics.',
    source: 'Wachter et al., 2024 §2.5',
    severity: 'CRITICAL',
  },
  {
    number: '06',
    name: 'Inaccurate Summaries',
    definition: 'Distorting, reversing, or selectively representing the content of real sources — producing summaries that contradict or misrepresent the original text.',
    example: 'An AI legal research tool summarising a court ruling as favourable to the defendant when the ruling was the opposite. AI news summarisers flattening nuanced reporting into misleading headlines. LLMs paraphrasing scientific studies in ways that invert the statistical findings.',
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
          <span className="section-label">06 — Careless Speech</span>
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
                "Careless speech describes AI outputs that, while not necessarily intentionally
                deceptive, create false impressions through inaccuracy, incompleteness, or the
                failure to communicate appropriate epistemic uncertainty — constituting a form
                of speech act that falls below what a duty of care would require."
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
                Wachter et al. argue that careless speech is distinct from both intentional
                deception and random error. It represents a systematic failure mode specific
                to LLMs — one that existing legal frameworks for defamation, negligent
                misstatement, and product liability have not been updated to address.
                The Google autocomplete defamation cases (Germany, Austria) establish that
                AI-generated speech can ground legal claims — but this has not yet been
                extended to LLM hallucinations.
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
