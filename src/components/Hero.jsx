import { motion } from 'framer-motion'

const HEADLINES = [
  'Air Canada chatbot issued false bereavement policy, airline held liable  ///  ',
  'NYC lawyers fined $5,000 for citing ChatGPT hallucinated case law  ///  ',
  'Amazon AI hiring tool discriminated against women for four years  ///  ',
  'Belgian man died by suicide after AI chatbot encouraged him  ///  ',
  'ChatGPT fabricated sexual misconduct allegation against law professor  ///  ',
  'Google autocomplete defamed man as corrupt: €25,000 court award  ///  ',
  'Italy banned ChatGPT over GDPR violations and hallucinated records  ///  ',
  'ChatGPT invented criminal record for Australian mayor Brian Hood  ///  ',
  'AI diagnostic tool misdiagnosed Black patients at significantly higher rates  ///  ',
  'EU AI Act establishes zero general duty for AI to tell the truth (Wachter et al., 2024)  ///  ',
]

const TICKER_TEXT = HEADLINES.join('') + HEADLINES.join('')

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px 56px',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 11,
            letterSpacing: '0.3em',
            color: '#C0392B',
          }}
        >
          AI ACCOUNTABILITY & LIABILITY
        </span>
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 11,
            letterSpacing: '0.25em',
            color: '#444',
          }}
        >
          EDHEC GMBA / APRIL 2026
        </span>
      </motion.div>

      {/* Main headline */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 56px',
        }}
      >
        <motion.div variants={container} initial="hidden" animate="show">
          {/* WHO'S */}
          <div style={{ overflow: 'hidden', lineHeight: 0.85 }}>
            <motion.div variants={word}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(96px, 18vw, 260px)',
                  color: '#F5F0E8',
                  display: 'block',
                  letterSpacing: '-0.01em',
                }}
              >
                WHO'S
              </span>
            </motion.div>
          </div>

          {/* RESPONSIBLE? outlined */}
          <div style={{ overflow: 'hidden', lineHeight: 0.85 }}>
            <motion.div variants={word}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(96px, 18vw, 260px)',
                  display: 'block',
                  letterSpacing: '-0.01em',
                  WebkitTextStroke: '2px #C0392B',
                  color: 'transparent',
                }}
              >
                RESPONSIBLE?
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: 40,
              maxWidth: 640,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(16px, 2vw, 22px)',
                color: '#A09888',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              When AI makes up facts, discriminates, and causes real harm.
              Who actually pays?
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{
          background: '#C0392B',
          overflow: 'hidden',
          padding: '14px 0',
          borderTop: '1px solid #8B1A12',
        }}
      >
        <div className="ticker-track">
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 13,
              letterSpacing: '0.12em',
              color: '#F5F0E8',
            }}
          >
            {TICKER_TEXT}
          </span>
        </div>
      </motion.div>

      {/* Bottom team info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: '28px 56px',
          borderTop: '1px solid #1e1e1e',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 11,
              letterSpacing: '0.3em',
              color: '#C0392B',
              marginBottom: 6,
            }}
          >
            RESEARCH TEAM
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 15,
              color: '#F5F0E8',
              lineHeight: 1.8,
            }}
          >
            Guzman Jennifer &nbsp;·&nbsp; Mehta Naman &nbsp;·&nbsp; Ritoper Anna
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 11,
              letterSpacing: '0.3em',
              color: '#444',
              marginBottom: 6,
            }}
          >
            COURSE
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: '#A09888',
              lineHeight: 1.7,
              maxWidth: 340,
              textAlign: 'right',
            }}
          >
            AI Innovation Track: Risks, Limitations &amp; Ethical Considerations of AI
            <br />
            Prof. M. Sisto, EDHEC GMBA
          </p>
        </div>
      </motion.div>
    </div>
  )
}
