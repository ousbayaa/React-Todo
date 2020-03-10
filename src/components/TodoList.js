// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Todo';

const ToDoList = props => {
    return (
      <div className="toDo">
        {props.toDo.map(item => (
          <Item
            key={item.id}
            item={item}
            toggleDone={props.toggleDone}
          />
        ))}
        <button className="clear-btn" onClick={props.clearDone}>
          Clear
        </button>
      </div>
    );
  };
    
export default ToDoList;
