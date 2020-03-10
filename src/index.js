import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

ReactDOM.render(<App />, document.getElementById('root'));

const toDo = [{
    make: 'do a toDo list',
    id: 987,
    done: false
},
]