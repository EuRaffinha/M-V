/**
 * Serviço de produtos (mock)
 * Em produção: conectar a API / CMS
 */

import { products, collections } from '../data/products'

export function getAllProducts() {
  return products
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getProductsByCollection(collectionSlug) {
  return products.filter((p) => p.collection === collectionSlug)
}

export function getCollectionBySlug(slug) {
  return collections.find((c) => c.slug === slug) || null
}

export function getAllCollections() {
  return collections
}

export function searchProducts(query) {
  const q = query.toLowerCase().trim()
  if (!q) return products
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.verse && p.verse.toLowerCase().includes(q))
  )
}
