import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import {loginUser} from '../actions/index'

class LoginPage extends Component {

  handleFormSubmit({email, password}) {
    this.props.loginUser(email, password, () => {
      this.props.history.push('/feature')
    })
  }

  renderErrors() {
    if (this.props.errorMessgae) {
      return <div className="alert alert-danger">{this.props.errorMessgae}</div>
    }
  }

  render() {

    const {handleSubmit} = this.props

    return (
      <div className="login-page-container">
         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label>Email:</label>
            <Field 
              name="email"
              component="input"
              type="text" 
              className="form-control" />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <Field 
              name="password"
              component="input"
              type="text" 
              className="form-control" />
          </div>
          {this.renderErrors()}
          <button action="submit" className="btn btn-primary pull-right">Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessgae: state.auth.error}
}

export default reduxForm({
  form: 'login', // a unique identifier for this form
  fields: ['email', 'password']
})(connect(mapStateToProps, {loginUser})(LoginPage));
