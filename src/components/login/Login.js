import React, { Component } from 'react';
import { login } from './fetch';

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
        });
        this.props.history.push("/addPlayer");

    }

    render() {
        return (
            <div className="login">
                <form className="loginForm" onSubmit={this.submitHandler}>
                    {/* <img className="lordsLogo" src="https://cdn-www.bluestacks.com/bs-images/lords-mobile_logo.png" alt="lordsLogo" /> */}

                    <div className="userDiv">
                        <input id="username" type="text" onChange={this.inputChangeHandler} placeholder="Username" />
                    </div>

                    <div className="passDiv">
                        <input id="password" type="password" onChange={this.inputChangeHandler} placeholder="Password" />
                    </div>

                    <button className="loginBtn" type="submit">
                        Login
        </button>
                </form>
            </div>
        );
    }
}
export default Login;