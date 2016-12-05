import React, { Component } from 'react';
import { Link } from 'react-router';
import { Paper, AppBar, TextField, RaisedButton } from 'material-ui';

export default class Signin extends Component {
    render() {
        return (
            <div className="login-container">
                <AppBar title="Cadastrar" showMenuIconButton={false} />
                <Paper zDepth={1} className="form">
                    <TextField
                        hintText="Nome"
                        floatingLabelText="Nome"
                        fullWidth={true}
                        name="name" />
                    <TextField
                        type="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        name="email" />
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
                        Já é cadastrado? <Link to="/login">Faça login</Link>
                    </div>
                </Paper>
            </div>
        );
    }
}
