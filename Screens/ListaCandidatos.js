import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ActionButton from "react-native-action-button";
import { cargarConfiguracion } from "../utils/conexion";
import { ItemCandidato } from "../Screens/ItemCandidato";
import { recuperarCandidato } from "../servicios/servicioCandidatos";

export class ListaCandidatos extends Component {
  constructor() {
    super();

    if (!global.estaCargado) {
      cargarConfiguracion();
    }
    recuperarCandidato(this.repintarLista);
    this.state = {
      candidatos: [],
    };
  }
  repintarLista = (listaCandidatos) => {
    this.setState({ candidatos: listaCandidatos });
  };

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.tituloPagina}>Candidatos</Text>
        <View style={styles.container}>
          <Text style={styles.Text}>LISTA DE CANDIDATOS</Text>
          <View>
            <FlatList
              data={this.state.candidatos}
              renderItem={(obj) => {
                return (
                  <ItemCandidato
                    pCandidato={obj.item}
                    nav={this.props.navigation}
                  ></ItemCandidato>
                );
              }}
              keyExtractor={(candidato) => {
                return candidato.id;
              }}
            ></FlatList>
          </View>
        </View>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.props.navigation.navigate("Candidato");
          }}
        ></ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  tituloPagina: {
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#808080",
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
