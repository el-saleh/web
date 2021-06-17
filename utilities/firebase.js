import firebase from "firebase/app";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCh1EsFe0mTZAUT1oU4vKwj2pZmMCsXqts",
    authDomain: "elsaleh-258d4.firebaseapp.com",
    projectId: "elsaleh-258d4",
    storageBucket: "elsaleh-258d4.appspot.com",
    messagingSenderId: "1053167466968",
    appId: "1:1053167466968:web:01c2bdda5b99a414a95aad"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}else {
   firebase.app(); // if already initialized, use that one
}


export default firebase;