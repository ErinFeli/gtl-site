# 🎯 Guia de Otimizações e Melhorias - GTL

Este documento contém sugestões de otimizações, configurações adicionais e melhorias para o site da GTL Construções e Serviços.

## 📱 Configurações Recomendadas

### 1. Favicon e Ícones

Crie os seguintes arquivos na raiz do projeto:

**favicon.ico** (16x16, 32x32, 48x48)
**apple-touch-icon.png** (180x180)
**favicon-32x32.png** (32x32)
**favicon-16x16.png** (16x16)
**android-chrome-192x192.png** (192x192)
**android-chrome-512x512.png** (512x512)

Adicione no `<head>` do HTML:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
```

### 2. Manifest.json (PWA)

Crie um arquivo `site.webmanifest`:

```json
{
  "name": "GTL Construções e Serviços",
  "short_name": "GTL",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### 3. Robots.txt

Crie um arquivo `robots.txt` na raiz:

```txt
User-agent: *
Allow: /

Sitemap: https://gtlconstrucoeseservicos.com.br/sitemap.xml
```

### 4. Sitemap.xml

Crie um arquivo `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gtlconstrucoeseservicos.com.br/</loc>
    <lastmod>2026-03-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔍 SEO - Melhorias Adicionais

### Meta Tags Recomendadas

Adicione no `<head>` do HTML:

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://gtlconstrucoeseservicos.com.br/">
<meta property="og:title" content="GTL Construções e Serviços - Engenharia e Inovação">
<meta property="og:description" content="Líder em soluções de engenharia com excelência e inovação. Mais de 1500 obras realizadas em 50 cidades.">
<meta property="og:image" content="https://gtlconstrucoeseservicos.com.br/og-image.jpg">
<meta property="og:locale" content="pt_BR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://gtlconstrucoeseservicos.com.br/">
<meta name="twitter:title" content="GTL Construções e Serviços">
<meta name="twitter:description" content="Líder em soluções de engenharia com excelência e inovação">
<meta name="twitter:image" content="https://gtlconstrucoeseservicos.com.br/og-image.jpg">

<!-- Dados Estruturados (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GTL Construções e Serviços",
  "url": "https://gtlconstrucoeseservicos.com.br",
  "logo": "https://gtlconstrucoeseservicos.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-75-99876-0620",
    "contactType": "customer service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Francisca Gomes da Silva, 44",
    "addressLocality": "Natal",
    "addressRegion": "RN",
    "postalCode": "59073-193",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.facebook.com/gtl",
    "https://www.instagram.com/gtl"
  ]
}
</script>
```

## 🚀 Performance

### 1. Otimização de Imagens

**Recomendações:**
- Use WebP para imagens modernas
- Comprima todas as imagens (TinyPNG, Squoosh)
- Use imagens responsivas com `srcset`

Exemplo:
```html
<img 
  src="image-800.jpg" 
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="Descrição"
  loading="lazy"
>
```

### 2. Minificação

**Ferramentas recomendadas:**
- HTML: `html-minifier`
- CSS: `cssnano` ou `clean-css`
- JS: `terser` ou `uglify-js`

### 3. CDN

Considere usar um CDN para:
- Fontes do Google
- Imagens
- Assets estáticos

## 🔒 Segurança

### .htaccess (Apache)

Crie um arquivo `.htaccess`:

```apache
# Forçar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Segurança Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache de Arquivos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 📧 Integração com E-mail

### Configurar E-mail Marketing

**Sugestões de serviços:**
1. **Mailchimp** - Newsletter
2. **SendGrid** - Transacional
3. **RD Station** - Marketing

### Formulário com Backend

Se quiser enviar para e-mail ao invés de WhatsApp, use:

**Opção 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- campos do formulário -->
</form>
```

**Opção 2: PHPMailer**
Crie um arquivo `send-email.php`

## 📊 Analytics

### Google Analytics 4

Adicione antes do `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Tag Manager

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

### Meta Pixel (Facebook)

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 🎨 Recursos Adicionais

### Biblioteca de Ícones

**Font Awesome (CDN):**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Animações

**AOS (Animate On Scroll):**
```html
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>
```

### Carrossel

**Swiper.js:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```

## 🧪 Testes

### Checklist de Qualidade

- [ ] Teste em todos os navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Teste em dispositivos mobile (iOS e Android)
- [ ] Validar HTML (https://validator.w3.org/)
- [ ] Validar CSS (https://jigsaw.w3.org/css-validator/)
- [ ] Testar velocidade (https://pagespeed.web.dev/)
- [ ] Testar SEO (https://search.google.com/test/mobile-friendly)
- [ ] Verificar links quebrados
- [ ] Testar formulários
- [ ] Verificar HTTPS
- [ ] Testar compartilhamento social

## 🔄 Backup e Versionamento

### Git

```bash
git init
git add .
git commit -m "Initial commit - Site GTL"
git branch -M main
git remote add origin https://github.com/seu-usuario/gtl-site.git
git push -u origin main
```

### .gitignore

Crie um arquivo `.gitignore`:

```
# IDEs
.vscode/
.idea/
*.sublime-*

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Backup
*.bak
*.backup
```

## 📞 Suporte e Manutenção

### Monitoramento

**Ferramentas recomendadas:**
- **Uptime Robot** - Monitorar disponibilidade
- **Google Search Console** - Monitorar SEO
- **Hotjar** - Análise de comportamento

### Atualizações Regulares

- Revisar conteúdo mensalmente
- Atualizar imagens semestralmente
- Verificar links trimestralmente
- Backup semanal

---

**Última atualização:** 28 de Março de 2026