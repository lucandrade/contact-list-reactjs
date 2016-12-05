import React, { Component } from 'react';
import { hashHistory, Router, Route } from 'react-router';

import './App.css';
import Guest from './Guest';
import Login from './pages/Login';
import Signin from './pages/Signin';

class App extends Component {
    render() {
        return (
            <Guest>
                {this.props.children ? this.props.children : <Login />}
            </Guest>
        );
    }
}

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="login" component={Login} />
                    <Route path="signin" component={Signin} />
                </Route>
            </Router>
        );
    }
}
