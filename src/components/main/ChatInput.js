import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormInput, InputGroup, InputGroupAddon, Button } from 'shards-react';
import { sendMessage } from '../../services/message';

// Style declarations for chat input area
const Input = styled.div`
    background-color: rgb(242, 244, 246);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    height: 80px;
    padding: 15px;
`

const HR = styled.div`
    background-color: rgb(189, 200, 210);
    height: 1px;
    width: 100%;
    margin: auto;
`

class ChatInput extends Component {
    state = {
        text: '',
    }

    // Send typing indicator when value is being changed
    onChange = (e) => {
        let currentUser = this.props.currentUser;
        this.setState({text: e.target.value});
        currentUser.isTypingIn({roomId: this.props.currentRoom.id});
    }

    // On submit, send message
    // Reset state to clear input
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.text !== '') {
            sendMessage(this.props.currentUser, this.state.text, this.props.currentRoom.id);
            this.setState({text: ''});
        }
    }

    render() { 
        return (
            <form onSubmit={this.onSubmit}>
                <HR />
                <Input>
                    <InputGroup>
                            <FormInput value={this.state.text} onChange={this.onChange} placeholder={"# " + this.props.currentRoom.name} />
                            <InputGroupAddon type="append">
                                <Button type="submit" theme="primary">Enter</Button>
                            </InputGroupAddon>
                    </InputGroup>
                </Input>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        currentRoom: state.currentRoom,
    }
}

export default connect (mapStateToProps) (ChatInput);