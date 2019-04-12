import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import CurrentChannel from './CurrentChannel';
import SideBar from '../sidebar/SideBar';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import { subscribe } from '../../services/subscribe';

// Style declaration for the main body
const Body = styled.div`
    background-color: rgb(228, 231, 220);
    display: flex;
    flex-direction: column;
    height: 100vh;
`

class Main extends Component {

    // Subscribe to room on component mount
    componentWillMount = () => {
        subscribe(this.props.currentUser, this.props.rooms, this.props.fetchMessages)
    }

    render() { 
        return (
            <Body>
                <div style={{display: "flex", flex: 1}}>
                    <SideBar/>
                    <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                        <CurrentChannel/>
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