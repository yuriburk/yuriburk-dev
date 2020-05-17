---
date: 2020-05-17T16:10:50.617Z
title: Criando testes unitários com Jest em uma aplicação Node.js
image: /img/posts/jest.png
description: Jest é um framework para criar fácilmente testes automatizados no Javascript
tags:
  - Jest
  - Node.js
slug: criando-testes-unitarios-com-jest-em-uma-aplicacao-node-js
---
<p>Imagine um cenário onde temos diversos desenvolvedores trabalhando em diferentes funcionalidades que utilizam classes compartilhadas. Muito provavelmente quando realizarem o merge alguns conflitos acontecerão, tendo que serem resolvidos manualmente. Ou até mesmo um método que teve que ser alterado para atender outro critério de aceite, como garantir que não teremos problemas na outra parte do nosso sistema?</p>
<br />
<p>Para isso, os <strong>testes automatizados</strong> garantem que a nossa aplicação continue funcionando independente do número de novas funcionalidades ou de desenvolvedores no time.</p>
<br />
<p>Temos alguns tipos de testes automatizados:<p>
<ol>
  <li><strong>Testes unitários</strong>: Funções puras que testam funcionalidades específicas da nossa aplicação.</li>
  <li><strong>Testes de integração</strong>: Testam uma funcionalidade completa, passando por várias camadas da aplicação.</li>
  <li><strong>Testes E2E</strong>: Simulam a ação do usuário dentro da aplicação.</li>
</ol>
<br />
<p>Neste post, irei mostrar como criar testes unitários no Javascript utilizando o Jest.</p>

<h2>O que é o Jest?</h2>
<p>Jest é um framework simples para criar testes automatizados no Javascript, podendo ser utilizado em aplicações Node.js, React, Angular, Vue e mais. Fornecendo um dashboard de cobertura de código e um modo fácil de criar mocks (objetos falsos que simulam comportamentos de outro objeto).</p>

<h2>Indo para o código!</h2>
<p>Primeiro, vamos criar uma aplicação Node.js executando o seguinte comando:</p>

```console
yarn init -y
```

<p>Agora vamos instalar o Express:</p>

```console
yarn add express
```

<p>Com isso, podemos criar nosso servidor básico:</p>

```javascript
var express = require("express");
var app = express();
var { calculator } = require("./src/Calculator");

app.get("/", function (req, res) {
  res.send(`Hello World! The sum of 2 + 2 is: ${calculator.sum(2, 2)}`);
});

app.listen(5000, function () {
  console.log("🚀 Servidor rodando na porta 5000");
});
```

Como você deve ter percebido nas importações, foi criado um objeto chamado `calculator`, para isso basta criar o arquivo `src/Calculator/index.js`:

```javascript
const calculator = {
  sum(numberLeft, numberRight) {
    return numberLeft + numberRight;
  },
};

module.exports = { calculator };
```

Se tudo tiver dado certo, você pode executar `node app.js` que deve nos retornar no log: `🚀 Servidor rodando na porta 5000`.