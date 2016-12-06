import React, { Component } from 'react';

import GetContacts from '../requests/GetContacts';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    };

    componentDidMount() {
        const me = this;
        GetContacts()
            .then(res => me.setState({
                contacts: res
            }));
    }

    render() {
        return (
            <div>Home {this.state.contacts.length}</div>
        );
    }
}
