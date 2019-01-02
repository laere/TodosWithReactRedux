import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class InputBar extends React.Component {
  state = { text: '' }

  idGenerator = () => {
    let uuid = '', random, i;
    for (i = 0; i < 8; i++) {
      random = Math.random() * 16 | 0;
      uuid += random.toString(16);
    }
    return uuid;
  }

  onTodoSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.text, this.idGenerator());
  }

  render() {
    console.log(this.props.todos);
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onTodoSubmit}>
          <div className="field">
            <label>Add an item</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps, { addTodo })(InputBar);
