import React, { Component } from 'react';
import { FormInput, InputGroup, InputGroupAddon, Button } from 'shards-react';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90px",
    padding: "20px",
}

class ChatInput extends Component {
    state = {  }
    render() { 
        return (
            <div style={style}>
                <InputGroup>
                    <FormInput placeholder="Message" />
                    <InputGroupAddon type="append">
                        <Button theme="secondary">Enter</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}
 
export default ChatInput;