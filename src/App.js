import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ListForm from './components/TodoForm';
import { wait } from '@testing-library/react';

const toDo = [{
  name: 'do a toDo list',
  id: 987,
  done: false
},
{
  name: 'complete styling',
  id:654,
  done: false
}
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super(); 
    this.state = {
      toDo,
    };
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({toDo: [...this.state.toDo, newItem]});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
          <TodoList toDo={this.state.toDo}/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));