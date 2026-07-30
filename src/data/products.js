/**
 * Catálogo M&V – organizado por coleção
 * Fontes: Feminina.pdf · Masculina.pdf · Oversize.pdf
 * Preços: PIX (principal) e cartão (até 3x)
 * Imagens: /images/products/{colecao}/{slug}.webp
 */

export const collections = [
  {
    id: 'feminina',
    name: 'Feminina',
    slug: 'feminina',
    description: 'Modelos baby look feitos para elas brilharem na fé!',
    image: '/images/products/feminina/gratidao-off-white.webp',
    color: 'pink',
  },
  {
    id: 'masculina',
    name: 'Masculina',
    slug: 'masculina',
    description: 'Estilo e identidade que transmitem propósito!',
    image: '/images/products/masculina/faith-over-fear-preta.webp',
    color: 'blue',
  },
  {
    id: 'oversized',
    name: 'Oversized',
    slug: 'oversized',
    description: 'Conforto unissex com atitude e mensagem!',
    image: '/images/products/oversized/choro-dura-uma-noite-preta.webp',
    color: 'graphite',
  },
]

export const sizeCharts = {
  feminina: ['P', 'M', 'G', 'GG', 'G1', 'G2'],
  masculina: ['P', 'M', 'G', 'GG', 'G1', 'G2'],
  oversized: ['PP', 'P', 'M', 'G', 'GG'],
}

export const products = [
  { id: 1, name: 'Gratidão!', slug: 'gratidao-off-white', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['P'], colors: ['Off White'], image: '/images/products/feminina/gratidao-off-white.webp', description: 'Camiseta feminina Off White com estampa "Gratidão!". 100% algodão.', featured: true, bestseller: true },
  { id: 2, name: 'Deus é Muito Maior', slug: 'deus-muito-maior-marrom', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/feminina/deus-muito-maior-marrom.webp', description: 'Camiseta feminina marrom com estampa colorida "Deus é muito maior do que...".', featured: true, bestseller: true },
  { id: 3, name: 'Deus é Muito Maior', slug: 'deus-muito-maior-branca', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G1'], colors: ['Vinho'], image: '/images/products/feminina/deus-muito-maior-branca.webp', description: 'Camiseta feminina branca com estampa colorida "Deus é muito maior do que...".', featured: false, bestseller: false },
  { id: 4, name: 'Deus é Muito Maior', slug: 'deus-muito-maior-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G'], colors: ['Preto'], image: '/images/products/feminina/deus-muito-maior-preta.webp', description: 'Camiseta feminina preta com estampa colorida "Deus é muito maior do que...".', featured: false, bestseller: false },
  { id: 5, name: 'Deus é Muito Maior', slug: 'deus-muito-maior-turquesa', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['P'], colors: ['Azul Turquesa'], image: '/images/products/feminina/deus-muito-maior-turquesa.webp', description: 'Camiseta feminina azul/turquesa com estampa colorida "Deus é muito maior do que...".', featured: true, bestseller: false },
  { id: 6, name: 'Seja Luz', slug: 'seja-luz-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G', 'GG'], colors: ['Preto'], image: '/images/products/feminina/seja-luz-preta.webp', description: 'Camiseta feminina preta com lettering "Seja Luz".', featured: true, bestseller: true },
  { id: 7, name: 'Feliz a Nação', slug: 'feliz-a-nacao-azul', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G2'], colors: ['Azul'], image: '/images/products/feminina/feliz-a-nacao-azul.webp', description: 'Camiseta feminina "Feliz a nação cujo Deus é o Senhor".', featured: false, bestseller: false },
  { id: 8, name: 'Batimento Coração', slug: 'batimento-coracao-marrom', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G'], colors: ['Marrom'], image: '/images/products/feminina/batimento-coracao-marrom.webp', description: 'Camiseta feminina marrom com batimento, coração e cruz em foil dourado.', featured: true, bestseller: false },
  { id: 9, name: 'Ninguém Explica Deus', slug: 'ninguem-explica-deus-preta-fem', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G'], colors: ['Preto'], image: '/images/products/feminina/ninguem-explica-deus-preta-fem.webp', description: 'Camiseta feminina preta "NINGUÉM EXPLICA DEUS".', featured: true, bestseller: true },
  { id: 10, name: 'Árvore de Coração', slug: 'arvore-de-coracao-branca', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG', 'G1'], colors: ['Branco'], image: '/images/products/feminina/arvore-de-coracao-branca.webp', description: 'Camiseta feminina branca com árvore colorida em formato de coração.', featured: false, bestseller: false },
  { id: 11, name: 'Cruz Coração Minimalista', slug: 'cruz-coracao-minimalista-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG', 'G1'], colors: ['Preto'], image: '/images/products/feminina/cruz-coracao-minimalista-preta.webp', description: 'Camiseta feminina preta com cruz e coração em foil dourado.', featured: true, bestseller: false },
  { id: 12, name: 'Calma, Confia.', slug: 'calma-confia-off-white', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Off White'], image: '/images/products/feminina/calma-confia-off-white.webp', description: 'Camiseta feminina Off White "CALMA, CONFIA.".', featured: false, bestseller: false },
  { id: 13, name: 'Cruz Dourada Jesus Cristo', slug: 'cruz-dourada-jesus-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['GG'], colors: ['Preto'], image: '/images/products/feminina/cruz-dourada-jesus-preta.webp', description: 'Camiseta feminina preta com cruz vertical e "JESUS" em foil dourado.', featured: false, bestseller: false },
  { id: 14, name: 'Leão Colorido', slug: 'leao-colorido-preta-fem', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['GG', 'G1'], colors: ['Preto'], image: '/images/products/feminina/leao-colorido-preta-fem.webp', description: 'Camiseta feminina preta com leão em aquarela colorida.', featured: true, bestseller: true },
  { id: 15, name: 'Jesus no Coração', slug: 'jesus-no-coracao-off-white', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['P', 'G'], colors: ['Off White'], image: '/images/products/feminina/jesus-no-coracao-off-white.webp', description: 'Camiseta feminina Off White "É feliz quem tem Jesus no coração".', featured: false, bestseller: false },
  { id: 16, name: 'Forte e Corajosa', slug: 'forte-e-corajosa-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto'], image: '/images/products/feminina/forte-e-corajosa-preta.webp', description: 'Camiseta feminina preta "FORTE & CORAJOSA".', featured: true, bestseller: false },
  { id: 17, name: 'Jesus & Coffee', slug: 'jesus-coffee-off-white', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Off White'], image: '/images/products/feminina/jesus-coffee-off-white.webp', description: 'Camiseta feminina Off White "JESUS + COFFEE".', featured: false, bestseller: false },
  { id: 18, name: 'Batimento Coração Dourado', slug: 'batimento-coracao-dourado-preta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G1'], colors: ['Preto'], image: '/images/products/feminina/batimento-coracao-dourado-preta.webp', description: 'Camiseta feminina com batimento e coração em foil dourado.', featured: false, bestseller: false },
  { id: 19, name: 'Eu Sou Filha de Deus', slug: 'eu-sou-filha-de-deus-marrom', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['P', 'M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/feminina/eu-sou-filha-de-deus-marrom.webp', description: 'Camiseta feminina marrom "Eu sou filha de Deus".', featured: true, bestseller: false },
  { id: 20, name: 'Jesus Lives In Me', slug: 'jesus-lives-in-me-rosa', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Rosa'], image: '/images/products/feminina/jesus-lives-in-me-rosa.webp', description: 'Camiseta feminina rosa "JESUS lives in me".', featured: true, bestseller: false },
  { id: 21, name: 'Quem Planta Fé', slug: 'quem-planta-fe-marrom', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/feminina/quem-planta-fe-marrom.webp', description: 'Camiseta feminina marrom "Quem planta fé, colhe milagres".', featured: true, bestseller: true },
  { id: 22, name: 'Batimento Coração Pink', slug: 'batimento-coracao-pink', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G'], colors: ['Rosa Pink'], image: '/images/products/feminina/batimento-coracao-pink.webp', description: 'Camiseta feminina pink com batimento e coração em foil.', featured: false, bestseller: false },
  { id: 23, name: 'Jesus Lives In Me Pink', slug: 'jesus-lives-in-me-pink', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G'], colors: ['Rosa Pink'], image: '/images/products/feminina/jesus-lives-in-me-pink.webp', description: 'Camiseta feminina "JESUS lives in me".', featured: false, bestseller: false },
  { id: 24, name: 'Jesus & Coffee Verde Menta', slug: 'jesus-coffee-verde-menta', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M', 'G', 'GG'], colors: ['Verde Menta'], image: '/images/products/feminina/jesus-coffee-verde-menta.webp', description: 'Camiseta feminina verde menta "JESUS + COFFEE".', featured: false, bestseller: false },
  { id: 25, name: 'Seja Sua Melhor Versão', slug: 'seja-sua-melhor-versao-pink', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['M'], colors: ['Rosa Pink'], image: '/images/products/feminina/seja-sua-melhor-versao-pink.webp', description: 'Camiseta feminina pink "Seja sua melhor versão".', featured: false, bestseller: false },
  { id: 26, name: 'Cruz Prata Jesus Cristo', slug: 'cruz-prata-jesus-verde', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['GG', 'G1'], colors: ['Verde Menta'], image: '/images/products/feminina/cruz-prata-jesus-verde.webp', description: 'Camiseta feminina com cruz vertical minimalista.', featured: false, bestseller: false },
  { id: 27, name: 'Quem Planta Fé Vermelha', slug: 'quem-planta-fe-vermelha', price: 59.9, priceCard: 69.9, collection: 'feminina', category: 'feminina', sizes: ['G2'], colors: ['Vermelho'], image: '/images/products/feminina/quem-planta-fe-vermelha.webp', description: 'Camiseta feminina vermelha "Quem planta fé, colhe milagres".', featured: false, bestseller: false },
  { id: 28, name: 'Lisa Azul', slug: 'lisa-azul-masculina', price: 49.9, priceCard: 59.9, collection: 'masculina', category: 'masculina', sizes: ['P', 'M'], colors: ['Azul'], image: '/images/products/masculina/lisa-azul-masculina.webp', description: 'Camiseta masculina azul lisa / "Quem já foi comprado não se vende".', featured: false, bestseller: false },
  { id: 29, name: 'Faith Over Fear', slug: 'faith-over-fear-preta', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G', 'GG'], colors: ['Preto'], image: '/images/products/masculina/faith-over-fear-preta.webp', description: 'Camiseta masculina preta "FAITH OVER FEAR".', featured: true, bestseller: true },
  { id: 30, name: 'Leão Colorido', slug: 'leao-colorido-preta-masc', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Preto'], image: '/images/products/masculina/leao-colorido-preta-masc.webp', description: 'Camiseta masculina preta com leão colorido.', featured: true, bestseller: true },
  { id: 31, name: 'Leão He Is Risen', slug: 'leao-he-is-risen-off-white', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['G'], colors: ['Off White'], image: '/images/products/masculina/leao-he-is-risen-off-white.webp', description: 'Camiseta masculina Off White com leão "He is risen".', featured: false, bestseller: false },
  { id: 32, name: 'Senhor dos Exércitos', slug: 'senhor-dos-exercitos-preta', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Preto'], image: '/images/products/masculina/senhor-dos-exercitos-preta.webp', description: 'Camiseta masculina preta "Senhor dos Exércitos".', featured: true, bestseller: false },
  { id: 33, name: 'Holy Holy Holy', slug: 'holy-holy-holy-vermelha', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Vermelho'], image: '/images/products/masculina/holy-holy-holy-vermelha.webp', description: 'Camiseta masculina vermelha "HOLY HOLY HOLY".', featured: true, bestseller: false },
  { id: 34, name: 'Jesus Lives In Me', slug: 'jesus-lives-in-me-preta-masc', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['G'], colors: ['Preto'], image: '/images/products/masculina/jesus-lives-in-me-preta-masc.webp', description: 'Camiseta masculina preta "JESUS lives in me".', featured: true, bestseller: true },
  { id: 35, name: 'Jesus Cristo King', slug: 'jesus-cristo-king-azul', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M'], colors: ['Azul'], image: '/images/products/masculina/jesus-cristo-king-azul.webp', description: 'Camiseta masculina azul "JESUS CRISTO KING".', featured: false, bestseller: false },
  { id: 36, name: 'Jesus Logo Circular', slug: 'jesus-logo-circular-preta', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Preto'], image: '/images/products/masculina/jesus-logo-circular-preta.webp', description: 'Camiseta masculina preta com logo circular "JESUS".', featured: false, bestseller: false },
  { id: 37, name: 'Escudo da Fé', slug: 'escudo-da-fe-off-white', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Off White'], image: '/images/products/masculina/escudo-da-fe-off-white.webp', description: 'Camiseta masculina Off White "Quem já foi comprado não se vende".', featured: false, bestseller: false },
  { id: 38, name: 'Holy Jesus Lives In Me', slug: 'holy-jesus-lives-in-me-marrom', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Marrom'], image: '/images/products/masculina/holy-jesus-lives-in-me-marrom.webp', description: 'Camiseta masculina marrom "HOLY JESUS LIVES IN ME".', featured: false, bestseller: false },
  { id: 39, name: 'Aplique Direção Jesus', slug: 'aplique-direcao-jesus-off-white', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Off White'], image: '/images/products/masculina/aplique-direcao-jesus-off-white.webp', description: 'Camiseta masculina Off White "Quem já foi comprado não se vende".', featured: false, bestseller: false },
  { id: 40, name: 'Ninguém Explica Deus', slug: 'ninguem-explica-deus-preta-masc', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Preto'], image: '/images/products/masculina/ninguem-explica-deus-preta-masc.webp', description: 'Camiseta masculina preta "NINGUÉM EXPLICA DEUS".', featured: true, bestseller: false },
  { id: 41, name: 'Ele Vive Em Nós', slug: 'ele-vive-em-nos-marrom', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/masculina/ele-vive-em-nos-marrom.webp', description: 'Camiseta masculina marrom "ELE VIVE Em Nós".', featured: true, bestseller: false },
  { id: 42, name: 'Ele Vive Em Nós', slug: 'ele-vive-em-nos-preta', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Preto'], image: '/images/products/masculina/ele-vive-em-nos-preta.webp', description: 'Camiseta masculina preta "ELE VIVE Em Nós".', featured: false, bestseller: false },
  { id: 43, name: 'O Justo Viverá Pela Fé', slug: 'o-justo-vivera-pela-fe-marrom', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Marrom'], image: '/images/products/masculina/o-justo-vivera-pela-fe-marrom.webp', description: 'Camiseta masculina marrom "O JUSTO VIVERÁ PELA FÉ".', featured: false, bestseller: false },
  { id: 44, name: 'Holy Jesus Lives In Me Preta', slug: 'holy-jesus-lives-in-me-preta', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M'], colors: ['Preto'], image: '/images/products/masculina/holy-jesus-lives-in-me-preta.webp', description: 'Camiseta masculina preta "HOLY JESUS LIVES IN ME".', featured: false, bestseller: false },
  { id: 45, name: 'Direção Jesus', slug: 'direcao-jesus-marrom', price: 59.9, priceCard: 69.9, collection: 'masculina', category: 'masculina', sizes: ['M', 'G'], colors: ['Marrom'], image: '/images/products/masculina/direcao-jesus-marrom.webp', description: 'Camiseta masculina marrom com aplique "JESUS".', featured: false, bestseller: false },
  { id: 46, name: 'O Choro Dura Uma Noite', slug: 'choro-dura-uma-noite-preta', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['M', 'G', 'GG'], colors: ['Preto'], image: '/images/products/oversized/choro-dura-uma-noite-preta.webp', description: 'Oversized preta "O choro pode durar uma noite, mas a alegria vem pela manhã".', featured: true, bestseller: true },
  { id: 47, name: 'O Choro Dura Uma Noite', slug: 'choro-dura-uma-noite-marrom', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['G'], colors: ['Marrom'], image: '/images/products/oversized/choro-dura-uma-noite-marrom.webp', description: 'Oversized marrom "O choro pode durar uma noite, mas a alegria vem pela manhã".', featured: true, bestseller: false },
  { id: 48, name: 'Jesus Loves You', slug: 'jesus-loves-you-preta', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['P', 'M', 'G'], colors: ['Preto'], image: '/images/products/oversized/jesus-loves-you-preta.webp', description: 'Oversized preta com coração "JESUS LOVES YOU".', featured: true, bestseller: true },
  { id: 49, name: 'God Is Good All The Time', slug: 'god-is-good-all-the-time-marrom', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/oversized/god-is-good-all-the-time-marrom.webp', description: 'Oversized "GOD IS GOOD ALL THE TIME".', featured: true, bestseller: false },
  { id: 50, name: 'A Luz do Mundo', slug: 'a-luz-do-mundo-preta', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['M', 'G', 'GG'], colors: ['Preto'], image: '/images/products/oversized/a-luz-do-mundo-preta.webp', description: 'Oversized preta "A Luz do Mundo".', featured: true, bestseller: false },
  { id: 51, name: 'Jesus é o Caminho', slug: 'jesus-e-o-caminho-marrom', price: 99.9, priceCard: 109.9, collection: 'oversized', category: 'oversized', sizes: ['M', 'G', 'GG'], colors: ['Marrom'], image: '/images/products/oversized/jesus-e-o-caminho-marrom.webp', description: 'Oversized marrom "JESUS É O CAMINHO".', featured: true, bestseller: false },
]

export const siteConfig = {
  name: 'M&V',
  fullName: 'M&V',
  description:
    'Camisetas cristãs premium 100% algodão. Vista sua fé e compartilhe esperança. Atendimento em Feira de Santana - BA pelo WhatsApp.',
  url: 'https://mvgospelwear.com.br',
  whatsapp: '557591421714',
  whatsappDisplay: '(75) 9142-1714',
  address: 'Feira de Santana - BA',
  hours: 'Segunda a sábado',
  instagram: 'https://www.instagram.com/vagner_camisas_store/',
  instagramHandle: '@vagner_camisas_store',
  facebook: 'https://facebook.com/mvgospelwear',
}

export const benefits = [
  {
    id: 1,
    icon: 'Shirt',
    title: 'Qualidade Premium',
    description: 'Malha 100% algodão selecionada e acabamento perfeito',
  },
  {
    id: 2,
    icon: 'Cross',
    title: 'Estampas Cristãs',
    description: 'Mensagens que inspiram e edificam',
  },
  {
    id: 3,
    icon: 'MapPin',
    title: 'Atendimento Local',
    description: 'Foco em Feira de Santana - BA e região',
  },
  {
    id: 4,
    icon: 'MessageCircle',
    title: 'Pedido pelo WhatsApp',
    description: 'Fale com a gente e faça seu pedido',
  },
]

export const howToBuySteps = [
  {
    id: 1,
    icon: 'Smartphone',
    title: 'Escolha o modelo',
    description: 'Navegue pelo site e escolha sua camiseta favorita',
  },
  {
    id: 2,
    icon: 'MessageCircle',
    title: 'Chame no WhatsApp',
    description: 'Clique em pedir e envie o modelo + tamanho',
  },
  {
    id: 3,
    icon: 'MessagesSquare',
    title: 'Confirme o pedido',
    description: 'Combinamos pagamento (PIX ou cartão) e entrega',
  },
  {
    id: 4,
    icon: 'Bike',
    title: 'Receba em casa',
    description: 'Entrega em Feira de Santana ou envio para outras cidades',
  },
]
