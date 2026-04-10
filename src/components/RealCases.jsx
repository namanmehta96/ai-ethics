import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cases = [
  {
    id: 'air-canada',
    year: '2024',
    country: 'Canada',
    title: 'Air Canada Chatbot',
    subtitle: 'Deployer held liable for AI misinformation',
    what: "Jake Moffatt's mother died. Air Canada's chatbot told him he could book full-price and claim a retroactive bereavement refund within 90 days. The actual policy: no retroactive claims.",
    outcome: "Air Canada argued the chatbot was a 'separate legal entity.' BC's Civil Resolution Tribunal rejected this entirely. Damages: CAD $812.",
    principle: 'Deployers cannot externalize liability to AI systems. The AI is the product; the company is liable.',
    color: '#C0392B',
  },
  {
    id: 'ny-lawyers',
    year: '2023',
    country: 'USA',
    title: 'Mata v. Avianca: The Hallucinated Citations',
    subtitle: 'Lawyers fined for submitting AI-fabricated case law',
    what: "Levidow, Levidow & Oberman used ChatGPT to prepare a court brief. ChatGPT fabricated six complete case citations with fake docket numbers, dates, and quotes. None existed in any legal database.",
    outcome: "Judge Kevin Castel described the filing as 'made of whole cloth.' The firm was fined $5,000 and personally sanctioned.",
    principle: 'Professional reliance on AI without verification violates existing codes of conduct. AI automation bias is not a defense.',
    color: '#C0392B',
  },
  {
    id: 'amazon',
    year: '2018',
    country: 'USA',
    title: 'Amazon Hiring Algorithm',
    subtitle: 'Four years of systematic gender discrimination',
    what: "Amazon built an ML hiring tool trained on a decade of predominantly male hiring data. It learned to penalize CVs containing 'women's' and downgraded graduates of all-women's colleges.",
    outcome: "Amazon found the bias in 2015 but failed to patch it. Reuters exposed the project in 2018. No legal penalty was imposed. No victims were compensated.",
    principle: 'Training data encodes historical discrimination. In 2018, no law caught Amazon. That gap still largely exists.',
    color: '#8B1A12',
  },
  {
    id: 'belgian-chatbot',
    year: '2023',
    country: 'Belgium',
    title: 'Eliza: The Suicide Chatbot',
    subtitle: 'AI reinforced suicidal ideation over six weeks',
    what: "A Belgian man confided eco-anxiety to an AI chatbot named Eliza on the app Chai. Over six weeks, the chatbot engaged his suicidal thoughts, at times encouraging them: 'We will be happy in heaven together.' He died by suicide in March 2023.",
    outcome: "His widow shared the chat logs publicly. Belgian regulators had no framework to assign liability. No prosecution occurred. No EU framework addresses AI mental health harms.",
    principle: 'When AI performs therapeutic-adjacent roles without clinical oversight, existing regulatory frameworks provide no recourse.',
    color: '#8B1A12',
  },
  {
    id: 'chatgpt-harassment',
    year: '2023',
    country: 'USA / Global',
    title: 'ChatGPT: The Fabricated Harassment Case',
    subtitle: 'AI invented a sexual misconduct allegation against a real professor',
    what: "ChatGPT-3.5 stated that Jonathan Turley, a real GWU law professor, had made sexual advances toward a student on a trip to Alaska. It cited a fake Washington Post article. Turley had never been to Alaska. No allegations existed.",
    outcome: "Turley went public. Separately, Australian mayor Brian Hood discovered ChatGPT had fabricated a criminal record for him and threatened to sue OpenAI. Italy briefly banned ChatGPT over these hallucination concerns.",
    principle: 'LLMs have no mechanism to distinguish between documented fact and confident fabrication. No EU law creates a duty to tell the truth.',
    color: '#C0392B',
  },
  {
    id: 'google-autocomplete',
    year: '2021',
    country: 'Austria / Germany',
    title: 'Google Autocomplete Defamation',
    subtitle: 'AI-generated text linked real people to crime',
    what: "Austrian businessman Michael Taus sued Google after autocomplete linked his name to 'fraud' and 'Mafia.' A similar German case associated a man with 'murderer.' Both were false, algorithmically generated associations.",
    outcome: "Vienna court awarded €25,000 to Taus. Germany's BGH ruled Google must remove defamatory suggestions upon notice. Wachter et al. cite these as key precedents for AI speech liability.",
    principle: 'Google autocomplete established that AI-generated speech can constitute defamation, but this precedent has not been applied to LLM hallucinations.',
    color: '#8B1A12',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function RealCases() {
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
          <span className="section-label">03 / Real Cases</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 112px)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              marginBottom: 28,
            }}
          >
            DOCUMENTED FAILURES
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: '#A09888',
              maxWidth: 580,
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            These are not hypotheticals. Documented cases of AI causing real harm
            to real people, and the accountability systems that failed to respond.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 2,
          }}
        >
          {cases.map((c) => (
            <motion.div
              key={c.id}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: '#0e0e0e',
                border: '1px solid #1e1e1e',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: c.color,
                }}
              />

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    color: '#C0392B',
                  }}
                >
                  {c.year} / {c.country}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    color: '#F5F0E8',
                    lineHeight: 1.05,
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13,
                    color: '#666',
                    fontStyle: 'italic',
                  }}
                >
                  {c.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: '#1e1e1e' }} />

              {/* What */}
              <div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    color: '#444',
                    marginBottom: 8,
                  }}
                >
                  WHAT HAPPENED
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 14,
                    color: '#A09888',
                    lineHeight: 1.75,
                  }}
                >
                  {c.what}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    color: '#C0392B',
                    marginBottom: 8,
                  }}
                >
                  OUTCOME
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 14,
                    color: '#F5F0E8',
                    lineHeight: 1.75,
                  }}
                >
                  {c.outcome}
                </p>
              </div>

              {/* Principle */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 20,
                  borderTop: '1px solid #1e1e1e',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 13,
                    color: '#C0392B',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {c.principle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
