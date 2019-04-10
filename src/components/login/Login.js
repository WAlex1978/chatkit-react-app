import React, { Component } from 'react';
import { FormInput, Card, Button } from 'shards-react';

class Login extends Component {
    state = {
        username: '',
    }

    changeUsername = (e) => {
        this.setState({username: e.target.value});
    }

    render() { 
        return (
            <Card>
                <FormInput placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
                <FormInput placeholder="Password" />
                <Button theme="info">Login</Button>
            </Card>
        );
    }
}
 
export default Login;