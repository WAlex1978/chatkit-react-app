import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: rgb(192, 192, 192);
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
            <Background/>
            <HR/>
            </Fragment>
        );
    }
}

export default CurrentChannel;