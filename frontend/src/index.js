//aqui ele importa o React e o React DOM // DOM é a arvore de elementos
import React from 'react';
import ReactDOM from 'react-dom';
//importando arquivo APP.js
import App from './App';

//ele esta renderizando(colocando em tela) o APP dentro da div com a id root
ReactDOM.render(<App />, document.getElementById('root'));


