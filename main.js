 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB4BOaoSIixRNaUX1bmAcKjmK7Nku7_tpI",
   authDomain: "capstone-one-rit-team-awesome.firebaseapp.com",
   projectId: "capstone-one-rit-team-awesome",
   storageBucket: "capstone-one-rit-team-awesome.appspot.com",
   messagingSenderId: "934984774408",
   appId: "1:934984774408:web:da62ca55311bd4684eb2bd",
   measurementId: "G-1LFVNP4WSQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 let myCanvas = document.querySelector("#myCanvas");

let ctx = myCanvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, 500, 400);

function setColor(element) //set the color of the pen tool
{
    console.log(element.style.backgroundColor);

    document.querySelector("body").style.backgroundColor = element.style.backgroundColor;
}