import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, center = true, className = '' }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="inline-block text-brand-pink font-medium text-sm uppercase tracking-wider mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-graphite">
          {title}
        </h2>
        <div className={`mt-4 flex ${center ? 'justify-center' : ''} items-center gap-2`}>
          <span className="w-12 h-0.5 bg-brand-pink rounded-full" />
          <span className="w-2 h-2 rounded-full bg-brand-pink" />
          <span className="w-12 h-0.5 bg-brand-pink rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
