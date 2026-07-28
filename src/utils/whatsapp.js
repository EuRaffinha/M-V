/**
 * Utilitário para gerar links e mensagens do WhatsApp
 */

import { siteConfig } from '../data/products'

export function getWhatsAppUrl(message = '') {
  const phone = siteConfig.whatsapp
  const encoded = encodeURIComponent(message.trim())
  return `https://wa.me/${phone}${message ? `?text=${encoded}` : ''}`
}

function capitalize(text) {
  return text
    ? text
        .split(/\s+/)
        .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    : ''
}

export function getProductOrderMessage(product, size = '') {
  const collectionName = capitalize(product.collection)
  const desiredSize = size || '_(me ajude a escolher)_'

  const lines = [
    'Olá!',
    '',
    'Tenho interesse no modelo abaixo:',
    `*${product.name}*`,
    `Coleção: ${collectionName}`,
  ]

  if (product.colors?.length) {
    lines.push(`Cor: ${product.colors.join(', ')}`)
  }

  lines.push(`Tamanho: ${desiredSize}`)

  if (product.price) {
    lines.push('', `*PIX:* R$ ${product.price.toFixed(2).replace('.', ',')}`)
  }

  if (product.priceCard) {
    lines.push(`Cartão: R$ ${product.priceCard.toFixed(2).replace('.', ',')} em até 3x sem juros`)
  }

  lines.push('', 'Pode me confirmar disponibilidade e forma de entrega?')
  return lines.join('\n')
}

export function getContactMessage() {
  return `Olá!\n\nGostaria de conhecer as camisetas da *M&V*.\n\nPode me enviar o catálogo e as formas de pedido?`
}

export function openWhatsApp(message = '') {
  const url = getWhatsAppUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
