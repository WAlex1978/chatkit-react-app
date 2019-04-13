import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Background = styled.div`
    background-color: rgb(250, 250, 250);
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: #000;
    font-size: 19px;
    text-align: left;
    padding-left: 15px;
    height: 44px;
`
const HR = styled.div`
    background-color: rgb(160, 160, 160);
    height: 1px;
    width: 100%;
    margin: auto;
`

class CurrentChannel extends Component {
    render() { 
        return (
            <Fragment>
            <Background># {this.props.currentRoom.name}</Background>
            <HR/>
            </Fragment>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        username: state.username,
        currentRoom: state.currentRoom,
    }
}

export default connect (mapStateToProps) (CurrentChannel);