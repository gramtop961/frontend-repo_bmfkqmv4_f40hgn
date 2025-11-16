import { motion } from 'framer-motion'
import { Cpu, Layers, Ruler, ScanLine, Wrench, Camera } from 'lucide-react'

const workshops = [
  {
    icon: <Cpu className="h-6 w-6" />, 
    title: 'AI for Structural Design',
    desc: 'Use ML models to optimize reinforcement and predict load paths with real project datasets.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'BIM + Digital Twins',
    desc: 'Hands-on with BIM pipelines and creating live digital twins for campus infrastructure.'
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: 'Parametric Bridges in Grasshopper',
    desc: 'From concept to analyzable geometry using Rhino + Grasshopper workflows.'
  },
  {
    icon: <ScanLine className="h-6 w-6" />,
    title: 'LiDAR Survey & Reality Capture',
    desc: 'Field scanning, point clouds, and mesh clean-up for rapid site modeling.'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Smart Materials Lab',
    desc: 'Explore self-healing concrete, sensors, and IoT-enabled structural health.'
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Vision for Pavement Distress',
    desc: 'Train lightweight CV models to detect cracks and potholes from drive-by footage.'
  },
]

export default function Workshops(){
  return (
    <section id="workshops" className="relative py-24 bg-gradient-to-b from-neutral-950 via-neutral-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Curated Tracks
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-white">Tech-forward, hands-on learning</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Designed with practitioners and researchers to accelerate your future-ready civil engineering skillset.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div key={i} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-fuchsia-400/10" />
              <div className="flex items-center gap-3 text-cyan-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  {w.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{w.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{w.desc}</p>
              <button className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300/90 hover:text-cyan-300">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
