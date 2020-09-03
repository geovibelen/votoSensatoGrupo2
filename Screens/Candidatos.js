import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Candidatos extends Component {
  render() {
    return (
      <View style={styles.fila}>
        <Text>Candidatos</Text>
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
