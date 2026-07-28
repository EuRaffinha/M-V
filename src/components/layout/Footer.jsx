import { Link } from 'react-router-dom'
import { Instagram, Facebook, MapPin, Clock, MessageCircle } from 'lucide-react'
import Logo from '../ui/Logo'
import { siteConfig } from '../../data/products'
import { getWhatsAppUrl, getContactMessage } from '../../utils/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-brand-gray-light border-t border-gray-100">
      <div className="container-custom section-padding !py-12 md:!py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-brand-graphite/70 max-w-xs leading-relaxed">
              Vista sua fé.
              <br />
              Compartilhe esperança.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-brand-graphite mb-4 text-sm uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Início' },
                { to: '/colecoes', label: 'Coleções' },
                { to: '/#sobre', label: 'Sobre Nós' },
                { to: '/#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-brand-graphite/70 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="font-semibold text-brand-graphite mb-4 text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl(getContactMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-graphite/70 hover:text-brand-pink transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-pink shrink-0" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-graphite/70">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-graphite/70">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-brand-graphite mb-4 text-sm uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-brand-graphite hover:text-brand-pink hover:border-brand-pink/30 transition-all shadow-soft"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-brand-graphite hover:text-brand-blue hover:border-brand-blue/30 transition-all shadow-soft"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-3 text-xs text-brand-gray-medium">
              {siteConfig.instagramHandle}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-gray-medium">
          <p>© {year} M&V. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-brand-pink">
            <span>Feito com</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>e fé</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
