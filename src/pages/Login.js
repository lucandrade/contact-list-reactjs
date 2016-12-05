import React, { Component } from 'react';
import { Link } from 'react-router';
import { Paper, AppBar, TextField, RaisedButton } from 'material-ui';

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <AppBar title="Login" showMenuIconButton={false} />
                <Paper zDepth={1} className="form">
                    <TextField
                        type="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        name="username" />
                    <TextField
                        type="password"
                        hintText="Senha"
                        floatingLabelText="Senha"
                        fullWidth={true}
                        name="password" />
                    <br />
                    <br />
                    <RaisedButton
                        label="Enviar"
                        primary={true}
                        fullWidth={true} />
                    <br />
                    <br />
                    <div className="message">
                        Não é cadastrado? <Link to='/signin'>Cadastrar</Link>
                    </div>
                </Paper>
            </div>
        );
    }
}
