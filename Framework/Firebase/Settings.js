// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyCHAWmUn_hXwz97d1ZhlfeAAjTdmOn_j3U",
    authDomain: "lexxmedia-3c9cc.firebaseapp.com",
    projectId: "lexxmedia-3c9cc",
    storageBucket: "lexxmedia-3c9cc.firebasestorage.app",
    messagingSenderId: "33580788248",
    appId: "1:33580788248:web:d32e11dc8a7aa1ada3716d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export const imgStorage = firebase.storage;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});
export { auth };