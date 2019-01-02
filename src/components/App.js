import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';

class App extends React.Component {
  

  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <InputBar />
        <TodoList />
      </div>
    );
  }
}

export default App;
