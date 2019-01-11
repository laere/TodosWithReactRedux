import React from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import TodoDelete from './TodoDelete';
import TodoEdit from './TodoEdit';
import Header from './Header';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Routes:
// Todos '/todos' = same as showing all todos except deleted
// Completed '/todos/completed'
// Active '/todos/active'


class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={TodoList} />
            <Route path="/todos/create" exact component={TodoCreate} />
            <Route path="/todos/delete/:id" exact component={TodoDelete} />
            <Route path="/todos/edit/:id" exact component={TodoEdit} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
