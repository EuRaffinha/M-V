import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ShoppingBag } from 'lucide-react'
import SEO from '../components/common/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" />
      <section className="section-padding flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <p className="text-8xl font-display font-bold text-brand-pink/20 mb-4">404</p>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-brand-graphite mb-3">
            Página não encontrada
          </h1>
          <p className="text-brand-graphite/60 mb-8">
            A página que você procura não existe ou foi movida. Que tal explorar nossas coleções?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Voltar ao início
            </Link>
            <Link to="/colecoes" className="btn-outline">
              <ShoppingBag className="w-4 h-4" />
              Ver coleções
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
