import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, setNotes } from '../actions/notesAction';

class Note extends Component {

  constructor(props){
    super(props);

    this.state = {
      title:'',
      body:'',
      time: ''
    }

    this.handleOnCh = this.handleOnCh.bind(this);
    this.handleOnSub = this.handleOnSub.bind(this);
  }

  handleOnCh(e){
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleOnSub(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      time: Date.now()
    }
    this.props.setNotes(note);
    console.log(this.state);
  }

  render() {
    return (
      <div>
          <h5>Add</h5>
          <div className="row">

            <form className="col s12"  onSubmit={ this.handleOnSub }>
              <div className="row">
                 <div className="input-field col s12">
                   <input id="title" type="text" onChange={ this.handleOnCh } className="validate"/>
                 <label htmlFor="title">Title</label>
                 </div>
               </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea id="body"  onChange={ this.handleOnCh } className="materialize-textarea"></textarea>
                <label htmlFor="body">Body</label>
                </div>
              </div>

              <button className="btn waves-effect waves-light pink lighten-2" type="submit" name="action">Add
              </button>
            </form>

          </div>
      </div>
    );
  }
}

export default connect(null,{ getNotes, setNotes })(Note);
