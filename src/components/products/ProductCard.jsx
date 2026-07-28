import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { formatPrice } from '../../utils/format'
import { getWhatsAppUrl, getProductOrderMessage } from '../../utils/whatsapp'

export default function ProductCard({ product, index = 0 }) {
  const whatsappUrl = getWhatsAppUrl(getProductOrderMessage(product))

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group card-soft flex flex-col"
    >
      <Link to={`/produto/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Mais vendido
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link to={`/produto/${product.slug}`}>
          <h3 className="font-semibold text-brand-graphite text-sm md:text-base line-clamp-2 group-hover:text-brand-blue transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.colors?.length > 0 && (
          <p className="text-xs text-brand-gray-medium mt-1">{product.colors.join(' · ')}</p>
        )}

        {product.verse && (
          <p className="text-xs text-brand-pink/80 mt-1 font-medium">{product.verse}</p>
        )}

        <div className="mt-2 space-y-0.5">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-brand-graphite text-lg">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] font-semibold text-green-600 uppercase">no PIX</span>
          </div>
          {product.priceCard && (
            <p className="text-xs text-brand-gray-medium">
              ou {formatPrice(product.priceCard)} em até 3x s/ juros
            </p>
          )}
        </div>

        <p className="text-xs text-brand-gray-medium mt-1">
          Tamanhos: {product.sizes.join(' · ')}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 
                     bg-brand-pink/10 text-brand-pink font-semibold text-sm rounded-full
                     hover:bg-brand-pink hover:text-white transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle className="w-4 h-4" />
          Pedir pelo WhatsApp
        </a>
      </div>
    </motion.article>
  )
}
