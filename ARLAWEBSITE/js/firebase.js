// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCW18YJ2b79xfL8gjZg-NprBb8Xq-sYJmY",
  authDomain: "arla-5fe7f.firebaseapp.com",
  databaseURL: "https://arla-5fe7f.firebaseio.com",
  projectId: "arla-5fe7f",
  storageBucket: "arla-5fe7f.appspot.com",
  messagingSenderId: "478356643620",
  appId: "1:478356643620:web:2c47543e9afc19d8641db1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseDB = firebase.firestore();

