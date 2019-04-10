import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import TopBar from '../topbar/TopBar';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';

const Body = styled.div`
    background-color: rgb(228, 231, 238);
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        messages: state.messages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: message => {dispatch({
            type: 'FETCH_MESSAGES',
            message,
        })}
    }
}

class Main extends Component {
    componentWillMount = () => {
        this.fetchMessages();
    }

    fetchMessages = () => {
        this.props.currentUser.subscribeToRoomMultipart({
            roomId: '19390335',
            hooks: {
                onMessage: message => {
                    this.props.fetchMessages({
                        senderId: message.senderId,
                        body: message.parts[0].payload.content,
                        date: message.createdAt,
                    });
                }
            },
            messageLimit: 100,
        });
    }

    render() { 
        return (
            <Body>
                <TopBar/>
                <ChatBody/>
                <ChatInput/>
            </Body>
        );
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Main);