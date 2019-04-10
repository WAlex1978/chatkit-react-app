import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Login from './components/login/Login';
import Main from './components/main/Main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

class App extends Component {
  render() {

    if (this.props.currentUser === null) {
      return <Login />;
    }

    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default connect (mapStateToProps) (App);
