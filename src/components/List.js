import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, setNotes,deleteNote } from '../actions/notesAction';
import _ from 'lodash';
import Moment from 'react-moment';

class List extends Component {

  componentDidMount(){
    this.props.getNotes();
  }

  renderNotes(){
    console.log('state changed');
    return _.map(this.props.notes,(note,key)=>{
      return (
        <div key = {key}>
          <div className="card red lighten-5">
            <div className="card-content">
              <Moment className="right" format="YYYY/MM/DD">{note.date}</Moment>
            <span className="card-title">{ note.title }</span>
          <p>{ note.body } </p>
            </div>
            <div className="card-action">
              <button onClick={ () => this.props.deleteNote(key) } className="btn waves-effect waves-light pink lighten-2">Delete</button>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        {this.renderNotes()}
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps,{ getNotes, setNotes, deleteNote })(List);
