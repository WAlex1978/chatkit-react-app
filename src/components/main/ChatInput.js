import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormInput, InputGroup, InputGroupAddon, Button } from 'shards-react';
import { sendMessage } from '../../services/message';

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}

const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    height: 80px;
    padding: 15px;
`

const HR = styled.div`
    background-color: rgba(45, 45, 45, .5);
    height: .5px;
    width: 95%;
    margin: auto;
`

class ChatInput extends Component {
    state = {
        text: '',
    }

    onChange = (e) => {
        this.setState({text: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        sendMessage(this.props.currentUser, this.state.text);
        this.setState({text: ''});
    }

    render() { 
        return (
            <Fragment>
                <HR />
                <Input>
                    <InputGroup>
                        <FormInput value={this.state.text} onChange={this.onChange} placeholder="Message" />
                        <InputGroupAddon type="append">
                            <Button onClick={this.onSubmit} theme="primary">Enter</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Input>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (ChatInput);