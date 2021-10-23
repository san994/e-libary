import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB7SCZdGxFPipHgt_Q0vvrBIUR2x2WNgjA",
  authDomain: "e-library-ade21.firebaseapp.com",
  projectId: "e-library-ade21",
  storageBucket: "e-library-ade21.appspot.com",
  messagingSenderId: "854277230577",
  appId: "1:854277230577:web:05c7adf91042e8b2333e50"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
