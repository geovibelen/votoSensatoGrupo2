import firebase from "firebase";
import "@firebase/firestore";

export const cargarConfiguracion = () => {
  console.log("CARGANDO CONFIGURACION");
  const firebaseConfig = {
    apiKey: "AIzaSyCRq9n_GRjtsXcA0moecqJk89oQMav176c",
    authDomain: "voto-sensato.firebaseapp.com",
    databaseURL: "https://voto-sensato.firebaseio.com",
    projectId: "voto-sensato",
    storageBucket: "voto-sensato.appspot.com",
    messagingSenderId: "504417008388",
    appId: "1:504417008388:web:acd3fa0a680ebaf6aeae51",
  };

  firebaseApp = firebase.initializeApp(firebaseConfig);
  //let bdd = firebase.firestore();
  global.bdd = firebase.firestore();
  global.estaCargado = true;
};
