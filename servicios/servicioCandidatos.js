import { Alert } from "react-native";

export const guardarCandidato = (candidato, fnExito) => {
  console.log("entra al metodo");
  global.bdd
    .collection("candidatos")
    .doc(candidato.cedula)
    .set(candidato)

    .then(() => {
      Alert.alert("Info", "Canndidato guardado exitosamente");
      fnExito();
    })
    .catch((error) => {
      Alert.alert("Error", "Error al guardar:" + error.message);
    });
  console.log("sale del método");
};

export const recuperarCandidato = (fnRepintar) => {
  console.log("entra a recuperar contacto");
  global.bdd
    .collection("candidatos")
    .get()
    .then((querySnapshot) => {
      let documentos = querySnapshot.docs;
      let candidato = null;
      let candidatos = [];
      for (let i = 0; i < documentos.length; i++) {
        candidato = documentos[i].data();
        candidato.cedula = documentos[i].id;
        candidatos.push(candidato);
        console.log(candidato);
      }
      console.log("todas las personas" + candidatos);
      fnRepintar(candidatos);
      console.log("despues de pasar la funcion" + fnRepintar(candidatos));
    })
    .catch((error) => {
      Alert.alert("Error", "Error al recuperar" + error.message);
    });
  console.log("sale de recuperar contacto");
};

export const guardarRegistroSri = (registroSri, fnExito) => {
  console.log("Entra al metodo");
  global.bdd
    .collection("candidatos")
    .doc(global.cedulaCandidato)
    .collection("SRI")
    .add(registroSri)
    .then(() => {
      Alert.alert("Info", "Candidato guardado exitosamente");
      fnExito();
    })
    .catch((error) => {
      Alert.alert("Error", "Error al guardar:" + error.message);
    });
  console.log("Sale del metodo");
};

export const obtenerListaSri = (fnRepintar) => {
  global.bdd
    .collection("candidatos")
    .doc(global.cedulaCandidato)
    .collection("SRI")
    .get()
    .then((querySnapshot) => {
      let documentos = querySnapshot.docs;
      let registroSri = null;
      let registrosSri = [];
      for (let i = 0; i < documentos.length; i++) {
        registroSri = documentos[i].data();
        registroSri.id = documentos[i].id;
        registrosSri.push(registroSri);
      }
      console.log("todas los registro SRI", registrosSri);
      fnRepintar(registrosSri);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
