import React, { Component } from 'react';
import ChatInput from './ChatInput';

const style = {
    display: "flex",
    flexDirection: "column",
    height: "94vh",
}

class Main extends Component {
    render() { 
        return (
            <div style={style}>
                <div style={{flex: 1}} />
                <ChatInput />
            </div>
        );
    }
}
 
export default Main;