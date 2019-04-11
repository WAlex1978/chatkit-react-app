import React, { Component } from 'react';
import styled from 'styled-components';
import Logout from './Logout';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(200, 200, 200);
    height: 100%;
    width: 250px;
`

class SideBar extends Component {
    render() { 
        return (
            <Background>
                <div style={{flex: 1}} />
                <Logout />
            </Background>
        );
    }
}
 
export default SideBar;