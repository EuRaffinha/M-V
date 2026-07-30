/**
 * Utilitário para gerar links e mensagens do WhatsApp
 * Mensagens limpas, profissionais e prontas para o atendimento.
 */

import { siteConfig } from '../data/products'

/** Formata valor em Real (ex: 59.9 → "59,90") */
function formatPrice(value) {
  if (value == null || Number.isNaN(Number(value))) return ''
  return Number(value).toFixed(2).replace('.', ',')
}

/** Capitaliza a primeira letra (ex: feminina → Feminina) */
function capitalize(str = '') {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Gera URL do WhatsApp com mensagem opcional pré-preenchida.
 */
export function getWhatsAppUrl(message = '') {
  const phone = siteConfig.whatsapp
  const encoded = encodeURIComponent(message.trim())
  return `https://wa.me/${phone}${message ? `?text=${encoded}` : ''}`
}

/**
 * Mensagem de pedido de produto (página do produto ou card).
 * Quando o cliente escolhe tamanho, a mensagem fica completa.
 * Quando vem do card (sem tamanho), pede o tamanho no texto.
 */
export function getProductOrderMessage(product, size = '') {
  const color = product.colors?.length ? product.colors.join(', ') : ''
  const collection = product.collection ? capitalize(product.collection) : ''
  const hasSize = Boolean(size && String(size).trim())

  const lines = [
    'Olá! 👋',
    '',
    'Tenho interesse no modelo abaixo:',
    '',
    `*${product.name}*`,
  ]

  if (collection) {
    lines.push(`Coleção: ${collection}`)
  }
  if (color) {
    lines.push(`Cor: ${color}`)
  }

  if (hasSize) {
    lines.push(`Tamanho: *${size}*`)
  } else {
    lines.push('Tamanho: _(me ajude a escolher)_')
  }

  lines.push('')

  if (product.price != null) {
    lines.push(`💰 *PIX:* R$ ${formatPrice(product.price)}`)
  }
  if (product.priceCard != null) {
    lines.push(`💳 Cartão: R$ ${formatPrice(product.priceCard)} em até 3x sem juros`)
  }

  lines.push('')
  lines.push('Pode me confirmar disponibilidade e forma de entrega?')

  return lines.join('\n')
}

/**
 * Mensagem genérica de contato (Hero, CTA, botão flutuante, Footer).
 */
export function getContactMessage() {
  return [
    'Olá! 👋',
    '',
    `Gostaria de conhecer as camisetas da *${siteConfig.name}*.`,
    '',
    'Pode me enviar o catálogo e as formas de pedido?',
  ].join('\n')
}

/**
 * Mensagem rápida só para tirar dúvida de tamanho / cidade.
 */
export function getAvailabilityMessage(city = '') {
  const lines = [
    'Olá! 👋',
    '',
    'Quero confirmar disponibilidade antes de pedir.',
  ]
  if (city) {
    lines.push(`Cidade: *${city}*`)
  }
  lines.push('', 'Pode me ajudar?')
  return lines.join('\n')
}

/**
 * Abre o WhatsApp em nova aba.
 */
export function openWhatsApp(message = '') {
  const url = getWhatsAppUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
