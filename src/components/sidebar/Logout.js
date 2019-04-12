import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'shards-react';

class Logout extends Component {

    // Disconnect current user from subscriptions
    // Remove user from local storage then clean global store
    logOut = async () => {
        try {
            await this.props.currentUser.disconnect();
            localStorage.removeItem('user');
            this.props.logOut();
        }
        catch(err) {
            console.log(err);
        }
    }

    render() { 
        return (
            <Button block squared theme="dark" onClick={() => this.logOut()}>
                Logout
            </Button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {dispatch({type: 'LOG_OUT'})}
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Logout);