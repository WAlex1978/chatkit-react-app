import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        messages: state.messages,
    }
}

// Style declarations
// Style declaration for the chat body
const Body = styled.div`
    flex: 1;
    font-family: 'Roboto', sans-serif;
    color: #000;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    overflow: auto;
`

// Style declaration for displaying senderId
const Title = styled.div`
    font-size: 20px;
    margin-top: 20px;
`

// Style declaration for displaying text contents
const P = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 5px;
    padding: 0px
`

class ChatBody extends Component {

    // Scroll to bottom of chat on update
    componentDidUpdate() {
        this.bottom.scrollIntoView();
    }

    render() { 
        return (
            <Body>
                {/* Loop through all messages */}
                {this.props.messages.map((message, i) => (
                    <span key={i}>

                        {/* If the senderId for current message is not the same as previous message */}
                        {/* Or if this is the first message, then do not display senderId */}
                        {i === 0 || this.props.messages[i].senderId !== this.props.messages[i-1].senderId ?
                        <Title>{message.senderId}</Title> : null}
                        <P>{message.body}</P>
                    </span>
                ))}

                {/* Empty div to mark bottom of chat */}
                <div ref={(el) => {this.bottom = el;}} />
            </Body>
        );
    }
}
 
export default connect (mapStateToProps) (ChatBody);