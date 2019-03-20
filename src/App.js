import React, { Component } from 'react';
import Note from './components/Note';
import List from './components/List';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {db} from './firebase';
import { connect } from 'react-redux';
import { getNotes, setNotes, deleteNote } from './actions/notesAction';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
      <Route path="/" component={ Home } exact={true}/>
      <Route path="/login" component={ Login } exact={true}/>
      </Switch>
    </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(App);
