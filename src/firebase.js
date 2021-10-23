import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkHhuNNsCRWArWh4zCrfjgg79TFpQnQs4",
  authDomain: "project-1cc06.firebaseapp.com",
  projectId: "project-1cc06",
  storageBucket: "project-1cc06.appspot.com",
  messagingSenderId: "336526294869",
  appId: "1:336526294869:web:694d33bec7ce8bebd0f9dc"
};

// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);

export default fire;