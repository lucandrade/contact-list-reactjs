import React, { Component } from 'react';
import { hashHistory, Router, Route } from 'react-router';

import Home from './pages/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Logged extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.props.children ? this.props.children : <Home />}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Logged}>
                    <Route path="home" component={Home} />
                    <Route path="*" component={Home}/>
                </Route>
            </Router>
        );
    }
}
