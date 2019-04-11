import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import TopBar from '../topbar/TopBar';
import SideBar from '../sidebar/SideBar';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';

// Style declaration for the main body
const Body = styled.div`
    background-color: rgb(228, 231, 238);
    display: flex;
    flex-direction: column;
    height: 100vh;
`

class Main extends Component {

    // Subscribe to room on component mount
    componentWillMount = () => {
        this.subscribe();
    }

    subscribe = () => {
        try{
            
            // Subscribe to all three rooms
            this.props.rooms.forEach((room, i) => {
                this.props.currentUser.subscribeToRoomMultipart({
                    roomId: room.id,
                    hooks: {
                        onMessage: message => {
                            if (message.parts[0].payload.content !== 'DELETED') {
                                this.props.fetchMessages(message);
                            }
                        }
                    },
                    messageLimit: 100,
                });
            })
        }
        catch(err) {
            console.log(err);
        }
    }

    render() { 
        return (
            <Body>
                <TopBar/>
                <div style={{display: "flex", flex: 1}}>
                    <SideBar/>
                    <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                        <ChatBody/>
                        <ChatInput/>
                    </div>
                </div>
            </Body>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        messages: state.messages,
        rooms: state.rooms,
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
 
export default connect (mapStateToProps, mapDispatchToProps) (Main);