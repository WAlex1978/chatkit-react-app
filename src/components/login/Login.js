import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormInput, Button } from 'shards-react';
import { login } from '../../services/authenticate';
import { saveState } from '../../localStorage';

import LoginBackground from './LoginBackground';
import LoginCard from './LoginCard';
import Spinner from './Spinner';

class Login extends Component {
    state = {
        username: '',
    }

    componentWillMount = () => {
        if (this.props.username !== null) {
            this.logIn(this.props.username);
        }
    }

    onChange = (e) => {
        this.setState({username: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.logIn(this.state.username);
    }

    checkValid = (username) => {
        if (username === '' || username === null || username.length > 12)
            return false;

        return true;
    }

    logIn = async (username) => {
        try {

            // Check if username is blank or null
            if (this.checkValid(username) !== true) {
                throw Error ("Invalid username");
            }

            // Login with set username and update currentUser
            const currentUser = await login(username, this.props.updatePresence);
            this.props.setCurrentUser(currentUser);

            // Add username to local state
            saveState({currentUser: currentUser.id});
        }
        catch(err) {
            console.log(err);
        }
    }

    render() { 
        // If username has already been defined
        // Username can be defined if pulled from local storage
        if (this.props.username === null) {
            return (

                // Render background image
                <LoginBackground image>
                    <LoginCard>
                        <FormInput placeholder="Username" value={this.state.username} onChange={this.onChange}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        // Set the current user in global state
        setCurrentUser: (currentUser) => {dispatch({
            type: 'SET_CURRENT_USER',
            currentUser,
        })},

        // Subscribe to user presence
        updatePresence: (state, user) => {dispatch({
            type: 'UPDATE_PRESENCE',
            state,
            user,
        })}
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Login);