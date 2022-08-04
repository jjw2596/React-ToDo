import React from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
        <TodoList />
      </TodoTemplate>

  )
}

export default App;
