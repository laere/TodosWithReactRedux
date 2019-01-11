import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchTodo, editTodo } from '../actions';
import TodoForm from './TodoForm';
import TodoCreate from './TodoCreate';

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.todo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Edit your todo</h2>
        <TodoForm
          initialValues={_.pick(this.props.todo, 'text')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);
