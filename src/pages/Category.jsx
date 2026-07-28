import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/common/SEO'
import ProductCard from '../components/products/ProductCard'
import { getCollectionBySlug, getProductsByCollection } from '../services/products'

export default function Category() {
  const { slug } = useParams()
  const collection = getCollectionBySlug(slug)
  const products = getProductsByCollection(slug)

  if (!collection) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-graphite mb-4">Coleção não encontrada</h1>
        <Link to="/colecoes" className="btn-outline">
          Ver coleções
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`Coleção ${collection.name}`}
        description={collection.description}
        url={`/colecoes/${slug}`}
        image={collection.image}
      />

      {/* Banner */}
      <section className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2"
          >
            {collection.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/80 text-sm md:text-base max-w-md"
          >
            {collection.description}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Link
            to="/colecoes"
            className="inline-flex items-center gap-2 text-sm text-brand-graphite/60 hover:text-brand-blue mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas as coleções
          </Link>

          {products.length === 0 ? (
            <p className="text-center text-brand-graphite/60 py-12">
              Em breve novos modelos nesta coleção.
            </p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
