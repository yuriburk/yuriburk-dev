<h1>🚀 YuriBurk.dev</h1>

YuriBurk.dev é um blog pessoal sendo criado como formato de estudo, misturando o artigo "Criando um glob com Gatsby e React" (por João Pedro) e meu aprendizado no curso GoStack Bootcamp.

<h2>💻 Tecnologias</h2>

Neste projeto, as tecnologias abordadas são:
- React
- Gatsby
- Typescript
- Styled-Components
- GraphQL

<h2>👨‍💻 Instalando</h2>

Para executar o projeto:
1. Clone o repositório na sua máquina (git clone)
2. Instale todas as dependências (yarn install)
3. Inicie o projeto rodando o script pré-configurado (yarn dev:server) ou utilizando a CLI do gatsby (gatsby develop)
4. Criar a pasta <strong>data</strong> na raiz e um arquivo <strong>config.ts</strong>
    ```javascript
    const config = {
      siteTitle: 'Yuri Burk',
      siteDescription:
        'Descrição do melhor blog de programação do Brasil :)',
      siteTitleShort: 'Yuri Burk',
      siteRss: '/rss.xml',
      siteImage: '',
      googleAnalyticsID: 'XX-000000-0',
      themeColor: '#000000',
      backgroundColor: '#1a1a1a',
      siteUrl: 'https://example.com/'
    };

    export default config;
    ```
