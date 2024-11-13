import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA89SRZYphKf2soqfv2gUueW-ar7iEAQFY",
  authDomain: "usernest-68ecd.firebaseapp.com",
  projectId: "usernest-68ecd",
  storageBucket: "usernest-68ecd.firebasestorage.app",
  messagingSenderId: "1085952428935",
  appId: "1:1085952428935:web:7f63732bc3517ca202a122",
  databaseURL: "https://usernest-68ecd-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
