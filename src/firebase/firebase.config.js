import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: import.meta.env.VITE_PASTORIA_APIKEY,
   authDomain: import.meta.env.VITE_PASTORIA_AUTHDOMAIN,
   projectId: import.meta.env.VITE_PASTORIA_PROJECTID,
   storageBucket: import.meta.env.VITE_PASTORIA_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_PASTORIA_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_PASTORIA_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
