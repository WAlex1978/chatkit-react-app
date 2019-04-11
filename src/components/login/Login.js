import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormInput, Button } from 'shards-react';
import { login } from '../../services/authenticate';

import LoginBackground from './LoginBackground';
import LoginCard from './LoginCard';
import Spinner from './Spinner';

const mapDispatchToProps = (dispatch) => {
    return {

        // Set the current user in global state
        setCurrentUser: (currentUser) => {dispatch({
            type: 'SET_CURRENT_USER',
            currentUser,
        })}
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    }
}

class Login extends Component {
    state = {
        username: '',
    }

    // Check if username has already been set
    componentWillMount = async () => {
        if (this.props.username !== null) {

            // Login with set username and update currentUser
            const currentUser = await login(this.props.username);
            this.props.setCurrentUser(currentUser);
        }
    }

    changeUsername = (e) => {
        this.setState({username: e.target.value});
    }

    // On submit, create and authenticate user
    onSubmit = async (e) => {
        e.preventDefault();

        // Check if input is not empty
        if (this.state.username !== '') {
            const currentUser = await login(this.state.username);
            this.props.setCurrentUser(currentUser);
        }
    }

    render() { 
        // If username has already been defined
        // Username can be defined if pulled from local storage
        if (this.props.username === null) {
            return (
                <LoginBackground image>
                    <LoginCard>
                        <FormInput placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
                        <Button block theme="primary" onClick={this.onSubmit} style={{marginTop: "5px"}}>Join Chatroom</Button>
                    </LoginCard>
                </LoginBackground>
            );
        }

        // If username has been defined
        // Show loading spinner
        else {
            return (
                <LoginBackground>
                    <Spinner/>
                </LoginBackground>
            )
        }
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Login);