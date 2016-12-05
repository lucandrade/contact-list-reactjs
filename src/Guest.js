import React, { Component } from 'react';
import { hashHistory, Router, Route } from 'react-router';

import Login from './pages/Login';
import Signin from './pages/Signin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Guest extends Component {
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children ? this.props.children : <Login />}
            </MuiThemeProvider>
        );
    }
}

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Guest}>
                    <Route path="login" component={Login} />
                    <Route path="signin" component={Signin} />
                </Route>
            </Router>
        );
    }
}
