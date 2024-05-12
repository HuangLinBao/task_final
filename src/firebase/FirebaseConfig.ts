// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB39TvJCPngIKNn1bOiKRiIfdwktJCP4uA",
	authDomain: "storefront-6264e.firebaseapp.com",
	projectId: "storefront-6264e",
	storageBucket: "storefront-6264e.appspot.com",
	messagingSenderId: "989361203333",
	appId: "1:989361203333:web:c71383eac4660c86bda1ec",
	measurementId: "G-668ERRM1H6"
};

initializeApp(firebaseConfig)


export const auth = getAuth();
