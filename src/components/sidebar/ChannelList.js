import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Channels = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-align: left;
    padding-left: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #000;
`

const Channel = styled.div`
    padding-left: 15px;
    cursor: pointer;
`

class ChannelList extends Component {
    changeRoom = (currentRoom) => {
        this.props.changeRoom(currentRoom)
    }

    render() { 
        return (
            <Channels>
                Channels

                {/* On click changes the current room to a new one */}
                <Channel onClick={() => this.changeRoom({name: 'announcements', id: '19390485'})}># announcements</Channel>
                <Channel onClick={() => this.changeRoom({name: 'general', id: '19390335'})}># general</Channel>
                <Channel onClick={() => this.changeRoom({name: 'feedback', id: '19390487'})}># feedback</Channel>
            </Channels>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeRoom: currentRoom => {dispatch({
            type: 'CHANGE_ROOM',
            currentRoom,
        })}
    }
}

export default connect (null, mapDispatchToProps) (ChannelList);