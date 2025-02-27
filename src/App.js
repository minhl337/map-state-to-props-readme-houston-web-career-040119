import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.beans.length}</p>
      </div>
    );
  }
};

const mapStateToProps=(state)=>{
  return{beans:state.items}
};

export default connect(mapStateToProps)(App);
