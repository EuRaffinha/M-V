import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/common/SEO'
import SectionTitle from '../components/ui/SectionTitle'
import { getAllCollections } from '../services/products'

const colorMap = {
  pink: 'bg-brand-pink',
  blue: 'bg-brand-blue',
  graphite: 'bg-brand-graphite',
}

export default function Collections() {
  const collections = getAllCollections()

  return (
    <>
      <SEO
        title="Coleções"
        description="Explore nossas coleções de camisetas cristãs: Feminina, Masculina e Oversized. Moda com propósito em Feira de Santana - BA."
        url="/colecoes"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Todas as Coleções"
            subtitle="Vista sua fé com estilo"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((col, index) => (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/colecoes/${col.slug}`}
                  className="group block card-soft overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={col.image}
                      alt={col.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${colorMap[col.color]}`}
                      >
                        Coleção
                      </span>
                      <h2 className="font-display font-bold text-2xl mb-2">{col.name}</h2>
                      <p className="text-sm text-white/80 mb-4">{col.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                        Explorar
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
