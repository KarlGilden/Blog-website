import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyC00P2kyzVrA7CCg71z5MmlialvXfM-PQc",
    authDomain: "userdashboard-dev.firebaseapp.com",
    databaseURL: "https://userdashboard-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "userdashboard-dev",
    storageBucket: "userdashboard-dev.appspot.com",
    messagingSenderId: "24179904215",
    appId: "1:24179904215:web:e1164318c4416a11eb2a92"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
