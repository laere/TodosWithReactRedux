import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import TodoCreate from './TodoCreate';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderButtons(todo) {
    return (
      <div className="right floated content">
        <Link to={`/todos/edit/${todo.id}`} className="ui primary button">
          Edit
        </Link>
        <Link to={`/todos/delete/${todo.id}`} className="ui negative button">
          Delete
        </Link>
        <button className="ui positive button">Complete</button>
      </div>
    );
  }

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <div className="item" key={todo.id}>
          {this.renderButtons(todo)}
          <i className="large middle aligned icon pencil alternate" />
          <div className="content">
            {todo.text}
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h2>Your todos:</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { todos: Object.values(state.todos) }
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);
