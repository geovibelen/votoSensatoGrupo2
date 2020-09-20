import ActionButton from "react-native-action-button";
import React, { Component } from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Input, Button, Avatar, ListItem, List } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import firebase from "firebase";
import "@firebase/firestore";

import {
  guardarCandidato,
  recuperarCandidato,
} from "../servicios/servicioCandidatos";

export class Candidato extends Component {
  constructor() {
    super();
    if (!global.estaCargado) {
      cargarConfiguracion();
    }
    this.state = {
      cedula: "",
      nombre: "",
      apellido: "",
      partido: "",
      listaCandidatos: [],
    };
  }
  limpiarCajas = () => {
    this.setState({
      cedula: "",
      nombre: "",
      apellido: "",
      partido: "",
    });
  };

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.tituloPagina}>Candidatos</Text>
        <View style={styles.principal}>
          <View style={styles.cabecera}></View>
          <View style={styles.contenido}>
            <Input
              value={this.state.cedula}
              placeholder="Ingrese la cedula"
              label="Cedula"
              onChangeText={(text) => {
                this.setState({ cedula: text });
              }}
              leftIcon={
                <Icon
                  reverse
                  name="marker"
                  size={15}
                  type="ionicon"
                  color="#517fa4"
                />
              }
            ></Input>

            <Input
              value={this.state.nombre}
              placeholder="Ingrese el nombre"
              label="Nombre"
              onChangeText={(text) => {
                this.setState({ nombre: text });
              }}
              leftIcon={
                <Icon
                  reverse
                  name="user"
                  size={15}
                  type="ionicon"
                  color="#517fa4"
                />
              }
            ></Input>

            <Input
              value={this.state.apellido}
              placeholder="Ingrese el apellido"
              label="Apellido"
              onChangeText={(text) => {
                this.setState({ apellido: text });
              }}
              leftIcon={
                <Icon
                  reverse
                  name="user"
                  size={15}
                  type="ionicon"
                  color="#517fa4"
                />
              }
            ></Input>

            <Input
              value={this.state.partido}
              placeholder="Ingrese el partido"
              label="Partido"
              onChangeText={(text) => {
                this.setState({ partido: text });
              }}
              leftIcon={
                <Icon
                  reverse
                  name="user"
                  size={15}
                  type="ionicon"
                  color="#517fa4"
                />
              }
            ></Input>
          </View>
          <View style={styles.botones}>
            <View style={styles.botonOperacion}>
              <Button
                title="Guardar"
                buttonStyle={styles.estiloBoton}
                onPress={() => {
                  guardarCandidato(
                    {
                      cedula: this.state.cedula,
                      nombre: this.state.nombre,
                      apellido: this.state.apellido,
                      partido: this.state.partido,
                    },
                    this.limpiarCajas
                  );
                }}
              ></Button>
            </View>
          </View>

          <View style={styles.pie}>
            <Text> Grupo 2</Text>
          </View>
        </View>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="transparent"
            title="SRI"
            textContainerStyle="large"
            onPress={() => this.props.navigation.navigate("SRI")}
          >
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  "https://ecuadorendirecto.com/wp-content/uploads/2019/07/unnamed-2.jpg",
              }}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="transparent"
            title="JURÍDICO"
            onPress={() => this.props.navigation.navigate("JURIDICO")}
          >
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  "https://idibe.org/wp-content/uploads/2017/06/DMercantil.jpg",
              }}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="transparent"
            title="TRÁNSITO"
            onPress={() => this.props.navigation.navigate("TRANSITO")}
          >
            <Avatar
              size="large"
              source={{
                uri:
                  "https://farm-signs.co.uk/image/cache/catalog/traffic-road-signs/t23ep-school-children-sign-640x640.jpg",
              }}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="#1abc9c"
            title="RÉCORD POLÍTICO"
            onPress={() => this.props.navigation.navigate("PAR_ANT")}
          >
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  "https://img.freepik.com/vector-gratis/avatar-hablar-publico_98292-6629.jpg?size=338&ext=jpg",
              }}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
  },

  tituloPagina: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#808080",
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  principal: {
    flex: 1,
    //backgroundColor: '#ffccff',
    // alignItems: "stretch",
    // justifyContent: 'flex-start',
  },
  cabecera: {
    flex: 1,
    //backgroundColor:'#ffff99',
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },

  titulo: {
    flexDirection: "row",
    color: "#ccff00",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  contenido: {
    //flex:5,
    //backgroundColor:"#9999ff",
    // alignItems:"center",
    //justifyContent: "flex-start",
    margin: 3,
  },

  botones: {
    flex: 1,
    //backgroundColor:"#ccffcc",
    alignItems: "center", //Eje Tranversal
    justifyContent: "center", //Eje principal
    //margin:3,
    flexDirection: "row",
  },
  botonOperacion: {
    flex: 1,
    //backgroundColor:"#00aa00",
    alignItems: "stretch", //Eje Tranversal
    justifyContent: "center", //Eje principal
    margin: 3,
    flexDirection: "row",
  },
  lista: {
    //backgroundColor:"#00aa00",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
    flex: 3,
    flexDirection: "column",
  },
  pie: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    //backgroundColor:"#ccccff",
    margin: 3,
  },
  logo: {
    width: 200,
    height: 90,
    margin: 5,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",

    lineHeight: 30,
  },
  estiloBoton: {
    backgroundColor: "#EB984E",
    fontSize: 20,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
  },

  separadorItems: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#C8C8C8",
  },
});
