// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX6q6bGq6FeBjk3BcIN0XWwMelc2VnyLQ",
  authDomain: "asdatodo-541e9.firebaseapp.com",
  projectId: "asdatodo-541e9",
  storageBucket: "asdatodo-541e9.appspot.com",
  messagingSenderId: "1013297531981",
  appId: "1:1013297531981:web:6a0913e307df76e98ca004"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };