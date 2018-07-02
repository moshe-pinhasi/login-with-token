import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route , Link, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import SignupPage from './pages/SignupPage'
import FeaturePage from './pages/FeaturePage'

import './App.scss';

class App extends Component {

  renderHeader() {
    if (this.props.authenticated) {
      return (
        <li className="list-inline-item">
          <Link to="/logout">Logout</Link>
        </li>      
      )
    } else {
      return [
        <li className="list-inline-item" key={1}><Link to="/login">Login</Link></li>,
        <li className="list-inline-item" key={2}><Link to="/signup">Signup</Link></li>
      ];
    }
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <header>
              <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                {this.renderHeader()}
              </ul>
            </header>

            <hr/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/logout" component={LogoutPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/signup" component={SignupPage}/>
              <Route path="/feature" component={FeaturePage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(App);
