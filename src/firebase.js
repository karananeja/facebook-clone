import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbE9uyySe6v149bfeG8oJCv3LjEct51Ko',
  authDomain: 'facebook-clone-577ad.firebaseapp.com',
  projectId: 'facebook-clone-577ad',
  storageBucket: 'facebook-clone-577ad.appspot.com',
  messagingSenderId: '1084797755426',
  appId: '1:1084797755426:web:68ef4def1c9d8771e8ea7b',
  measurementId: 'G-HRGK0FVE3N',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
