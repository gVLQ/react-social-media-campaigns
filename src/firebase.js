import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAgGSwwmc0WhXfqO1GpOrXOftdSK5A-voc",
    authDomain: "vlq-social-media-campaigns.firebaseapp.com",
    databaseURL: "https://vlq-social-media-campaigns.firebaseio.com",
    projectId: "vlq-social-media-campaigns",
    storageBucket: "",
    messagingSenderId: "690913370148",
    appId: "1:690913370148:web:67e354c562ac6998"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;