import { motion } from 'framer-motion'
import { CalendarClock } from 'lucide-react'

const days = [
  {
    date: 'Day 1 — Fri, 21 Mar',
    items: [
      { time: '09:30', title: 'Opening + Icebreaker' },
      { time: '10:30', title: 'AI for Structural Design' },
      { time: '14:00', title: 'Parametric Bridges' },
      { time: '16:00', title: 'Campus Tour + Mixer' },
    ],
  },
  {
    date: 'Day 2 — Sat, 22 Mar',
    items: [
      { time: '09:30', title: 'BIM + Digital Twins' },
      { time: '13:30', title: 'LiDAR Survey Lab' },
      { time: '16:00', title: 'Poster Session' },
    ],
  },
  {
    date: 'Day 3 — Sun, 23 Mar',
    items: [
      { time: '10:00', title: 'Smart Materials Lab' },
      { time: '13:00', title: 'Vision for Pavement Distress' },
      { time: '16:00', title: 'Awards + Closing' },
    ],
  },
]

export default function Schedule(){
  return (
    <section id="schedule" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-2 text-cyan-300"><CalendarClock/></div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Schedule</h2>
            <p className="text-white/70">Three immersive days. One future-ready you.</p>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {days.map((d, i)=> (
            <motion.div key={i} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6">
              <div className="text-white font-semibold">{d.date}</div>
              <div className="mt-4 space-y-3">
                {d.items.map((it, j)=> (
                  <div key={j} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-white/90">
                    <span className="text-white/70 text-sm">{it.time}</span>
                    <span className="text-sm font-medium">{it.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
