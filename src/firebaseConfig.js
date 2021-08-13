import firebase from 'firebase';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import 'firebase/messaging'; // for cloud messaging
import 'firebase/functions'; // for cloud functions

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB0BbVxzUzuAqMSfIOth1gAV5OlxCSeLL0",
    authDomain: "kinkslink.firebaseapp.com",
    projectId: "kinkslink",
    storageBucket: "kinkslink.appspot.com",
    messagingSenderId: "726566974518",
    appId: "1:726566974518:web:903c3beb0a10daff4c1497",
    measurementId: "G-MH1VZCTKPF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const rdb = firebase.database()
const currentUser = auth.currentUser


// firebase collections
const usersCollection = db.collection('users')



export {
    db,
    rdb,
    auth,
    currentUser,
    storage,
    usersCollection,
    firebase

}