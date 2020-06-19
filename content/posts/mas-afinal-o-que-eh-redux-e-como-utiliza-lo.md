---
date: 2020-06-19T15:30:50.007Z
title: Mas afinal, o que é o Redux e como utilizá-lo?
image: /img/posts/redux-banner.png
smallImage: /img/posts/logo-redux.png
description: Redux é um gerenciador de estado global extremamente popular, porém pode ser muito desafiador
tags:
  - React
  - Redux
slug: mas-afinal-o-que-eh-redux-e-como-utiliza-lo
---

<p>O Redux é uma biblioteca que pode parecer desafiadora e até mesmo assustadora para muitos desenvolvedores. Se você também se sente assim, calma, isso é mais normal do que você imagina.</p>

<p>Apesar de ser muito útil e amplamente recomendado na comunidade, um grande erro cometido é querer colocar o Redux em qualquer aplicação independentemente do tamanho ou complexidade. Caso sua aplicação seja simples, tendo os componentes bem ligados, você pode passar a informação diretamente entre eles, seja simplesmente passando props e callbacks ou usando o ContextAPI, o Redux neste caso pode gerar uma complexidade desnecessária no seu projeto. A verdade é que se você não sabe o por que você precisa usar o Redux em sua aplicação, a grande chance é que você realmente não precise usar. Porém caso você precise utilizar, é uma biblioteca bem poderosa, e é claro que você vai querer aprender e estar preparado para ela.</p>

<h2>🤔 Ok, então o que é o Redux?</h2>

<p>O Redux é um container que centraliza os estados e lógicas da sua aplicação de uma forma previsível, isso significa que dado um estado específico da sua aplicação em conjunto com uma ação específica, o próximo estado da sua aplicação vai ser sempre o mesmo. Isso é o conceito de <b>funções puras</b> pertencentes ao paradigma da programação funcional. Assim, é possível realizar a persistência de estados e também a manipulação deles de uma forma mais poderosa, podendo até mesmo realizar facilmente a implementação de uma viagem do tempo, indo e voltando de estados anteriores. Legal, não?</p>

<img style="display: block; margin: auto;" alt="Doc Brown" src="/img/posts/docbrown.gif" />

<p>É muito importante lembrar que o Redux é uma implementação do <strong>Flux</strong>, uma arquitetura criada pelo Facebook. Podemos exemplificar ela da seguinte forma: Uma <strong>View</strong> pode disparar um evento que representa uma <strong>Action</strong> (uma ação que realiza alguma lógica), esta ação então é encaminhada para um <strong>Dispatcher</strong>, este cara sabe o que ele deve fazer com essa ação, resolvendo esta e gerando um novo <strong>Store</strong> (estado da aplicação).</p>

<img style="display: block; margin: auto;" alt="Flux Diagram" src="/img/posts/flux-diagram.png" />

<h2>✍ Os três princípios do Redux</h2>

<p>Com o Redux tudo o que muda na sua aplicação, seja os dados ou o estado da UI, é contido em um único objeto Javascript. Nós chamamos isso de <strong>State</strong> ou <strong>State Tree</strong>, este é o primeiro princípio.</p>

<p>Todas as mutações e mudanças de estados no Redux são explícitas, você consegue manter o rastro de todas elas. O segundo princípio do Redux é que a <strong>State Tree</strong> é <strong>readonly</strong>, você não pode modificá-la diretamente. Para isso, é necessário dar <strong>dispatch</strong> em uma <strong>action</strong>, que é um objeto Javascript simples que descreve a mudança, ele possui uma propriedade <strong>type</strong> que define a sua função. O <strong>state</strong> é uma representação mínima dos dados, enquanto a <strong>action</strong> é a uma representação mínima da mudança desses dados.</p>

<p>Para descrever uma mutação de estado, você precisa criar o <strong>Reducer</strong>, um intermediário entre o <strong>Dispatcher</strong> e o <strong>Store</strong>. Ele é uma <strong>função pura</strong> que pega o estado antigo e a ação que está sendo despachada, retornando o próximo estado da sua aplicação, este é o terceiro princípio.</p>

<h2>🔎 Olhando para o código</h2>

<p>Para exemplificar um pouco melhor, iremos usar um exemplo de uma lista de <i>todos</i> da própria documentação do Redux.</p>

<iframe
     src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todomvc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="reduxjs/redux: todomvc"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Dentro do arquivo `src/reducers/todos.js` (trecho de código abaixo para facilitar a leitura, caso queria ver o código completo basta usar o sandbox acima) está implementado o nosso **reducer** que verifica qual o tipo da **action** realizada em um `switch case` para fazer uma lógica específica. O `ADD_TODO`, por exemplo, retorna um array contendo todos os estados anteriores com a inserção de um novo estado. Já o `initialState` serve para dizer qual é o estado inicial da nossa lista de <i>todos</i>.

```javascript
import {
  ADD_TODO,
  // ... Importação dos demais actions
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

export default function todos(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];

    // ... Restante dos tipos com suas determinadas lógicas

    default:
      return state;
  }
}
```

Todos essas **actions** estão sendo criadas no arquivo `src/actions/index.js`, que importa as constantes (uma boa prática para organizar e garantir a qualidade do código) do arquivo `src/constants/ActionsTypes.js`, exportando uma função que recebe (ou não) um **payload** (no caso o text):

```javascript
import * as types from '../constants/ActionTypes';

export const addTodo = text => ({ type: types.ADD_TODO, text });
// ... Restante das actions criadas
```

Se colocarmos um `console.log` do valor que retorna dentro desse <strong>reducer</strong> e formos olhando o que ele está mostrando cada vez que adiciono um item, podemos entender como a <strong>state tree</strong> é criada:

```javascript
// Primeira chamada
[object Object] {
  todos: [[object Object] {
  completed: false
  id: 0
  text: "Use Redux"
  }]
}

// Adicionando um novo item
[object Object] {
  todos: [[object Object] {
  completed: false,
  id: 0,
  text: "Use Redux"
  },
  [object Object] {
    completed: false,
    id: 1,
    text: "Criar post sobre o Redux"
  }]
}
```

A action do `addTodo` é chamada dentro do componente `src/components/Header.js`, que recebe através do retorno do evento `onSave` no componente `src/components/TodoTextInput.js` qual é o nosso payload:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

const Header = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={text => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
```

A conexão do `Header` com o Redux é feita em um arquivo `src/containers/Header.js` que simplesmente importa o `connect` do Redux. O **connect** é uma função que conecta um componente com a **store**, recebendo o `mapStateToProps` (serve para reagir as atualizações do store) e o `mapDispatchToProps` (dispara uma ação para a store). Como temos um componente separado para isso, precisamos apenas executar esta função para salvar o <i>todo</i> no store:

```javascript
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo } from '../actions';

export default connect(null, { addTodo })(Header);
```

Para visualizar os <i>todos</i> criados na nossa store, temos dentro do componente `src/containers/VisibleTodoList.js` um `mapStateToProps` que busca dentro do seletor `getVisibleTodos` os <i>todos</i> filtrados ou não dependendo do estado `visibilityFilter`.

```javascript
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
```

Acima temos como exemplo o `mapDispatchToProps` realizando um `bindActionCreators` que cria um objeto com todos os _actions_ envelopados em um _dispatch_, estas actions serão utilizadas no `src/components/TodoItems.js` para deletar, editar ou completar um <i>todo</i>.

Para poder usar tudo isso, é criado dentro do `src/reducers/index.js` o `rootReducer`, que faz uma combinação de todos os reducers que serão utilizados pela store.

```javascript
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default rootReducer;
```

Para finalizar, basta ir no nosso arquivo `src/index.js` para criamor o store que vai ser usado pelo `Provider` do App:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

<h2>😎 Pronto, agora você sabe o que é e como usar</h2>

<img style="display: block; margin: auto; height: 350px; width: 580px" alt="Jim Carrey" src="/img/posts/running.gif" />

Este é o Redux! Lembrando que para entender melhor os conceitos por trás dele recomendo o estudo do paradigma de programação funcional, arquitetura flux e a própria documentação.

Gostou do artigo e pretende usar ou já usa o Redux? Deixa ai sua opinião!
