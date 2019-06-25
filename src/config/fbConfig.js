import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPiDWmh8m4L7uyWM3FkqUvbYZ1wns3Rhs",
  authDomain: "karik-plan.firebaseapp.com",
  databaseURL: "https://karik-plan.firebaseio.com",
  projectId: "karik-plan",
  storageBucket: "karik-plan.appspot.com",
  messagingSenderId: "363576898117"
};

firebase.initializeApp(config);

export default firebase;
