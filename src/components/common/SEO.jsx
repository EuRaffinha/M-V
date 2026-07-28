import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/products'

export default function SEO({
  title,
  description = siteConfig.description,
  image = `${siteConfig.url}/og-image.jpg`,
  url,
  type = 'website',
  schema,
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Vista sua Fé. Compartilhe Esperança.`

  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}

      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  )
}
