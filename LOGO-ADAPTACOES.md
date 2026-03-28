# 🎨 Guia de Adaptação do Logo GTL

Instruções para otimizar e adaptar o logo da GTL Construções e Serviços.

## 📄 Logo Atual

**Arquivo:** `GTLlogo.png`  
**Problema:** Fundo branco que pode causar problemas em fundos escuros

## ✅ Solução Implementada

O código já foi adaptado para usar o logo com as seguintes otimizações:

### CSS Aplicado:
```css
.logo img {
    height: 50px;
    mix-blend-mode: multiply; /* Remove fundo branco automaticamente */
}
```

**`mix-blend-mode: multiply`** - Remove automaticamente fundos brancos quando o header tem fundo claro.

## 🔧 Opções de Otimização do Logo

### Opção 1: Remover Fundo Branco Online (Recomendado)

Use ferramentas gratuitas para remover o fundo:

1. **Remove.bg** (Automático)
   - https://www.remove.bg/
   - Upload GTLlogo.png
   - Download da versão sem fundo
   - Salve como: `GTLlogo.png` (substituir o atual)

2. **Photopea** (Editor online tipo Photoshop)
   - https://www.photopea.com/
   - Abra GTLlogo.png
   - Use a ferramenta "Magic Wand" no fundo branco
   - Delete o fundo
   - File → Export As → PNG
   - ✅ Marque "Transparency"

3. **Canva** (Se tiver conta)
   - https://www.canva.com/
   - Upload da imagem
   - Use "Background Remover"
   - Download como PNG

### Opção 2: Criar Logo Vetorial (SVG)

**Vantagens:**
- ✅ Escalável (sem perda de qualidade)
- ✅ Tamanho de arquivo menor
- ✅ Cores editáveis via CSS
- ✅ Sem problema de fundo

**Como converter PNG para SVG:**

1. **Vectorizer.ai** (Automático)
   - https://vectorizer.ai/
   - Upload GTLlogo.png
   - Download do arquivo SVG

2. **Inkscape** (Software gratuito)
   - https://inkscape.org/
   - Abra GTLlogo.png
   - Path → Trace Bitmap
   - Ajuste e exporte como SVG

**Depois de ter o SVG:**

Substitua no HTML:
```html
<a href="#inicio" class="logo">
    <img src="GTLlogo.svg" alt="GTL Construções e Serviços">
</a>
```

### Opção 3: CSS Avançado para Diferentes Fundos

Se você precisa usar o logo em fundos escuros também, adicione ao CSS:

```css
/* Logo padrão para fundos claros */
.logo img {
    height: 50px;
    width: auto;
    max-width: 200px;
    object-fit: contain;
    transition: var(--transition);
}

/* Para fundos claros - remove branco */
.header .logo img {
    mix-blend-mode: multiply;
}

/* Para fundos escuros - inverte ou usa versão alternativa */
.footer .logo img,
.dark-section .logo img {
    mix-blend-mode: normal;
    filter: brightness(0) invert(1); /* Inverte as cores */
}
```

### Opção 4: Ter Duas Versões do Logo

**Estrutura:**
```
GTL/
├── GTLlogo.png          # Versão original (fundo branco)
├── GTLlogo-dark.png     # Versão para fundos escuros
└── GTLlogo-transp.png   # Versão sem fundo (transparente)
```

**HTML:**
```html
<!-- Para header (fundo claro) -->
<a href="#inicio" class="logo">
    <img src="GTLlogo.png" alt="GTL Construções e Serviços" class="logo-light">
    <img src="GTLlogo-dark.png" alt="GTL Construções e Serviços" class="logo-dark">
</a>
```

**CSS:**
```css
.logo-dark {
    display: none;
}

/* Em seções escuras */
.dark-section .logo-light {
    display: none;
}

.dark-section .logo-dark {
    display: block;
}
```

## 📐 Otimização de Tamanho/Qualidade

### Comprimir PNG

**TinyPNG** (Recomendado)
- https://tinypng.com/
- Reduz até 70% sem perda visível de qualidade
- Upload GTLlogo.png
- Download da versão otimizada

**Squoosh** (Controle manual)
- https://squoosh.app/
- Escolha o nível de compressão
- Compare antes/depois

### Dimensões Recomendadas

Para melhor performance:

**PNG:**
- Largura: 400-600px
- Altura: 100-200px
- Resolução: 144 DPI (para telas Retina)

**SVG:**
- ViewBox ajustável
- Sem limite de tamanho

## 🎯 Implementação no Site

### Tamanhos Responsivos Atuais:

```css
/* Desktop */
.logo img {
    height: 50px;
}

/* Mobile */
@media (max-width: 768px) {
    .logo img {
        height: 40px;
    }
}

/* Com scroll */
.header.scrolled .logo img {
    height: 40px;
}
```

### Para Ajustar Tamanhos:

Edite no arquivo `css/styles.css` os valores de `height`:

```css
.logo img {
    height: 60px; /* Aumente ou diminua conforme necessário */
    max-width: 250px;
}
```

## 🔍 Verificar Qualidade

Após otimizar, verifique:

- [ ] Logo aparece nítido em telas normais
- [ ] Logo aparece nítido em telas Retina (Mac, iPhone)
- [ ] Fundo branco não aparece
- [ ] Logo não fica pixelado ao dar zoom
- [ ] Arquivo tem tamanho razoável (< 100KB para PNG)

## 🚀 Quick Fix

**Para remover fundo branco imediatamente:**

1. Acesse: https://www.remove.bg/
2. Upload do arquivo `GTLlogo.png`
3. Download da versão HD sem fundo
4. Substitua o arquivo `GTLlogo.png` no projeto
5. Remova do CSS: `mix-blend-mode: multiply;`

Resultado: Logo com fundo transparente funcionando perfeitamente! ✨

## 📞 Alternativa Profissional

Para um logo totalmente profissional:

1. **Contratar Designer** - Fiverr, 99designs, Workana
2. **Solicitar:**
   - Logo vetorial (SVG + AI)
   - Versões PNG (transparente, branco, preto)
   - Versões horizontais e verticais
   - Manual de marca com cores exatas

## 💡 Dica Extra

Se o logo for muito grande (arquivo pesado):

```html
<!-- Preload para carregar mais rápido -->
<link rel="preload" as="image" href="GTLlogo.png">
```

Adicione isso no `<head>` do HTML para o logo carregar imediatamente.

---

**Status Atual:** ✅ Logo implementado com `mix-blend-mode` para remover fundo branco automaticamente.

**Próxima melhoria sugerida:** Remover fundo branco permanentemente usando Remove.bg e salvar como PNG transparente.