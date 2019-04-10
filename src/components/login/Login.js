import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormInput, Card, Button } from 'shards-react';
import { login } from '../../services/authenticate';

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (currentUser) => {dispatch({
            type: 'SET_CURRENT_USER',
            currentUser,
        })}
    }
}

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

        this.props.setCurrentUser(currentUser);
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
 
export default connect (null, mapDispatchToProps) (Login);