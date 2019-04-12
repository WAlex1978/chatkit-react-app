import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import ChannelList from './ChannelList';
import UserList from './UserList';
import Logout from './Logout';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    background-color: rgb(200, 200, 200);
    height: 100%;
    width: 200px;
`

class SideBar extends Component {
    render() { 
        return (
            <Background>
                <TopBar/>
                <ChannelList/>
                <UserList/>
                <div style={{flex: 1}} />
                <Logout />
            </Background>
        );
    }
}
 
export default SideBar;