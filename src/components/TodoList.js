import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

const TodoList = (props) => {
  console.log('List', props.todos);
  const renderedList = props.todos.map((todo, index) => {
    return <ListItem todo={todo} index={index} />
  });
  return <div>{renderedList}</div>
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps)(TodoList);
