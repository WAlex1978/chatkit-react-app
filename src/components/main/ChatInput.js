import React, { Component } from 'react';
import styled from 'styled-components';
import { FormInput, InputGroup, InputGroupAddon, Button } from 'shards-react';

const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    height: 90px;
    padding: 20px;
`

class ChatInput extends Component {
    state = {  }
    render() { 
        return (
            <Input>
                <InputGroup>
                    <FormInput placeholder="Message" />
                    <InputGroupAddon type="append">
                        <Button theme="primary">Enter</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Input>
        );
    }
}
 
export default ChatInput;