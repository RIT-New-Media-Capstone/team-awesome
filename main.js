import * as firebase from "/firebase/app";
import "./firebase/analytics";
import "./firebase/auth";
import "./firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB4BOaoSIixRNaUX1bmAcKjmK7Nku7_tpI",
    authDomain: "capstone-one-rit-team-awesome.firebaseapp.com",
    projectId: "capstone-one-rit-team-awesome",
    storageBucket: "capstone-one-rit-team-awesome.appspot.com",
    messagingSenderId: "934984774408",
    appId: "1:934984774408:web:da62ca55311bd4684eb2bd",
    measurementId: "G-1LFVNP4WSQ"
};

firebase.initializeApp(firebaseConfig);
console.log("hello");

const docData = {
    stringExample: "HelloWorld",
    booleanExample: true,
    numberExample: 3.23923902,
    dataExample: TimeStamp.fromDate(new Date()),
    arrayExample: [5, "this is an array example", x, y],
    objectExample:{
        x1: 2,
        y1: 5,
        x2: 4,
        y2: 7
    }
};

await setDoc(doc(db, "data", "one"), docData);


let myCanvas = document.querySelector("#myCanvas");

let ctx = myCanvas.getContext("2d");

ctx.fillStyle = "#c4d9ff";
ctx.fillRect(0, 0, 500, 400);