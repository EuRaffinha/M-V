# M&V

Landing page premium / micro e-commerce de moda cristã. Todas as vendas são realizadas via WhatsApp.

**Stack:** React 18 · Vite · TailwindCSS · Framer Motion · Lucide React · React Router · React Helmet Async · Swiper

---

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build de produção
npm run build

# 4. Preview do build
npm run preview
```

Abra [http://localhost:5173](http://localhost:5173).

---

## 📁 Estrutura

```
src/
├── assets/          # Imagens e ícones
├── components/
│   ├── common/      # SEO, WhatsApp float, ScrollToTop
│   ├── home/        # Seções da Home
│   ├── layout/      # Navbar, Footer
│   ├── products/    # ProductCard
│   └── ui/          # Button, Logo, SectionTitle
├── data/            # Produtos e config mockados
├── hooks/           # useScrollPosition, useMediaQuery
├── pages/           # Home, Collections, Category, Product, 404
├── services/        # Camada de dados
├── styles/          # Tailwind + CSS global
└── utils/           # WhatsApp, formatação
```

---

## ⚙️ Configuração importante

### WhatsApp

Edite em `src/data/products.js` → `siteConfig`:

```js
whatsapp: '557599909999',        // 55 + DDD + número
whatsappDisplay: '(75) 99909-9999',
```

### Redes sociais e SEO

Mesmo arquivo: `instagram`, `facebook`, `url`, etc.

---

## ✨ Funcionalidades

- Landing page de alta conversão (Hero → Benefícios → Coleções → Produtos → Como comprar → Sobre → CTA)
- Catálogo por coleção (Feminina, Masculina, Oversized)
- Página de produto com seleção de tamanho
- Botão "Pedir pelo WhatsApp" em todos os produtos (mensagem pré-preenchida)
- Navbar sticky com blur
- Botão flutuante WhatsApp
- SEO completo (meta, Open Graph, Schema.org, robots.txt, sitemap.xml)
- Animações suaves com Framer Motion
- 100% responsivo (mobile-first)
- Design clean inspirado em Insider / Reserva / Nike, adaptado para marca cristã

---

## 🎨 Identidade visual

| Cor        | Uso                          |
|------------|------------------------------|
| Azul       | Cor principal, títulos       |
| Rosa       | CTAs, detalhes, destaques    |
| Branco     | Fundo principal              |
| Cinza claro| Seções alternadas            |
| Grafite    | Textos                       |

---

## 📱 Atendimento

- Prioritário: **Feira de Santana - BA**
- Outras cidades: consultar frete/disponibilidade pelo WhatsApp
- Horário: Segunda a Sábado, 8h às 18h

---

## 📄 Licença

Projeto desenvolvido para M&V. Todos os direitos reservados.
