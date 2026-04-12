import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const recommendations = [
  {
    number: '01',
    title: 'Legislate a Duty to Signal Uncertainty',
    body: 'The EU should require every GPAI model and deployer to signal how certain it is in high-stakes settings — legal, medical, financial, civic. This does not demand that AI be accurate, only that it be honest about its confidence: if a reasonable user would act on the output, it has to carry a warning.',
    source: 'Wachter, Mittelstadt & Russell (2024); EU AI Act Gap Analysis',
    urgent: true,
  },
  {
    number: '02',
    title: 'Mandatory, Named Accountability Chains',
    body: 'Category-level accountability has to be backed by named individuals. Every consequential AI system should register an accountability officer, impact assessment, monitoring protocol, and incident pathway — Air Canada showed what happens when institutions are not anchored to a name.',
    source: 'Microsoft Responsible AI Standard v2, Goals A1 & A5; EU AI Act Articles 16-29',
    urgent: true,
  },
  {
    number: '03',
    title: 'Close the Gap: EU AI Liability Directive Must Be Adopted',
    body: 'The AI Liability Directive has to be adopted and extended to general-purpose AI harms, not just high-risk categories. The Product Liability Directive\'s "defect" definition needs to cover accuracy defects — outputs that create false impressions through hallucination or missing uncertainty signals — and the EU should set up a dedicated AI harm redress mechanism.',
    source: 'EU AI Liability Directive Draft (2022); Revised Product Liability Directive (2024); Wachter et al. (2024)',
    urgent: false,
  },
]

const sources = [
  'Wachter, S., Mittelstadt, B. & Russell, C. (2024). "Do Large Language Models Have a Legal Duty to Tell the Truth?" Oxford Internet Institute Working Paper.',
  'Microsoft Corporation (2022). Responsible AI Standard v2. Microsoft Responsible AI Office.',
  'European Parliament & Council (2024). Regulation on Artificial Intelligence (EU AI Act). Official Journal of the European Union.',
  'European Commission (2024). Revised Product Liability Directive. COM/2022/495.',
  'European Commission (2022). AI Liability Directive Proposal. COM/2022/496.',
  'IBM Security (2023). Cost of a Data Breach Report 2023. IBM Institute for Business Value.',
  'Court of British Columbia, Civil Resolution Tribunal (2024). Moffatt v. Air Canada. BCCRT 2024.',
  'United States District Court, SDNY (2023). Mata v. Avianca, Inc. Case No. 22-cv-1461.',
  'Reuters (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." October 10, 2018.',
  'La Libre Belgique (2023). "Il s\'est suicidé après des semaines de conversation avec un chatbot." March 28, 2023.',
  'The Washington Post (2023). "ChatGPT invented a sexual harassment scandal and named a real law professor as the accused." April 5, 2023.',
  'Österreichischer Oberster Gerichtshof / Bundesgerichtshof (2021). Google Autocomplete Defamation Cases, Austrian and German Courts.',
  'Turley, J. (2023). "ChatGPT made me a liar: I need AI accountability." USA Today. Op-Ed.',
  'Mehta, N. (2026). First-person documented interaction with Claude Sonnet 4.6. LinkedIn. April 2026.',
  'MIT Technology Review (2023). "The problem of AI hallucinations in high-stakes settings." Editorial.',
]

export default function Verdict() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const sourcesRef = useRef(null)
  const sourcesInView = useInView(sourcesRef, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      style={{ background: '#0a0a0a', borderTop: '2px solid #C0392B' }}
    >
      {/* Verdict header, full bleed */}
      <div
        style={{
          padding: '120px 56px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large background text */}
        <div
          style={{
            position: 'absolute',
            bottom: -20,
            left: -10,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(120px, 20vw, 320px)',
            color: 'rgba(192,57,43,0.04)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.03em',
          }}
        >
          VERDICT
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">08 / Verdict</span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(60px, 12vw, 180px)',
                color: '#F5F0E8',
                lineHeight: 0.85,
                marginBottom: 48,
                letterSpacing: '-0.02em',
              }}
            >
              THE
              <br />
              VERDICT
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 48,
                marginBottom: 80,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: '#F5F0E8',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  AI already speaks with the authority of experts — advising patients,
                  informing jurors, screening applicants, comforting the grieving. With
                  no duty to tell the truth, no named owner, no redress when it fails.
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 16,
                    color: '#A09888',
                    lineHeight: 1.8,
                  }}
                >
                  These cases are not accidents. They are what you get when the push
                  to deploy outweighs the push to be careful — and three concrete fixes
                  would change the math.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recommendations.map((rec, i) => (
              <motion.div
                key={rec.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#0e0e0e',
                  border: '1px solid #1e1e1e',
                  borderLeft: rec.urgent ? '3px solid #C0392B' : '3px solid #1e1e1e',
                  padding: '48px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 40,
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 56,
                      color: rec.urgent ? '#C0392B' : '#2a2a2a',
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    {rec.number}
                  </span>
                  {rec.urgent && (
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 9,
                        letterSpacing: '0.2em',
                        color: '#C0392B',
                        display: 'block',
                        marginTop: 4,
                      }}
                    >
                      URGENT
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(22px, 3vw, 30px)',
                      color: '#F5F0E8',
                      marginBottom: 20,
                      lineHeight: 1.1,
                    }}
                  >
                    {rec.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 15,
                      color: '#A09888',
                      lineHeight: 1.85,
                      marginBottom: 20,
                    }}
                  >
                    {rec.body}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: '#C0392B',
                    }}
                  >
                    SOURCES: {rec.source}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div
        ref={sourcesRef}
        style={{
          borderTop: '1px solid #1e1e1e',
          padding: '80px 56px',
          background: '#080808',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={sourcesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 11,
                letterSpacing: '0.3em',
                color: '#C0392B',
                marginBottom: 32,
              }}
            >
              PRIMARY SOURCES & BIBLIOGRAPHY
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px 48px',
              }}
            >
              {sources.map((source, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={sourcesInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.03 * i }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 12,
                    color: '#444',
                    lineHeight: 1.65,
                    paddingBottom: 8,
                    borderBottom: '1px solid #141414',
                  }}
                >
                  [{i + 1}] {source}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid #1e1e1e',
          padding: '56px',
          background: '#0a0a0a',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 32,
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
              RESEARCH TEAM
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                color: '#F5F0E8',
                lineHeight: 1.9,
              }}
            >
              Guzman Jennifer
              <br />
              Mehta Naman
              <br />
              Ritoper Anna
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(40px, 8vw, 80px)',
                color: '#1e1e1e',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              WHO'S<br />RESPONSIBLE?
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 13,
                color: '#444',
                fontStyle: 'italic',
                marginTop: 12,
              }}
            >
              AI Innovation Track: Risks, Limitations &amp; Ethical Considerations of AI
              <br />
              Prof. M. Sisto &nbsp;·&nbsp; EDHEC GMBA &nbsp;·&nbsp; April 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
