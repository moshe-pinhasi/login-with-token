import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import {signupUser} from '../actions/index'

class SignupPage extends Component {

  handleFormSubmit({email, password}) {
    this.props.signupUser(email, password, () => {
      this.props.history.push('/feature')
    })
  }

  renderField(field) {

    const { type, meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`
    const inputType = type || "text";
    return (
        <div className={className}>
            <label>{field.label}</label>
            <input
                className="form-control" 
                type={inputType}
                {...field.input}
            />
            <div className="text-help">{touched ? error : ''} </div>
        </div>
    );
}

  render() {
    const {handleSubmit} = this.props
    return (
      <div className="sign-page-container">
         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
         <Field 
              label="Email:"
              name="email"
              component={this.renderField} />

          <Field 
              label="Password:"
              name="password"
              type="password"
              component={this.renderField}/>

          <Field 
              label="Confirm Password:"
              name="passwordConfirm"
              type="password"
              component={this.renderField}/>

          <button action="submit" className="btn btn-primary pull-right">Signup</button>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Password does not match the confirm password.'
  }

  return errors
}

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(connect(null, {signupUser})(SignupPage));
