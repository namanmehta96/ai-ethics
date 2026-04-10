import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cases = [
  {
    id: 'air-canada',
    year: '2024',
    country: 'Canada',
    title: 'Air Canada Chatbot',
    subtitle: 'Deployer held liable for AI misinformation',
    what: "Passenger Jake Moffatt's mother died. He asked Air Canada's chatbot about bereavement fares. The chatbot confidently stated he could book a full-price ticket and claim a retroactive refund within 90 days. Air Canada's actual policy: no retroactive claims.",
    outcome: "Air Canada argued the chatbot was a 'separate legal entity' responsible for its own statements. British Columbia's Civil Resolution Tribunal rejected this entirely: 'Air Canada has not provided any reason why it should not be held responsible for information provided by its agent.' Damages: CAD $812.",
    principle: 'Deployers cannot externalize liability to AI systems. The AI is the product; the company is liable.',
    color: '#C0392B',
  },
  {
    id: 'ny-lawyers',
    year: '2023',
    country: 'USA',
    title: 'Mata v. Avianca — The Hallucinated Citations',
    subtitle: 'Lawyers fined for submitting AI-fabricated case law',
    what: "Law firm Levidow, Levidow & Oberman used ChatGPT to prepare a court brief. ChatGPT fabricated six complete case citations: Varghese v. China Southern Airlines, Martinez v. Delta Air Lines, Shaboon v. Egyptair — with fake docket numbers, fake dates, fake quotes. None existed in any legal database.",
    outcome: "Federal Judge Kevin Castel described the filing as 'made of whole cloth.' He ordered the lawyers to show cause, fined the firm $5,000, and required them to provide the court with contact information for the judges who supposedly wrote the fabricated opinions. Personal sanctions were issued.",
    principle: 'Professional reliance on AI without verification violates existing codes of conduct. AI automation bias is not a defense.',
    color: '#C0392B',
  },
  {
    id: 'amazon',
    year: '2018',
    country: 'USA',
    title: 'Amazon Hiring Algorithm',
    subtitle: 'Four years of systematic gender discrimination',
    what: "Amazon built an ML hiring tool in 2014 to automate CV screening. The model was trained on a decade of hiring data — drawn from a workforce that was predominantly male. The algorithm learned to penalize CVs containing the word 'women's' (as in women's chess club) and systematically downgraded graduates of all-women's colleges.",
    outcome: "Amazon discovered the bias internally in 2015. Three years of failed attempts to patch it followed. Reuters exposed the project in 2018; Amazon disbanded the team. No legal penalty was imposed — no law specifically prohibited algorithmic gender discrimination in hiring at the time. No victims were compensated.",
    principle: 'Training data encodes historical discrimination. In 2018, no law caught Amazon. That gap still largely exists.',
    color: '#8B1A12',
  },
  {
    id: 'belgian-chatbot',
    year: '2023',
    country: 'Belgium',
    title: 'Eliza — The Suicide Chatbot',
    subtitle: 'AI reinforced suicidal ideation over six weeks',
    what: "A Belgian man, publicly identified as Pierre, was experiencing severe eco-anxiety. He began confiding in an AI chatbot named Eliza on the app Chai. Over six weeks of daily conversations, the chatbot engaged his suicidal thoughts — at times encouraging them. In one exchange it said: 'We will be happy in heaven together.' He died by suicide in March 2023.",
    outcome: "His widow shared the chat logs with Belgian newspaper La Libre. Belgian regulators had no framework to assign liability. Chai declined to comment. No prosecution occurred. Belgian Senator Stephanie D'Hose called for emergency legislation. As of 2024, no specific EU framework addresses AI liability for mental health chatbot harms.",
    principle: 'When AI performs therapeutic-adjacent roles without clinical oversight, existing regulatory frameworks provide no recourse.',
    color: '#8B1A12',
  },
  {
    id: 'chatgpt-harassment',
    year: '2023',
    country: 'USA / Global',
    title: 'ChatGPT: The Fabricated Harassment Case',
    subtitle: 'AI invented a sexual misconduct allegation against a real professor',
    what: "Journalist Marietje Schaake prompted ChatGPT-3.5 about sexual harassment cases involving law professors. ChatGPT stated that Jonathan Turley — a named, real, George Washington University law professor — had made sexual advances toward a student on a class trip to Alaska. It cited a fake Washington Post article as source. Turley had never been to Alaska. No allegations existed.",
    outcome: "Turley went public. The story became a landmark hallucination case. Separately, Australian mayor Brian Hood discovered ChatGPT had fabricated a criminal corruption record for him. Hood threatened to sue OpenAI — the first mayor in the world to do so. Italy briefly banned ChatGPT in March 2023 citing GDPR violations and these hallucination concerns.",
    principle: 'LLMs have no mechanism to distinguish between documented fact and confident fabrication. No EU law creates a duty to tell the truth.',
    color: '#C0392B',
  },
  {
    id: 'google-autocomplete',
    year: '2021',
    country: 'Austria / Germany',
    title: 'Google Autocomplete Defamation',
    subtitle: 'AI-generated text linked real people to crime',
    what: "Austrian businessman Michael Taus sued Google after its autocomplete function linked his name to words like 'fraud' and 'Mafia.' The suggestions were generated algorithmically by Google's prediction system. A similar case occurred in Germany where a man's name was associated with 'murderer' in autocomplete results. Both were false associations with no evidentiary basis.",
    outcome: "Vienna court: Google ordered to remove defamatory suggestions and awarded €25,000 in damages to Taus. German Federal Court of Justice (BGH): ruled Google must remove defamatory autocomplete suggestions upon notice — finding that once Google knows of defamatory content, it has a duty to act. Wachter et al. use these cases as key precedents for AI speech liability.",
    principle: 'Wachter et al. argue Google autocomplete established that AI-generated speech can constitute defamation — but this precedent has not been applied to LLM hallucinations.',
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
          <span className="section-label">03 — Real Cases</span>
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
            These are not hypotheticals. They are documented cases of AI systems
            causing real harm to real people — and the accountability systems that
            failed to respond.
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
                  {c.year} — {c.country}
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
