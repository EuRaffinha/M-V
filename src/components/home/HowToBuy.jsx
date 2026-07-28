import { motion } from 'framer-motion'
import { Smartphone, MessageCircle, MessagesSquare, Bike } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { howToBuySteps } from '../../data/products'

const iconMap = {
  Smartphone,
  MessageCircle,
  MessagesSquare,
  Bike,
}

export default function HowToBuy() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="Como Comprar" subtitle="Simples e rápido" />

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-pink/30 via-brand-blue/30 to-brand-pink/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {howToBuySteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Smartphone
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-brand-pink/20 shadow-soft flex items-center justify-center text-brand-pink mb-4">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.6} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-pink text-white text-xs font-bold flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-brand-graphite text-sm md:text-base mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-graphite/60 leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
