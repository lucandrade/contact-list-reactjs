import React, { Component } from 'react';

import './App.css';
import Guest from './Guest';
import Loading from './pages/Loading';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        const me = this;
        setTimeout(() => {
            me.setState({
                loading: false
            });
        }, 1500);
    }
    
    render() {
        const { loading } = this.state;
        let view = <Loading />;

        if (!loading) {
            view = <Guest />;
        }

        return view;
    }
}
