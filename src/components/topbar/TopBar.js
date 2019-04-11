import React, { Component } from 'react';

// Style declarations for top bar
const style = {
    backgroundColor: "rgb(0, 123, 255)",
    width: "100vw",
    height: "40px",
}

class TopBar extends Component {
    render() { 
        return (
            <div style={style}></div>
        );
    }
}
 
export default TopBar;