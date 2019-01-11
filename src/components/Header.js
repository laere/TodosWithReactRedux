import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  renderCreateTodoButton() {
    return (
      <div>
        <Link to="/todos/create" className="ui button primary">
          Create Todo
        </Link>
      </div>
    )
  }

  renderFilterOptions() {
    return (
      <div className="right menu">
        <Link to="/" className="ui button primary">All</Link>
        <Link to="/todos/active" className="ui button primary">Active</Link>
        <Link to="/todos/completed" className="ui button primary">Completed</Link>
      </div>
    );
  }

  render() {
    return (
    <div className="ui secondary pointing menu" style={{marginBottom: '30px', padding: '10px'}}>
      {this.renderCreateTodoButton()}
      {this.renderFilterOptions()}
    </div>
    );
  }
}

export default Header;
