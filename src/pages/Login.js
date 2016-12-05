import React, { Component } from 'react';
import { Link } from 'react-router';
import { Paper, AppBar, TextField, RaisedButton } from 'material-ui';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
            username: '',
            password: ''
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { state } = this;
        state[name] = value;
        this.setState(state);
    }

    handleSubmit() {
        const me = this;
        this.setState({
            sending: true
        });
        setTimeout(() => {
            me.setState({
                sending: false
            });
        }, 1500);
    }

    render() {
        const { username, password, sending } = this.state;
        return (
            <div className="login-container">
                <AppBar title="Login" showMenuIconButton={false} />
                <Paper zDepth={1} className="form">
                    <TextField
                        type="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        onChange={this.handleChange.bind(this)}
                        value={username}
                        name="username" />
                    <TextField
                        type="password"
                        hintText="Senha"
                        floatingLabelText="Senha"
                        fullWidth={true}
                        onChange={this.handleChange.bind(this)}
                        value={password}
                        name="password" />
                    <br />
                    <br />
                    <RaisedButton
                        label={sending ? 'Enviando' : 'Enviar'}
                        primary={true}
                        fullWidth={true}
                        disabled={sending}
                        onClick={this.handleSubmit.bind(this)} />
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
