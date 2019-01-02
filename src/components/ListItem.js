import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class ListItem extends React.Component {
  render() {
    const { todo, deleteTodo } = this.props;
    return (
      <div className="item" key={todo.id}>
        <div className="right floated content">
          <button className="ui button primary" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
        <div className="content">
          {todo.text}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps, { deleteTodo })(ListItem);
