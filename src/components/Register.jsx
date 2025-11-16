import { motion } from 'framer-motion'

export default function Register(){
  return (
    <section id="register" className="relative py-24 bg-gradient-to-b from-black to-neutral-950">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Save your spot</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Limited seats across tracks. Early registrations get discount and priority lab access.</p>
        </motion.div>

        <form className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Full name</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Alex Johnson"/>
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="alex@email.com"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70">Select track</label>
              <select className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400">
                <option>AI for Structural Design</option>
                <option>BIM + Digital Twins</option>
                <option>Parametric Bridges</option>
                <option>LiDAR Survey</option>
                <option>Smart Materials Lab</option>
                <option>Vision for Pavement</option>
              </select>
            </div>
          </div>
          <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-fuchsia-500/20 hover:scale-[1.01] transition">Register</button>
          <p className="mt-3 text-center text-xs text-white/60">We’ll email you the confirmation and payment link.</p>
        </form>
      </div>
    </section>
  )
}
