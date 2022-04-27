import firebase from "firebase";


//Paste your firebaseConfig here
var firebaseConfig = {
  apiKey: "AIzaSyDMFDIC7LTd6UaYvGIlM8ceQ3EDudLRhkg",
  authDomain: "e-ride-stage-4-69a31.firebaseapp.com",
  projectId: "e-ride-stage-4-69a31",
  storageBucket: "e-ride-stage-4-69a31.appspot.com",
  messagingSenderId: "727753851441",
  appId: "1:727753851441:web:f6b3b84db2eb72e6710b10"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


