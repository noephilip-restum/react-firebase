import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyDEyHLOyBXiIMYRcVU5nSaL60zmvxJxacM",
  authDomain: "react-app-5e75b.firebaseapp.com",
  databaseURL: "https://react-app-5e75b-default-rtdb.firebaseio.com",
  projectId: "react-app-5e75b",
  storageBucket: "react-app-5e75b.appspot.com",
  messagingSenderId: "316783541323",
  appId: "1:316783541323:web:82205e3bc7f76e4139a1ce",
  measurementId: "G-HVDY5QSJDW",
};

const app = initializeApp(config);
const db = getDatabase(app);

export { db };
