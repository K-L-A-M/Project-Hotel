
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
<body>
  <h1>KLAM HOTEL FRONT END PART</h1>

  <p>Este é um projeto de sistema de gerenciamento de hotel com funcionalidades básicas, como login, cadastro de usuários e integração com uma API para alimentar dados.</p>

  <h2>Funcionalidades</h2>

  <ul>
    <li><strong>Login:</strong> Permite que usuários autenticados acessem o sistema.</li>
    <li><strong>Cadastro de Usuários:</strong> Novos usuários podem se cadastrar no sistema.</li>
    <li><strong>Integração com API:</strong> Os dados do sistema são alimentados por uma API externa.</li>
  </ul>

  <h2>Pré-requisitos</h2>

  <ul>
    <li>Node.js instalado</li>
    <li>NPM (Node Package Manager) instalado</li>
  </ul>

  <h2>Configuração do Projeto</h2>

  <ol>
    <li>Clone o repositório:</li>
  </ol>

  <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio</code></pre>

  <ol start="2">
    <li>Instale as dependências:</li>
  </ol>

  <pre><code>npm install</code></pre>

  <ol start="3">
    <li>Configuração da API:</li>
  </ol>

  <p>Edite o arquivo <code>.env</code> e adicione o link da API:</p>

  <pre><code>REACT_APP_API_URL=https://sua-api.com</code></pre>

  <h2>Uso</h2>

  <ol>
    <li>Inicie o aplicativo:</li>
  </ol>

  <pre><code>npm start</code></pre>

  <ol start="2">
    <li>Acesse o aplicativo no seu navegador em <a href="http://localhost:3000">http://localhost:3000</a>.</li>
  </ol>

  <h2>Contribuição</h2>

  <p>Se quiser contribuir para este projeto, siga os passos abaixo:</p>

  <ol>
    <li>Faça um fork do projeto.</li>
    <li>Crie uma branch para a sua feature (<code>git checkout -b feature/nova-feature</code>).</li>
    <li>Faça commit das suas alterações (<code>git commit -am 'Adiciona nova feature'</code>).</li>
    <li>Faça push para a branch (<code>git push origin feature/nova-feature</code>).</li>
    <li>Abra um Pull Request.</li>
  </ol>

  <h2>Links Úteis</h2>

  <ul>
    <li>Link da API: <a href="https://sua-api.com">https://sua-api.com</a></li>
    <li>Link da Aplicação no Vercel: <a href="https://seu-projeto.vercel.app">https://seu-projeto.vercel.app</a></li>
  </ul>

  <h2>Licença</h2>

  <p>Este projeto é distribuído sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais detalhes.</p>
</body>

</html>

