# Portfólio — João Victor Czech Oliveira

Site de portfólio pessoal, estático (HTML, CSS e JavaScript puro, sem frameworks ou build tools), com suporte bilíngue (Português / Inglês) e design inspirado na linguagem visual da Apple (seções zebradas, cards arredondados, tipografia limpa).

## 🌐 Ver o site

Basta abrir o `index.html` em qualquer navegador — não há dependências nem processo de build.

Para rodar com um servidor local (recomendado, evita problemas de CORS com imagens/scripts):

```bash
# Python 3
python3 -m http.server 8000

# ou com Node.js
npx serve .
```

Depois acesse `http://localhost:8000`.

## 📁 Estrutura do projeto

```
portfolio-site/
├── index.html      # Estrutura de todas as seções da página
├── styles.css       # Estilos (layout, cards, carrossel, responsividade)
├── script.js        # Lógica de i18n, carrossel, animações de scroll
├── imagem/          # Imagens usadas nos projetos e na foto de perfil
└── assets/          # Outros recursos estáticos (ex: currículo em PDF)
```

## ✨ Funcionalidades

- **Navegação por âncoras** — menu fixo com links para cada seção (Home, Habilidades, Experiência, Projetos, IA e Skills, Contato).
- **Troca de idioma (PT-BR / EN)** — botão no canto superior que alterna todos os textos da página via o sistema de tradução em `script.js`.
- **Carrossel de projetos** — navegação por setas (posicionadas fora dos cards) e suporte a arraste (swipe/drag) para navegar entre os projetos.
- **Animações de entrada (scroll reveal)** — elementos com a classe `.reveal` aparecem suavemente conforme entram na tela.
- **Layout responsivo** — breakpoints para tablets (≤768px) e celulares (≤480px).

## 🌍 Sistema de internacionalização (i18n)

As traduções ficam centralizadas no início do `script.js`, no objeto `translations`, dividido em `pt-BR` e `en`:

```js
const translations = {
  'pt-BR': { nav_home: 'Home', hero_title: '...', /* ... */ },
  'en':    { nav_home: 'Home', hero_title: '...', /* ... */ },
};
```

No HTML, qualquer elemento pode ser traduzido adicionando o atributo `data-i18n` com uma chave que exista nos dois idiomas:

```html
<h3 data-i18n="proj1_title">Uniride</h3>
```

Para traduzir **atributos** (como `alt`, `aria-label`, `title`), use `data-i18n-attr`:

```html
<img data-i18n-attr="alt:hero_img_alt" alt="Foto do autor">
```

### ➕ Como adicionar um novo projeto ao carrossel

1. No `index.html`, dentro de `#projetos > .carousel__track`, copie a estrutura de um `.card` existente.
2. Dê uma **chave única** de tradução ao título e à descrição (ex: `proj12_title`, `proj12_desc`) — nunca reutilize uma chave já usada por outro projeto, ou as traduções vão colidir.
3. No `script.js`, adicione essas mesmas chaves nos dois blocos do objeto `translations` (`pt-BR` e `en`), com o texto correspondente em cada idioma.
4. Coloque a imagem do projeto na pasta `imagem/` e referencie-a no `<img class="card__img-large">`.

## 🎨 Design

- Paleta neutra com seções alternadas (brancas / cinza-lilás) para criar ritmo visual.
- Cards com cantos arredondados, sombra sutil e efeito de leve elevação no hover.
- Imagens dos cards usam `object-fit: cover` dentro de um wrapper com altura acompanhando o texto, garantindo que fotos com proporções diferentes (fotos normais, screenshots longos, etc.) se ajustem sem distorcer.

## 🤖 IA e Skills utilizadas no desenvolvimento

Este portfólio foi construído com apoio de modelos de IA (Ollama, Groq, OpenCode para a base da plataforma; Claude Sonnet 5 para correções e melhorias de interface), aplicando skills como direção visual/design, temas de cor e fonte, montagem de HTML portátil e testes de interface. Mais detalhes na própria seção "IA e Skills" do site.

## 📬 Contato

- **E-mail / LinkedIn / GitHub**: disponíveis na seção de contato do site.
- **Localização**: Curitiba, PR, Brasil.
