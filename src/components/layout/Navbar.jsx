import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { getWhatsAppUrl, getContactMessage } from '../../utils/whatsapp'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/colecoes', label: 'Coleções' },
  { to: '/#sobre', label: 'Sobre Nós' },
  { to: '/#contato', label: 'Contato' },
]

export default function Navbar() {
  const scrolled = useScrollPosition(30)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (window.location.pathname !== '/') {
        window.location.href = to
      }
      setMobileOpen(false)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-gray-100/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          <Logo size="md" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.to.startsWith('/#') ? (
                  <a
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="text-sm font-medium text-brand-graphite/80 hover:text-brand-blue transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink group-hover:w-full transition-all duration-300" />
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors relative group ${
                        isActive
                          ? 'text-brand-blue'
                          : 'text-brand-graphite/80 hover:text-brand-blue'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-brand-pink transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <a
            href={getWhatsAppUrl(getContactMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-pink text-white text-sm font-semibold rounded-full shadow-pink-glow hover:bg-brand-pink-dark transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir pelo WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-brand-graphite hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-16"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-16 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    {link.to.startsWith('/#') ? (
                      <a
                        href={link.to}
                        onClick={(e) => handleNavClick(e, link.to)}
                        className="block px-4 py-3 rounded-xl text-brand-graphite font-medium hover:bg-brand-gray-light transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 rounded-xl text-brand-graphite font-medium hover:bg-brand-gray-light transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <a
                  href={getWhatsAppUrl(getContactMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
