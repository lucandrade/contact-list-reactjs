import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {}
        }
    };

    render() {
        return (
            <div>
                <h4 className='title'>
                    Contato
                    <Link to='/' className="icon">&times;</Link>
                </h4>
            </div>
        );
    }
}
