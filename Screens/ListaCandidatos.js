import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ActionButton from "react-native-action-button";
import { Avatar } from "react-native-elements";

export class ListaCandidatos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidatos: "",
    };
    this.lista_candidatos = [];
  }

  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.tituloPagina}>Candidatos</Text>
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
              data={this.state.candidatos}
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
        </View>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.props.navigation.navigate("Candidato");
          }}
        >
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
    alignItems: "center",
    justifyContent: "center",
  },

  tituloPagina: {
    fontSize: 40,
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
