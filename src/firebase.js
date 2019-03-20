import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCb__7TQ_RJ9geTJ-cIyWe7O1F_FhtGX00",
    authDomain: "practice-6dc42.firebaseapp.com",
    databaseURL: "https://practice-6dc42.firebaseio.com",
    projectId: "practice-6dc42",
    storageBucket: "practice-6dc42.appspot.com",
    messagingSenderId: "41422559314"
  };
  firebase.initializeApp(config);

  export const db = firebase.database().ref('/practice');
