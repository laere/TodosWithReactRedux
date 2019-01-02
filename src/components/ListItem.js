import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class ListItem extends React.Component {
  render() {
    return (
      <div className="item" key={this.props.index}>
        <div className="right floated content">
          <button className="ui button primary" onClick={() => this.props.deleteTodo(this.props.todo.id)}>
            Delete
          </button>
        </div>
        <div className="content">
          {this.props.todo.text}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

export default connect(mapStateToProps, { deleteTodo })(ListItem);
