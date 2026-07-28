import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/common/WhatsAppFloat'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Category from './pages/Category'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/colecoes" element={<Collections />} />
            <Route path="/colecoes/:slug" element={<Category />} />
            <Route path="/produto/:slug" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
