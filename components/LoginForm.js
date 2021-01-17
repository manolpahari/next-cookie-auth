import React, { Component } from "react";
import axios from "axios";
import { loginUser } from "../lib/auth";
import Router from "next/router";

export class LoginForm extends Component {
  state = {
    email: "Rey.Padberg@karina.biz",
    password: "ambrose.net",
    error: "",
    isLoading: false,
  };

  handleChange = (event) => {
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: "", isLoading: true })
    loginUser(this.state.email, this.state.password)
        .then(() =>
            Router.push("/profile"))
        .catch(this.showError)
  };

  showError = (err) => {
      console.log('err ====', err);
      const error = err.response && err.response.data || err.message;
      return this.setState({ error, isLoading: false })
  }

  render() {
    const { email, password, error, isLoading } = this.state;
    return (
      <div className='login-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='email'
            onChange={this.handleChange}
          ></input>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={this.handleChange}
          ></input>
          <button type='submit' disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
        </form>
        { error && <div>{error}</div>}
        <style jsx>{`
          .login-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .login-form form {
            display: flex;
            flex-direction: column;
          }

          form input {
            padding: 0.5em;
            margin-bottom: 1em;
          }

          form input[type:password] {
            font-weight: 700;
          }

          form button {
            font-size: 1.2rem;
            font-weight: bold;
            background: #f60;
            color: #fff;
            padding: 0.3em;
            border-radius: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default LoginForm;
