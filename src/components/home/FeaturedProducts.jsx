import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ProductCard from '../products/ProductCard'
import { getFeaturedProducts } from '../../services/products'

export default function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 6)

  return (
    <section className="section-padding bg-brand-gray-light/50">
      <div className="container-custom">
        <SectionTitle title="Destaques" subtitle="Escolhidos com carinho" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/colecoes"
            className="btn-outline inline-flex"
          >
            Ver todas as coleções
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
