import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "NA",
    authDomain: "NA",
    projectId: "NA",
    storageBucket: "NA",
    messagingSenderId: "NA",
    appId: "NA",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db; //you have just only one default export in a file!!!