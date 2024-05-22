// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQVEPtU0I8XCa02wrtb7DAAd8O6A-6cHI",
    authDomain: "netflix2-9f9c5.firebaseapp.com",
    projectId: "netflix2-9f9c5",
    storageBucket: "netflix2-9f9c5.appspot.com",
    messagingSenderId: "1037554307412",
    appId: "1:1037554307412:web:29c79b05e5bf307463b8c1",
    measurementId: "G-X7KQVVG30N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// we added auth token here, so it can be used by various comp.
export const auth = getAuth();