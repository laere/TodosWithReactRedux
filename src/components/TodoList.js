import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const renderedList = props.todos.map((todo) => {
    return <ListItem todo={todo} />
  });
  return <div>{renderedList}</div>
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps)(TodoList);
