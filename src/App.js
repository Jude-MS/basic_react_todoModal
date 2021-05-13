import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
    <h1>My todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React Library" />
      <Todo text="Get a dream job" />
    </div>
  );
}

export default App;
