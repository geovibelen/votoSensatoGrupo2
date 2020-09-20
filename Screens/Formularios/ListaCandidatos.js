import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { servicioCandidatos } from "./sevicios";
import { obtenerListaCandidatos } from "../conexion/recuperar";
import { ItemCandidatos } from "../componentes/ItemCandidatos";
import { FlatList } from "react-native-gesture-handler";
import ActionButton from "react-native-action-button";
import { cargarConfiguracion } from "";

export class ListaCandidatos extends Component {
  constructor() {
    super();
    if (!global.estaCargado) {
      cargarConfiguracion();
    }
    obtenerListaCandidatos(this.repintarLista);
    this.state = {
      listaCands: [],
    };
  }

  repintarLista = (arreCandidatos) => {
    this.setState({ listaCands: arreCandidatos });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            textAlignVertical: "center",
            fontWeight: "bold",
          }}
        >
          VOTO SENSATO
        </Text>
        <Text style={styles.Text}>LISTA DE CANDIDATOS</Text>
        <View>
          <FlatList
            data={this.state.listaCands}
            renderItem={(obj) => {
              return (
                <ItemCandidatos
                  pCandidato={obj.item}
                  nav={this.props.navigation}
                ></ItemCandidatos>
              );
            }}
            keyExtractor={(candidato) => {
              return candidato.id;
            }}
          ></FlatList>
        </View>
        <ActionButton
          buttonColor="#2B95DE"
          onPress={() => {
            this.props.navigation.navigate("CandidatosScreen");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  Text: {
    fontSize: 20,
    textAlign: "center",
    color: "#28ABC4",
    fontWeight: "bold",
  },
});
