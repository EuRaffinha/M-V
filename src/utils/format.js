/**
 * Formatação de valores e textos
 */

/**
 * Formata preço em Real brasileiro
 * @param {number} value
 * @returns {string}
 */
export function formatPrice(value) {
  if (value == null) return ''
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

/**
 * Capitaliza primeira letra
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Gera slug a partir de texto
 */
export function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}
