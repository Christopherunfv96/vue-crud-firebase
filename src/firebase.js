import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD1tDaP9Ug2lTm7FkAhjcMxe9WQJa1SqIo",
    authDomain: "crud-vue-firebase-f908e.firebaseapp.com",
    databaseURL: "https://crud-vue-firebase-f908e.firebaseio.com",
    projectId: "crud-vue-firebase-f908e",
    storageBucket: "crud-vue-firebase-f908e.appspot.com",
    messagingSenderId: "507607790858",
    appId: "1:507607790858:web:0dbfc3560741859d7276f3",
    measurementId: "G-W8L7GYZH0G"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default      firebaseApp.firestore()
