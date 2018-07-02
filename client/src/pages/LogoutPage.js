import React, { Component } from 'react';
import {connect} from 'react-redux'
import {logoutUser} from '../actions/index'

class LogoutPage extends Component {

  componentDidMount() {
    this.props.logoutUser()
  }

  render() {

    return (
      <div className="logout-page-container">
        You are loggded out!
      </div>
    )
  }
}

export default connect(null, {logoutUser})(LogoutPage);
