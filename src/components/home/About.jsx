import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-brand-gray-light/40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center p-6 md:p-8">
              <div className="text-center">
                <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-4 rounded-full bg-white shadow-soft flex items-center justify-center overflow-hidden border-4 border-brand-pink/20">
                  <img
                    src="/images/mascot-vagner.png"
                    alt="Vagner Queiroz - Fundador M&V"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <p className="font-display font-bold text-brand-graphite text-lg">Vagner Queiroz</p>
                <p className="text-sm text-brand-graphite/60">Fundador · M&V</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-28 md:h-28 bg-brand-pink rounded-3xl flex items-center justify-center shadow-pink-glow">
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block text-brand-pink font-medium text-sm uppercase tracking-wider mb-3">
              Sobre a marca
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-graphite mb-5">
              Moda com propósito
            </h2>
            <div className="space-y-4 text-brand-graphite/70 leading-relaxed">
              <p>
                A <strong className="text-brand-graphite">M&V</strong> (Blessed Choice)
                nasceu com o propósito de levar a Palavra através da moda. Cada camiseta representa
                fé, esperança e muito amor.
              </p>
              <p>
                Fundada por <strong className="text-brand-graphite">Vagner Queiroz</strong>, a marca
                une design contemporâneo, qualidade premium em 100% algodão e mensagens que
                edificam — para que você compartilhe esperança em cada passo.
              </p>
              <p className="italic text-brand-blue/80 border-l-4 border-brand-pink pl-4">
                &ldquo;A alegria do Senhor é a minha força.&rdquo;
              </p>
              <p>
                Com atendimento prioritário em{' '}
                <strong className="text-brand-graphite">Feira de Santana - BA</strong>, estamos
                prontos para vestir sua fé com estilo e significado. Para outras cidades, o frete
                é por conta do cliente — consulte pelo WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
