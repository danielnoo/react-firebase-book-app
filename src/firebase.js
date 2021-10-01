
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDiyhlpRxmLWBPqDi_k_4_5MxkruT7hekk",
  authDomain: "fire-the-bookshelf-1a6fa.firebaseapp.com",
  projectId: "fire-the-bookshelf-1a6fa",
  storageBucket: "fire-the-bookshelf-1a6fa.appspot.com",
  messagingSenderId: "998714797496",
  appId: "1:998714797496:web:ae40191676bad2026ff34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const realtime = getDatabase(app);

export default realtime;



