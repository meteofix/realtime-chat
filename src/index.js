import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: "AIzaSyCTmG2VazPAq8sUuZyVt9z0tnfH8v3DXUA",
    authDomain: "realtime-chat-83a8b.firebaseapp.com",
    projectId: "realtime-chat-83a8b",
    storageBucket: "realtime-chat-83a8b.appspot.com",
    messagingSenderId: "568058827494",
    appId: "1:568058827494:web:cb620105bbb52948e0a127",
    measurementId: "G-GJMLMFXWWK"
});

export const Context = createContext(null)

const auth = app.auth();
const firestore = app.firestore();


ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          app,
          auth,
          firestore
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
