import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from './TodoForm';

class TodoCreate extends React.Component {
  onTodoSubmit = (formValues) => {
    console.log(formValues);
    this.props.addTodo(formValues);
  }

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.onTodoSubmit} label="Add a todo item!"/>
      </div>
    );
  }
}

export default connect(null, { addTodo })(TodoCreate);
