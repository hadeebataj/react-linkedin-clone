import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfIwNVkrYj0A0wGi5H2Lyh7mSTwRVoGnM",
  authDomain: "linkedin-clone-dc87c.firebaseapp.com",
  projectId: "linkedin-clone-dc87c",
  storageBucket: "linkedin-clone-dc87c.appspot.com",
  messagingSenderId: "205212465610",
  appId: "1:205212465610:web:35df7a1c958ee69290b733",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
