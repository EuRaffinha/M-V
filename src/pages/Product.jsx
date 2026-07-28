import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Check } from 'lucide-react'
import SEO from '../components/common/SEO'
import ProductCard from '../components/products/ProductCard'
import { getProductBySlug, getProductsByCollection } from '../services/products'
import { formatPrice } from '../utils/format'
import { getWhatsAppUrl, getProductOrderMessage } from '../utils/whatsapp'

export default function Product() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedSize, setSelectedSize] = useState('')

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-graphite mb-4">Produto não encontrado</h1>
        <Link to="/colecoes" className="btn-outline">
          Ver coleções
        </Link>
      </div>
    )
  }

  const related = getProductsByCollection(product.collection)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const whatsappUrl = getWhatsAppUrl(getProductOrderMessage(product, selectedSize))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        url={`/produto/${slug}`}
        image={product.image}
        type="product"
        schema={schema}
      />

      <section className="section-padding !pt-8">
        <div className="container-custom">
          <Link
            to={`/colecoes/${product.collection}`}
            className="inline-flex items-center gap-2 text-sm text-brand-graphite/60 hover:text-brand-blue mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para coleção
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg bg-brand-gray"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.bestseller && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-brand-pink text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Mais vendido
                </span>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="text-sm text-brand-pink font-medium uppercase tracking-wider mb-2">
                Coleção {product.collection}
              </p>
              <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-brand-graphite mb-3">
                {product.name}
              </h1>

              {product.verse && (
                <p className="text-brand-blue font-medium text-sm mb-4">{product.verse}</p>
              )}

              <div className="mb-6 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-brand-graphite">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm font-semibold text-green-600 uppercase">no PIX</span>
                </div>
                {product.priceCard && (
                  <p className="text-sm text-brand-gray-medium">
                    ou {formatPrice(product.priceCard)} em até 3x sem juros no cartão
                  </p>
                )}
              </div>

              <p className="text-brand-graphite/70 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Sizes */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-graphite mb-3">
                  Selecione o tamanho
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl border-2 font-semibold text-sm transition-all ${
                        selectedSize === size
                          ? 'border-brand-pink bg-brand-pink text-white'
                          : 'border-gray-200 text-brand-graphite hover:border-brand-pink/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="mb-8">
                  <p className="text-sm font-semibold text-brand-graphite mb-2">Cores</p>
                  <p className="text-sm text-brand-graphite/70">{product.colors.join(' · ')}</p>
                </div>
              )}

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 w-full sm:w-auto sm:self-start"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir pelo WhatsApp
              </a>

              <ul className="mt-8 space-y-2">
                {[
                  'Malha premium selecionada',
                  'Estampa de alta qualidade',
                  'Pedido e atendimento via WhatsApp',
                  'Entrega em Feira de Santana - BA',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-graphite/70">
                    <Check className="w-4 h-4 text-brand-pink shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display font-bold text-2xl text-brand-graphite mb-8 text-center">
                Você também pode gostar
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
