import { useState } from 'react'
import { Menu, X, Calendar, MapPin } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Register', href: '#register' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 animate-pulse" />
              <div className="text-white/90">
                <div className="text-sm tracking-widest uppercase">Civil Techfest</div>
                <div className="text-xs text-white/70">Workshop Series</div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <div className="hidden sm:flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-2"><Calendar size={16}/> 21–23 Mar</div>
                <div className="flex items-center gap-2"><MapPin size={16}/> Campus Arena</div>
              </div>
            </div>

            <button onClick={() => setOpen(true)} className="md:hidden text-white/90">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/60" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-72 bg-neutral-900/95 border-l border-white/10 p-6" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-white/90 font-semibold tracking-wide">Menu</span>
              <button onClick={() => setOpen(false)} className="text-white/80"><X/></button>
            </div>
            <nav className="mt-6 grid gap-4">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="text-white/80 hover:text-white">
                  {n.label}
                </a>
              ))}
              <div className="mt-4 text-sm text-white/70 space-y-2">
                <div className="flex items-center gap-2"><Calendar size={16}/> 21–23 Mar</div>
                <div className="flex items-center gap-2"><MapPin size={16}/> Campus Arena</div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
