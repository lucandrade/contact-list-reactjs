import React, { Component } from 'react';
import { Link } from 'react-router';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

import GetContacts from '../requests/GetContacts';

export default class Contacts extends Component {
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
        const addButton = <Link to='/novo'>
            <FloatingActionButton
                className='floating-action-button'>
                <ContentAdd />
            </FloatingActionButton>
        </Link>;
        return (
            <div>
                Home {this.state.contacts.length}
                {addButton}
            </div>
        );
    }
}
