import React, { Component } from "react";
import { getUserProfile } from "../lib/auth";

export class Profile extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        getUserProfile().then(user => this.setState({ user }))
    }
  render() {
    return <pre>
        { JSON.stringify(this.state.user, null, 2)}
    </pre>;
  }
}

export default Profile;
