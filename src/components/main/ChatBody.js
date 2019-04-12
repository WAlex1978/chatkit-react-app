import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import Fade from '@material-ui/core/Fade';
import { deleteMessage } from '../../services/message';

// Style declarations
// Style declaration for the chat body
const Body = styled.section`
    flex: 1;
    font-family: 'Roboto', sans-serif;
    color: #000;
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    overflow: auto;
`

// Style declarations for chat body
const Title = styled.div`
    font-size: 16px;
`

const P = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    width: 95%;
    padding: 0px
`

const Delete = styled.div`
    font-size: 10px;
    padding-right: 12px;
    cursor: pointer;
`

const HR = styled.div`
    background-color: rgba(45, 45, 45, .3);
    height: .8px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`

class ChatBody extends Component {
    state = {
        messageId: '',
    }

    // Scroll to bottom of chat on update
    componentDidUpdate(prevProps) {
        if (this.props.messages !== prevProps.messages) {
            this.bottom.scrollIntoView();
        }
    }

    onMouseEnter = (messageId) => {
        this.setState({messageId: messageId});
    }

    // Delete message then clean state
    deleteMessage = async (messageId) => {
        await deleteMessage(messageId);
        this.props.deleteMessage(messageId);
    }

    render() { 
        return (
            <Body>
                {/* Custom Scrollbar */}
                <Scrollbars autoHide>

                    {/* Loop through all messages */}
                    {this.props.messages.map((message, i) => (
                    <Fragment key={i}>{message.roomId !== this.props.currentRoom.id ? null : (

                            <div onMouseEnter={() => this.onMouseEnter(message.messageId)}>

                                {/* If the senderId for current message is not the same as previous message */}
                                {/* Or if the roomId for the current message is not the same as the previous message */}
                                {/* Or if this is the first message, then do not display senderId */}
                                {i === 0 || (this.props.messages[i].senderId !== this.props.messages[i-1].senderId
                                || this.props.messages[i].roomId !== this.props.messages[i-1].roomId ) ? (
                                    <span>

                                        {/* If message is not the first in list */}
                                        {/* If message is in the same room as the previous */}
                                        {/* Display horizontal rule, null if else */}
                                        {i !== 0 && this.props.messages[i].roomId === this.props.messages[i-1].roomId ? 
                                            <HR/> : null}
                                        
                                        <Fade in><Title>{message.senderId}</Title></Fade>
                                    </span>
                                ) : null}

                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <Fade in><P>{message.body}</P></Fade>

                                    {/* If hovering over element */}
                                    {/* If current user is sender of message */}
                                    {/* Display delete button, delete message onClick */}
                                    {message.senderId === this.props.currentUser.id && this.state.messageId === message.messageId ? 
                                    <Fade in><Delete onClick={() => this.deleteMessage(message.messageId)}>Delete</Delete></Fade> : null}
                                </div>

                            </div>)}

                    </Fragment> ))}

                    {/* Empty div to mark bottom of chat */}
                    <div ref={(el) => {this.bottom = el;}} />
                                
                </Scrollbars>
            </Body>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        messages: state.messages,
        currentRoom: state.currentRoom,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: messageId => {dispatch({
            type: 'DELETE_MESSAGE',
            messageId,
        })}
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (ChatBody);