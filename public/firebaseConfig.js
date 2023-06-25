  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase,
    ref, 
    set, 
    push, 
    onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA5lweA6Z4uVNBKez1gM5c_4dP7aOMsMds",
    authDomain: "moon-fmp-todo-app.firebaseapp.com",
    projectId: "moon-fmp-todo-app",
    storageBucket: "moon-fmp-todo-app.appspot.com",
    messagingSenderId: "411368533652",
    appId: "1:411368533652:web:dfaf541d8f2f65ef8b4e81",
    measurementId: "G-BJ6G5QCTTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

export { database, getDatabase, ref, set, push, onValue };