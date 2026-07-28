import { motion } from 'framer-motion'
import { Shirt, MapPin, MessageCircle } from 'lucide-react'
import { benefits } from '../../data/products'

/** Christian cross icon (Lucide Cross is an X) */
function CrossIcon({ className, strokeWidth = 1.8 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v20M8 7h8" />
    </svg>
  )
}

const iconMap = {
  Shirt,
  Cross: CrossIcon,
  MapPin,
  MessageCircle,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Benefits() {
  return (
    <section className="relative -mt-8 md:-mt-12 z-20 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 bg-white rounded-3xl shadow-soft-lg border border-gray-100 p-4 md:p-6"
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Shirt
            return (
              <motion.div
                key={benefit.id}
                variants={item}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-3 md:p-4 text-center sm:text-left"
              >
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-graphite text-sm md:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-graphite/60 mt-0.5 leading-snug">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
