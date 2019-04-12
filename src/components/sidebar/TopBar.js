import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: rgb(41, 44, 48);
    height: 44px;
`
const HR = styled.div`
    background-color: rgb(25, 25, 25);
    height: 1px;
    width: 100%;
    margin: auto;
`

class CurrentChannel extends Component {
    render() { 
        return (
            <Fragment>
            <Background/>
            <HR/>
            </Fragment>
        );
    }
}

export default CurrentChannel;