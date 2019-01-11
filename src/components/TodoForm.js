import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onTodoSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onTodoSubmit)} className="ui form error">
        <Field name="text" component={this.renderInput} label={this.props.label} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.text) {
    errors.text = "You must enter text to add a todo";
  }
  return errors;
}

export default reduxForm({
  form: 'todoCreate',
  validate
})(TodoCreate);
