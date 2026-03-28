# 🚀 Guia de Publicação - Site GTL

Guia rápido para publicar o site da GTL Construções e Serviços online.

## 📋 Pré-requisitos

Antes de publicar, certifique-se de ter:

- ✅ Todos os arquivos do site (HTML, CSS, JS)
- ✅ Imagens otimizadas
- ✅ Domínio configurado (gtlconstrucoeseservicos.com.br)
- ✅ Acesso ao painel de hospedagem
- ✅ Cliente FTP (FileZilla) ou acesso ao cPanel

## 🌐 Opção 1: Publicação via cPanel (Hostgator)

### Passo a Passo:

1. **Acesse o cPanel**
   - URL: https://gtlconstrucoeseservicos.com.br:2083
   - Login: seu_usuario
   - Senha: sua_senha

2. **Navegue até o Gerenciador de Arquivos**
   - Clique em "Gerenciador de Arquivos"
   - Vá para a pasta `public_html`

3. **Limpe a pasta (se necessário)**
   - Selecione todos os arquivos antigos
   - Clique em "Excluir"

4. **Faça upload dos arquivos**
   - Clique em "Upload"
   - Arraste e solte os arquivos:
     ```
     index.html
     /css/styles.css
     /js/script.js
     README.md
     favicon.ico (se tiver)
     ```

5. **Verifique as permissões**
   - Arquivos: 644
   - Pastas: 755

6. **Teste o site**
   - Acesse: https://gtlconstrucoeseservicos.com.br
   - Verifique todas as páginas
   - Teste em mobile

### Estrutura no Servidor:

```
public_html/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/ (se tiver)
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

## 📁 Opção 2: Publicação via FTP (FileZilla)

### Configuração do FileZilla:

1. **Baixe o FileZilla**
   - https://filezilla-project.org/

2. **Configure a conexão**
   - Host: ftp.gtlconstrucoeseservicos.com.br
   - Usuário: seu_usuario_ftp
   - Senha: sua_senha_ftp
   - Porta: 21

3. **Conecte e faça upload**
   - Lado esquerdo: seus arquivos locais
   - Lado direito: servidor (pasta public_html)
   - Arraste os arquivos da esquerda para a direita

4. **Aguarde a transferência**
   - Verifique a fila de transferências
   - Confirme que todos os arquivos foram enviados

## ☁️ Opção 3: Netlify (Gratuito e Rápido)

### Deploy Automático:

1. **Crie uma conta no Netlify**
   - https://www.netlify.com/

2. **Conecte o GitHub (opcional)**
   - Ou faça upload manual

3. **Arraste a pasta do projeto**
   - Simplesmente arraste a pasta GTL
   - Netlify faz o deploy automaticamente

4. **Configure o domínio personalizado**
   - Settings → Domain Management
   - Add custom domain: gtlconstrucoeseservicos.com.br

5. **Configure DNS**
   - No painel do Registro.br:
     ```
     A Record: @ → 75.2.60.5
     CNAME: www → seu-site.netlify.app
     ```

### Vantagens do Netlify:
- ✅ HTTPS automático
- ✅ Deploy em segundos
- ✅ CDN global
- ✅ Gratuito
- ✅ Deploy automático via Git

## 🔒 Configuração de SSL/HTTPS

### No cPanel:

1. **Acesse "SSL/TLS Status"**
2. **Clique em "Run AutoSSL"**
3. **Aguarde a instalação**
4. **Verifique**: https://gtlconstrucoeseservicos.com.br

### Forçar HTTPS:

Adicione no `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 🔧 Configurações DNS

### No Registro.br ou provedor de domínio:

```
Tipo    Nome    Destino                          TTL
A       @       [IP do servidor]                 14400
A       www     [IP do servidor]                 14400
CNAME   www     gtlconstrucoeseservicos.com.br   14400
```

**Nota:** Alterações de DNS podem levar até 48h para propagar.

## ✅ Checklist Pós-Publicação

### Testes Essenciais:

- [ ] Site abre no endereço principal
- [ ] HTTPS está funcionando (cadeado verde)
- [ ] Todas as páginas abrem corretamente
- [ ] Links internos funcionam
- [ ] Formulário de contato funciona
- [ ] WhatsApp abre corretamente
- [ ] Imagens carregam
- [ ] Menu mobile funciona
- [ ] Site é responsivo (testar em mobile)

### Testes de Navegadores:

- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Safari (Mac/iPhone)
- [ ] Microsoft Edge
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### Validações:

- [ ] HTML válido: https://validator.w3.org/
- [ ] CSS válido: https://jigsaw.w3.org/css-validator/
- [ ] Mobile-friendly: https://search.google.com/test/mobile-friendly
- [ ] PageSpeed: https://pagespeed.web.dev/

## 📊 Configurar Ferramentas

### 1. Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade (domínio)
3. Verifique a propriedade
4. Envie o sitemap: `sitemap.xml`

### 2. Google Analytics

1. Crie uma conta: https://analytics.google.com/
2. Crie uma propriedade GA4
3. Copie o código de rastreamento
4. Cole no `<head>` do HTML

### 3. Google My Business

1. Acesse: https://business.google.com/
2. Adicione a empresa
3. Verifique o endereço
4. Complete o perfil

## 🔄 Atualizações Futuras

### Para atualizar o site:

1. **Edite os arquivos localmente**
2. **Teste as mudanças**
3. **Faça backup do site atual**
4. **Suba os novos arquivos**
5. **Limpe o cache do navegador** (Ctrl+Shift+R)

### Cache do Navegador:

```html
<!-- Adicione no <head> para controlar cache -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
```

## 🆘 Problemas Comuns

### Site não abre:

1. Verifique se os arquivos estão em `public_html`
2. Confirme que `index.html` está na raiz
3. Verifique permissões dos arquivos
4. Limpe cache do DNS: `ipconfig /flushdns`

### CSS/JS não carregam:

1. Verifique os caminhos dos arquivos
2. Confirme que as pastas `css/` e `js/` foram enviadas
3. Verifique permissões (644 para arquivos)
4. Limpe cache do navegador

### HTTPS não funciona:

1. Aguarde até 24h após instalação
2. Force instalação do SSL no cPanel
3. Verifique o .htaccess
4. Entre em contato com o suporte

### Imagens não aparecem:

1. Verifique se foram enviadas para o servidor
2. Confirme os caminhos no HTML
3. Use caminhos relativos: `images/foto.jpg`
4. Não use caminhos absolutos do computador

## 📞 Suporte

### Hostgator Brasil:

- **Telefone**: 0800 0200 222
- **Chat**: https://www.hostgator.com.br/
- **E-mail**: suporte@hostgator.com.br
- **Painel**: https://financeiro.hostgator.com.br/

### Registro.br:

- **Telefone**: 0800 883 1272
- **Site**: https://registro.br/
- **Suporte**: https://registro.br/ajuda/

## 💡 Dicas Importantes

1. **Sempre faça backup** antes de fazer alterações
2. **Teste localmente** antes de publicar
3. **Use versionamento** (Git) para controle
4. **Monitore o site** regularmente
5. **Mantenha backups** semanais
6. **Atualize conteúdo** mensalmente
7. **Revise links** trimestralmente
8. **Renove SSL** anualmente (se não for automático)

## 📈 Próximos Passos

Após publicar:

1. Configurar Google Analytics
2. Cadastrar no Google Search Console
3. Criar perfil no Google My Business
4. Compartilhar nas redes sociais
5. Enviar para diretórios de empresas
6. Cadastrar em marketplaces B2B
7. Começar estratégia de SEO
8. Criar campanha no Google Ads

---

**Data de publicação:** ___/___/2026
**Responsável:** ________________
**Status:** [ ] Publicado [ ] Em teste [ ] Pendente

---

✅ **Parabéns!** Site pronto para o mundo! 🚀