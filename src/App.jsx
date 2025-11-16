import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Workshops from './components/Workshops'
import Schedule from './components/Schedule'
import Register from './components/Register'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <Hero/>
      <main>
        <section id="about" className="relative py-20 bg-gradient-to-b from-black to-neutral-950">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold">Where civil meets code</h2>
                <p className="mt-4 text-white/80">A vibrant festival of workshops pushing the boundaries of civil engineering with software, data, and automation. Learn cutting-edge tools and workflows from industry mentors and researchers.</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">300+</div>
                    Participants
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">12</div>
                    Sessions
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/20 to-amber-300/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_,i)=> (
                      <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/[0.06]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Workshops/>
        <Schedule/>
        <Register/>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Civil Techfest — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
