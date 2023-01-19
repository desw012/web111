import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCksLqtprlx3kL1O8JwOFL49u-SZ3_Vrys",
    authDomain: "ga4-test-fbd52.firebaseapp.com",
    databaseURL: "https://ga4-test-fbd52-default-rtdb.firebaseio.com",
    projectId: "ga4-test-fbd52",
    storageBucket: "ga4-test-fbd52.appspot.com",
    messagingSenderId: "661953434461",
    appId: "1:661953434461:web:7b318aa68c6134476c4eb4",
    measurementId: "G-9D4196EHQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);