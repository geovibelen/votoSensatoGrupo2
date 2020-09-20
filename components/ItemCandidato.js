import React, { Component } from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

export class ItemCandidato extends Component {
  render() {
    return (
      <View style={styles.fila}>
        <Text>
          {this.props.pCandidato.cedula}{" "}
          {this.props.pCandidato.candidato.nombre}{" "}
          {this.props.pCandidato.candidato.apellido}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fila: {
    // backgroundColor:"red",
    flex: 1,
    borderBottomColor: "red",
    borderBottomWidth: 3,
  },
});