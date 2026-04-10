import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import LiabilityChain from './components/LiabilityChain'
import RealCases from './components/RealCases'
import Testimony from './components/Testimony'
import LegalVoid from './components/LegalVoid'
import CarelessSpeech from './components/CarelessSpeech'
import MicrosoftRAI from './components/MicrosoftRAI'
import Verdict from './components/Verdict'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <div className="grain-overlay" aria-hidden="true" />
      <SideNav />
      <section id="hero"><Hero /></section>
      <section id="problem"><TheProblem /></section>
      <section id="liability"><LiabilityChain /></section>
      <section id="cases"><RealCases /></section>
      <section id="testimony"><Testimony /></section>
      <section id="legal-void"><LegalVoid /></section>
      <section id="careless-speech"><CarelessSpeech /></section>
      <section id="microsoft-rai"><MicrosoftRAI /></section>
      <section id="verdict"><Verdict /></section>
    </div>
  )
}
