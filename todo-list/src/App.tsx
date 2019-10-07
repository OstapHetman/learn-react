import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const initialTodos: Array<Todo> = [
  {text: 'lorem text is here', complete: true},
  {text: 'lorem text is here2', complete: false},
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
