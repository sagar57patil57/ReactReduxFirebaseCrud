import React, { Component } from 'react';
import Note from './Note';
import List from './List';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Note/>
      <hr/>
      <h5>List</h5>
        <List/>
      </div>
    );
  }
}

export default Home;
