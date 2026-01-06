# 💃 Ciranda Vila de Ega - Website Oficial

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen) ![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

> "Vila de Ega: Um poema escrito em passos de dança."

Website institucional desenvolvido para o **Grêmio Recreativo Folclórico e Cultural Vila de Ega**, de Tefé/AM. O objetivo da plataforma é divulgar a história do grupo, centralizar as mídias (músicas e fotos) e facilitar a inscrição de novos brincantes.

🌐 **Acesse o site:** [https://cirandaviladeega.com.br](https://cirandaviladeega.com.br)

---

## 🛠️ Funcionalidades

* **Navegação SPA (Single Page Application):** Troca de abas (Início, Galeria, Inscrições) sem recarregar a página, garantindo fluidez.
* **Hero Interativo (Parallax):** Efeito visual na página inicial onde o fundo reage ao movimento do mouse.
* **Ficha de Inscrição Automatizada:** Formulário completo com validação de dados que envia as informações diretamente para o WhatsApp da diretoria da Ciranda.
* **Integração de Mídia:**
    * Player do Spotify incorporado.
    * Álbuns de fotos via Flickr.
    * Links diretos para YouTube e Apple Music.
    * Localização via Google Maps.
* **Design Responsivo:** Layout fluido que ajusta menu, banners e formulários para telas pequenas.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais (Vanilla), sem dependência de frameworks pesados, garantindo leveza e alta performance:

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:**
    * Flexbox e Grid Layout para posicionamento.
    * Variáveis CSS (`var(--verde-principal)`) para consistência visual.
    * Animações (`keyframes`) e transições suaves.
    * Media Queries para responsividade mobile-first.
* **JavaScript (ES6+):**
    * Manipulação do DOM para o sistema de abas.
    * Lógica de validação de formulário.
    * API do `window.open` para integração com WhatsApp API.
    * Cálculo de vetores para o efeito de mouse parallax.

---

## 📂 Estrutura do Projeto

```text
/
├── index.html       # Estrutura principal
├── style.css        # Estilização e regras responsivas
├── script.js        # Lógica das abas e envio de formulário
├── favicon.ico      # Ícone do navegador
└── images/          # Logos, banners e ícones
