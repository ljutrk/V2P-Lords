import React, { Component } from 'react';
import { login } from './fetch';
import { headers } from '../../shared/utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    inputChangeHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();

        const loginData = {
            username: this.state.username,
            password: this.state.password
        }

        login(loginData);
        this.setState({
            username: "",
            password: ""
        })
    }
    render() {
        return (
            <div className="container">
                <div className="loginGrid">
                    <div className="loginForm">
                        <form onSubmit={this.submitHandler}>
                            <label>
                                Username
                        <input id="username" type="text" onChange={this.inputChangeHandler} />
                            </label>
                            <label>
                                Password
                        <input id="password" type="password" onChange={this.inputChangeHandler} />
                            </label>
                            <button type="submit">
                                LOG IN
                    </button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default Login;