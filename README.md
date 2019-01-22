# Teste Tag Livros

**Pré-requisitos:**

> Node.js

## Sobre a arquitetura

---

Para este desafio, foi escolhido a utilização de paradigmas de programação orientada à objetos com JavaScript, tendo o apoio para desenvolvimento a lib JS **React**. 

Visando uma melhor arquitetura, juntamente com uma boa linguagem, optei por arquiteturar a aplicação baseada em **Higher-Order Components**, termo também conhecido como "Container components and presentation components".

Vindo de Higher-Order Functions (uma função que opera sobre outras funções), o Higher-Order Components tem como base componentes que operam sobre outros componentes, removendo a complexidade de estrutura, organização, interação e dependências entre componentes e responsabilidades dos mesmos.

Em camadas diferentes, a aplicação front-end se comunica com a API através de dois services, um disponibilizado pela própria TAG, (*server.js* rodando em cima de *livros.json*), e outro estruturado e desenvolvido por mim, responsável por consultar a API do GoodReads, assim estabelecer a conexão entre as mesmas e a aplicação e obter dela o necessário para ser exibido no front-end.

Como sugestão de melhora para o teste, deixo como intensão a aplicação de testes unitários para garantir que sejam obtidas as funcionalidades esperadas em cada parte do código, a aplicação de layout resposivo ou adaptativo, serviço de busca e carregamento de mais livos.

A aplicação está estruturada da seguinte forma:

```
|node_modules/
|public/
  |_favicon.ico
  |_index.html
  |_manifest.json
|src/
  |_api/
  |_assets/
  |_components/
  |_containers/
  |_modules/
  |_utils/
  |_createStore.js
  |_globalStyles.js
  |_index.js
  |_registerServiceWorker.js
  |_routes.js
|_.editorconfig
|_.env
|_.gitignore
|_.prettierrc
|_config-overrides.js
|_jsconfigs.js
|_livros.json
|_package-lock.json
|_package.json
|_server.js
|_README
```

## Sobre o código & soluções/ferramentas utilizadas

---

Uso de scripts, linters e ferramentas de build para apoio ao desenvolvimento.

Para o apoio ao desenvolvimento foi utilizado **Reactjs**, com o uso do *boilerplate* [React Etalpreliob](https://github.com/hyanmandian/react-etalpreliob), que consiste basicamente em uma estrutura baseada no *create-react-app* (tudo o que funciona com o create-react-app funciona com este boilerplate também), além de muitas coisas úteis que normalmente precisamos durante o desenvolvimento, como:

[Axios](https://github.com/axios/axios) - Cliente para requisições HTTP
[Rewired](https://github.com/timarney/react-app-rewired) - Ajusta a(s) configuração(ões) webpack do create-react-app sem usar 'eject' e sem criar uma bifurcação dos scripts-reag.
[Rematch](https://github.com/rematch/rematch) - Framework em cima do Redux para a utiliação da arquitetura flux.
[Storybook](https://github.com/storybooks/storybook) - Storybook é um ambiente de desenvolvimento para componentes de interface do usuário. Ele permite que você navegue por uma biblioteca de componentes, visualize os diferentes estados de cada componente e desenvolva e teste componentes interativamente.
[Hot Loader](https://github.com/gaearon/react-hot-loader) - Tweak React componentes em tempo real
[Sanitize.css](https://github.com/csstools/sanitize.css) - Uma base de CSS com práticas recomendadas
[Reach Router](https://github.com/reach/router) - Routing para React
[React Helmet](https://github.com/nfl/react-helmet) - Componente React reutilizável que gerencia todas as alterações no cabeçalho do documento. O Helmet usa e gera tags HTML simples. É muito simples, e React begginer friendly :)
[React Loadable](https://github.com/jamiebuilds/react-loadable) - Um High order component para carregar componentes com importações dinâmicas.
[Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Auxilia a visualização do tamanho dos arquivos de saída do Webpack com um mapa de árvores interativo com zoom.
[Styled Components](https://www.styled-components.com/) - Componentes estilizáveis de uma forma diferente.


No geral foram utilizadas boas práticas de Clean Code, procurando sempre deixar o código bem legível, claro, simples e ágil visando sempre a pessoa desenvolvedora que terá contato com este mesmo código para que o entendimento seja intuitivo.

## Sobre a UI prototipada e desenvolvida

Com base em skill de UX e UI Designer que obtenho, foi prototipada telas de baixa fidelidade para guia de implementação do webapp.
Os protótipos foram feitos no [Figma](https://www.figma.com/) e estão disponibilizados juntamente com o projeto, em *assets/uiDesign*

## URL de publicação

---

http://localhost:3001/

## Setup do projeto e Execução

---

#### Setup

```
npm install
```

#### Inicia aplicação

```
npm start
```

#### Inicia server para a API de livros

```
npm run serve-api 
```

#### Lints e arquivos de correção

```
npm run lint
```
