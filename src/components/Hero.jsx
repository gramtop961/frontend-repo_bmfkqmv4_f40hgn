import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Registrations open now
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]">
            Civil Techfest Workshops
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-xl">
            Hands-on sessions blending civil engineering with modern technology — from BIM and AI-aided design to sustainable materials and digital twins.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#register" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-fuchsia-500/20 transition hover:scale-[1.02]">
              Register Now
            </a>
            <a href="#workshops" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15">
              Explore Workshops
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
    </section>
  )
}
