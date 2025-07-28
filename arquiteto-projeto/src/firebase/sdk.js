// src/firebase/sdk.js
import { initializeApp }      from "firebase/app";
import { getAnalytics }       from "firebase/analytics";
import { getFunctions }       from "firebase/functions";
import { getFirestore }       from "firebase/firestore";
import { getAuth }            from "firebase/auth";
// … importe outros SDKs se precisar (storage, messaging etc)

const firebaseConfig = {
  apiKey: "AIzaSyDpQ6GJdxklivT4vdskY-Ii9QeDl2iUtBs",
  authDomain: "arquiteto-projeto.firebaseapp.com",
  projectId: "arquiteto-projeto",
  storageBucket: "arquiteto-projeto.appspot.com",      // <–– corrigido
  messagingSenderId: "250424756898",
  appId: "1:250424756898:web:586319bbb7373a7537a5fb",
  measurementId: "G-B821P48XXQ"
};

// Inicializa o app Firebase
const app        = initializeApp(firebaseConfig);
const analytics  = getAnalytics(app);
const functions  = getFunctions(app);
const firestore  = getFirestore(app);
const auth       = getAuth(app);

// Exporte tudo que for usar no resto da aplicação
export { app, analytics, functions, firestore, auth };

window.$firebaseFunctions = functions;