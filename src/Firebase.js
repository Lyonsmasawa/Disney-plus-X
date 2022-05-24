import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZpd8oy9cnu5bSQ5J4a4YfCwr_Npb3Ng8",
    authDomain: "disney-clonex.firebaseapp.com",
    projectId: "disney-clonex",
    storageBucket: "disney-clonex.appspot.com",
    messagingSenderId: "383452774085",
    appId: "1:383452774085:web:d208fbcf18b5ea4e6cbaac",
    measurementId: "G-NVHT7LKEWX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = 
