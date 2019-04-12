import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Users = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: left;
    padding-left: 25px;
    padding-top: 20px;
    padding-bottom: 10px;
    color: #000;
    overflow: hidden;
`

const User = styled.div`
    padding-left: 15px;
`

class UserList extends Component {
    render() { 
        return (
            <Users>
                
                Online Users
                {this.props.onlineUsers.map((user, i) => (
                    <User key={i}>- {user.name}</User>
                ))}

            </Users>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        onlineUsers: state.onlineUsers,
    }
}

export default connect (mapStateToProps) (UserList);