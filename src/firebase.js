import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDNot8mfbXZHCbIsKOzZ9C9p_LtBr4lifs",
  authDomain: "disney-plus-b63d0.firebaseapp.com",
  databaseURL: "https://disney-plus-b63d0-default-rtdb.firebaseio.com",
  projectId: "disney-plus-b63d0",
  storageBucket: "disney-plus-b63d0.appspot.com",
  messagingSenderId: "360230411584",
  appId: "1:360230411584:web:4c6a3f810959e400ec6ea5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export { auth, provider, storage, db};
