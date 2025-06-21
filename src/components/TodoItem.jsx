import React from 'react';

function TodoItem(props) {
    const { todo, toggleTodo, deleteTodo } = props;
  return (
    <div className='todoitem' >
      <span onClick={() => toggleTodo(todo.id)}>
       <p> {todo.text}</p>
      </span>
      <button id='delete-btn' onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
