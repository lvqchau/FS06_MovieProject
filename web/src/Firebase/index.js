import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0KSRNoc584cg-yfNuvt5Y3jQ0EwYRxpo",
  authDomain: "movie-project-90bd8.firebaseapp.com",
  databaseURL: "https://movie-project-90bd8.firebaseio.com",
  projectId: "movie-project-90bd8",
  storageBucket: "movie-project-90bd8.appspot.com",
  messagingSenderId: "958646390036",
  appId: "1:958646390036:web:d507947ae3f1ba0dd9c601"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
