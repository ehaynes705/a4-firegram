
import * as firebase from 'firebas/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_kL-PuV5Z_1mlC8qZylyduib-dJ7fr-Y",
    authDomain: "ehaynes705-firebase-a4.firebaseapp.com",
    databaseURL: "https://ehaynes705-firebase-a4.firebaseio.com",
    projectId: "ehaynes705-firebase-a4",
    storageBucket: "ehaynes705-firebase-a4.appspot.com",
    messagingSenderId: "723503249523",
    appId: "1:723503249523:web:d747e23ca8538baab41206"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore}