import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import { getWhatsAppUrl, getContactMessage } from '../../utils/whatsapp'
import { siteConfig } from '../../data/products'

export default function CTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white p-8 md:p-12 lg:p-14 shadow-pink-glow"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-white/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Atendemos principalmente Feira de Santana - BA</span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-2">
                Gostou de algum modelo?
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-md">
                Para outras cidades, consulte disponibilidade e valor do frete pelo WhatsApp.
              </p>
            </div>

            <motion.a
              href={getWhatsAppUrl(getContactMessage())}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-pink font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
