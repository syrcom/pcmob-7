// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFa9Y4zinCBysIBSWhTFPFnV-p5FbcENI",
  authDomain: "fir-mob7.firebaseapp.com",
  projectId: "fir-mob7",
  storageBucket: "fir-mob7.appspot.com",
  messagingSenderId: "405984601287",
  appId: "1:405984601287:web:784c9a642c874f5cbacae2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app()
}

const auth = firebase.auth()

export { auth };