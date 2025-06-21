import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
   const { todos, toggleTodo, deleteTodo } = props
  return (
    <div className='todolist'>
      {todos.length === 0 && <p>No tasks. Add something!</p>}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
