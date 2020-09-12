import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TRANSITO extends Component {
  render() {
    return (
      <View style={styles.contenedor}>
        <Text style={styles.tituloPagina}>TRÁNSITO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloPagina:{
    fontSize:40,
    textAlign:'center',
    textAlignVertical:'center',
    color:'#808080',
  },
});
