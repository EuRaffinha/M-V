import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, getContactMessage } from '../../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppUrl(getContactMessage())}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 
                 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30
                 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
      </span>
    </motion.a>
  )
}
