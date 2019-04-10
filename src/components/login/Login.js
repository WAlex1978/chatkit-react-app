import React, { Component } from 'react';
import { FormInput, Card, Button } from 'shards-react';
import { login } from '../../services/authenticate';

class Login extends Component {
    state = {
        username: '',
    }

    changeUsername = (e) => {
        this.setState({username: e.target.value});
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let currentUser = await login(this.state.username);
        console.log(currentUser);
    }

    render() { 
        return (
            <Card>
                <FormInput placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
                <FormInput placeholder="Password" />
                <Button theme="info" onClick={this.onSubmit}>Login</Button>
            </Card>
        );
    }
}
 
export default Login;