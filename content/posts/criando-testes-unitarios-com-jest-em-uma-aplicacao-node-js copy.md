---
date: 2020-05-17T16:10:50.617Z
title: Criando testes unitários com Jest em uma aplicação Node.js
image: /img/posts/jest-banner.png
smallImage: /img/posts/jest.png
description: Jest é um framework para criar fácilmente testes automatizados no Javascript
tags:
  - Jest
  - Node.js
slug: criando-testes-unitarios-com-jest-em-uma-aplicacao-node-js
---

Imagine um cenário onde temos diversos desenvolvedores, trabalhando em diferentes funcionalidades que utilizam classes compartilhadas. Muito provavelmente quando realizarem o merge alguns conflitos acontecerão, tendo que serem resolvidos manualmente. Agora vamos pensar em um método que teve que ser alterado para atender outro critério de aceite, como garantir que não teremos problemas na outra parte do nosso sistema?

Para isso, os **testes automatizados** garantem que a nossa aplicação continue funcionando independente do número de novas funcionalidades ou de desenvolvedores no time.

Temos alguns tipos de testes automatizados:

<ol>
  <li><strong>Testes unitários</strong>: Funções puras que testam funcionalidades específicas da nossa aplicação.</li>
  <li><strong>Testes de integração</strong>: Testam uma funcionalidade completa, passando por várias camadas da aplicação.</li>
  <li><strong>Testes E2E</strong>: Simulam a ação do usuário dentro da aplicação.</li>
</ol>

Neste post, irei mostrar como criar testes unitários no Javascript utilizando o Jest.

<h2>📘 O que é o Jest?</h2>

Jest é um framework simples para criar testes automatizados no Javascript, podendo ser utilizado em aplicações Node.js, React, Angular, Vue e mais. Fornece um dashboard de cobertura de código e um modo fácil de criar testes com mocks (objetos falsos que simulam comportamentos de outro objeto).

<h2>👨‍💻 Indo para o código!</h2>

Primeiro, vamos criar uma aplicação Node.js executando o seguinte comando:

```console
yarn init -y
```

Agora vamos instalar o Express:

```console
yarn add express
```

Com isso, podemos criar nosso servidor básico em um novo arquivo `app.js`:

```javascript
var express = require('express');
var app = express();
var calculator = require('./src/Calculator');

app.get('/', function (req, res) {
  res.send(`Hello World! The sum of 2 + 2 is: ${calculator.sum(2, 2)}`);
});

app.listen(5000, function () {
  console.log('🚀 Servidor rodando na porta 5000');
});
```

Como você deve ter percebido nas importações, foi criado um objeto chamado `calculator`, para isso basta criar o arquivo `src/Calculator/index.js`:

```javascript
const calculator = {
  sum(numberLeft, numberRight) {
    return numberLeft + numberRight;
  },
};

module.exports = calculator;
```

Se tudo tiver dado certo, você pode executar `node app.js` que deve nos retornar no log: `🚀 Servidor rodando na porta 5000`.

Agora vamos adicionar o Jest rodando `yarn add jest -D`, e criar o nosso arquivo de testes `index.test.js` na mesma pasta da nossa calculadora:

```javascript
const calculator = require('./index');

test('Calculator sum should be ok', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});
```

O método `test` recebe a descrição do que vai ser testado e também uma função, que executa o nosso cenário de teste. Dentro do `expect` eu passo primeiro a nossa ação, e logo depois eu chamo o `toBe` que recebe qual é o resultado esperado daquela ação. Se formos ler o código podemos notar que é altamente fluente: "**O teste A soma da calculadora deve estar ok espera que a soma da calculadora 2 + 2 deve ser 4**".

Agora basta rodar `yarn jest` que exibirá o seguinte no terminal:

```terminal
 PASS  src/Calculator/index.test.js
  √ Calculator sum should be ok (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.503 s
Ran all test suites.
Done in 2.38s.
```

Futuramente iremos colocar Typescript no nosso projeto e começar a desenvolver testes mais complexos. Mas com isso você já aprendeu o básico, de modo muito simples, para começar a desenvolver testes unitários assertivos em sua aplicação.
