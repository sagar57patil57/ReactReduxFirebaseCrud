import { db } from '../firebase';

export function getNotes(){
  return dispatch => {
    //async
    db.on('value',(snapshot)=>{
      dispatch({
        type: 'GETNOTES',
        payload: snapshot.val()
      });
    })
  }
}

export function setNotes(note){
  return dispatch => {
    db.push(note);
  }
}

export function deleteNote(id){
  return dispatch => {
    db.child(id).remove()
  }
}
