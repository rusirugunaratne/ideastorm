import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDM6MAbiXVXPmye6HTqGkrpLYMUz0U2QQU",
    authDomain: "linkedin-clone-yt-aaa2d.firebaseapp.com",
    projectId: "linkedin-clone-yt-aaa2d",
    storageBucket: "linkedin-clone-yt-aaa2d.appspot.com",
    messagingSenderId: "889337492476",
    appId: "1:889337492476:web:67acc4dadc3d4347093879"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth()



//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

  export {db, auth};