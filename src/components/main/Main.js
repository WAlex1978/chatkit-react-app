import React, { Component } from 'react';
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

class Main extends Component {
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
 
export default Main;