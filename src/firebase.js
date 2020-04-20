import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyC7SqrFQf64oSVceSBypCiwJRdkpCVmKi8",
    authDomain: "react-slack-clone-c8118.firebaseapp.com",
    databaseURL: "https://react-slack-clone-c8118.firebaseio.com",
    projectId: "react-slack-clone-c8118",
    storageBucket: "react-slack-clone-c8118.appspot.com",
    messagingSenderId: "215490999033",
    appId: "1:215490999033:web:e9a1cd630803733003a828",
    measurementId: "G-YDVJDHTE49"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export default firebase;

