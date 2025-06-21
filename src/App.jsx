import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { 
      id: uuid(),
       text, 
       completed: false
       };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
