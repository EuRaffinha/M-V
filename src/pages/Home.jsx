import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import Benefits from '../components/home/Benefits'
import CollectionsSection from '../components/home/CollectionsSection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HowToBuy from '../components/home/HowToBuy'
import About from '../components/home/About'
import CTA from '../components/home/CTA'
import { siteConfig } from '../data/products'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.whatsappDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Feira de Santana',
    addressRegion: 'BA',
    addressCountry: 'BR',
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  sameAs: [siteConfig.instagram, siteConfig.facebook],
}

export default function Home() {
  return (
    <>
      <SEO schema={schema} />
      <Hero />
      <Benefits />
      <CollectionsSection />
      <FeaturedProducts />
      <HowToBuy />
      <About />
      <CTA />
    </>
  )
}
