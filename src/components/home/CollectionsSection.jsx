import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { collections } from '../../data/products'

const colorMap = {
  pink: 'from-pink-500/20 to-pink-100/40',
  blue: 'from-blue-500/20 to-blue-100/40',
  graphite: 'from-gray-600/20 to-gray-200/40',
}

export default function CollectionsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle title="Nossas Coleções" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/colecoes/${col.slug}`}
                className="group block card-soft overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colorMap[col.color]} opacity-60 group-hover:opacity-40 transition-opacity`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-1">
                      {col.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2">
                      {col.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Ver coleção
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
  )
}
