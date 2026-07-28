import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, getContactMessage } from '../../utils/whatsapp'

/**
 * Hero – layout fiel ao mockup premium:
 * texto à esquerda + mascote oficial + 3 camisetas estilizadas sobre base circular
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-white to-white pt-6 pb-14 md:pt-10 md:pb-20">
      {/* Fundo decorativo */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Coração grande ao fundo (como no mockup) */}
      <div className="absolute right-[5%] top-[8%] w-40 h-40 md:w-64 md:h-64 opacity-[0.12] pointer-events-none hidden sm:block">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path
            d="M50 18 C32 4 8 18 8 45 C8 72 50 95 50 95 C50 95 92 72 92 45 C92 18 68 4 50 18"
            stroke="#EC4899"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ========== TEXTO ========== */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-brand-pink/25 text-brand-pink text-[11px] font-semibold uppercase tracking-wider shadow-sm mb-5"
            >
              Moda Cristã com Propósito
            </motion.span>

            <h1 className="font-display font-extrabold text-[2.35rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-brand-graphite mb-4">
              Vista sua Fé.
              <br />
              <span className="text-brand-pink">Compartilhe</span>
              <br />
              <span className="text-brand-blue">Esperança!</span>
            </h1>

            <p className="text-brand-graphite/65 text-[15px] md:text-base max-w-md mx-auto lg:mx-0 mb-5 leading-relaxed">
              Camisetas cristãs premium 100% algodão para quem deseja vestir sua fé com propósito todos os dias.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-7 text-[13px] text-brand-graphite/55">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                Atendimento em Feira de Santana - BA
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                Pedido 100% pelo WhatsApp
              </span>
            </div>

            <motion.a
              href={getWhatsAppUrl(getContactMessage())}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-[15px] px-8 py-3.5 shadow-pink-glow inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Fazer meu pedido
            </motion.a>
          </motion.div>

          {/* ========== VISUAL: mascote + 3 camisetas + base ========== */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative flex justify-center items-end min-h-[340px] sm:min-h-[380px] md:min-h-[420px] order-1 lg:order-2"
          >
            {/* Base circular rosa suave (plataforma do mockup) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] h-16 sm:h-20 rounded-[50%] bg-gradient-to-b from-pink-100/90 to-pink-50/40 shadow-[0_8px_30px_rgba(236,72,153,0.12)]" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] max-w-[300px] h-6 rounded-[50%] bg-pink-200/30 blur-md" />

            {/* Grupo: mascote + camisetas */}
            <div className="relative z-10 flex items-end justify-center w-full max-w-[460px] pb-4">
              {/* Mascote oficial – à esquerda, na frente */}
              <motion.img
                src="/images/mascot-vagner.png"
                alt="Vagner Queiroz – M&V"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-30 w-[130px] sm:w-[155px] md:w-[175px] h-auto object-contain drop-shadow-xl -mr-4 sm:-mr-6 mb-0 self-end"
                loading="eager"
              />

              {/* Três camisetas estilizadas (como no mockup) */}
              <div className="relative flex items-end gap-1.5 sm:gap-2.5 z-20 pb-1">
                {/* Camiseta preta – EU SOU ESCOLHIDO */}
                <motion.div
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.38, duration: 0.45 }}
                  className="w-[72px] sm:w-[92px] md:w-[110px] aspect-[3/4] rounded-xl sm:rounded-2xl bg-[#1a1a1a] shadow-lg flex flex-col items-center justify-center px-1.5 sm:px-2 border border-gray-800"
                >
                  <span className="text-yellow-400 text-base sm:text-lg mb-0.5">✝</span>
                  <p className="text-white text-center text-[7px] sm:text-[9px] md:text-[10px] font-bold leading-[1.15] tracking-wide uppercase">
                    Eu Sou
                    <br />
                    Escolhido
                  </p>
                  <p className="text-yellow-400/70 text-[5px] sm:text-[6px] md:text-[7px] mt-1 tracking-wider">
                    1 PEDRO 2:9
                  </p>
                </motion.div>

                {/* Camiseta rosa – Deus é bom (destaque, um pouco maior/elevada) */}
                <motion.div
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.46, duration: 0.45 }}
                  className="w-[82px] sm:w-[105px] md:w-[125px] aspect-[3/4] rounded-xl sm:rounded-2xl bg-[#F472B6] shadow-xl flex flex-col items-center justify-center px-2 -mb-3 sm:-mb-4 border border-pink-300/30"
                >
                  <p className="text-white text-center text-[8px] sm:text-[10px] md:text-[11px] font-semibold leading-snug">
                    Deus é
                    <br />
                    bom
                    <br />
                    o tempo
                    <br />
                    todo <span className="text-pink-100">♥</span>
                  </p>
                </motion.div>

                {/* Camiseta branca – Fé acima de tudo */}
                <motion.div
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.54, duration: 0.45 }}
                  className="w-[72px] sm:w-[92px] md:w-[110px] aspect-[3/4] rounded-xl sm:rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center px-1.5 sm:px-2 border border-gray-100"
                >
                  <p className="text-brand-graphite text-center text-[8px] sm:text-[10px] md:text-[11px] font-bold leading-snug">
                    Fé
                    <br />
                    acima
                    <br />
                    de tudo
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
