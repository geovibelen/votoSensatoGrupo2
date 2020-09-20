import React, { Component } from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Input, Button, Avatar, ListItem, List } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import firebase from "firebase";
import "@firebase/firestore";

import { cargarConfiguracion } from "./utils/conexion";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Encuestas } from "./Screens/Encuestas";
import { ListaCandidatos } from "./Screens/ListaCandidatos";
import { Candidato } from "./Screens/Candidato";

import JURIDICO from "./Screens/Formularios/JURIDICO";
import PAR_ANT from "./Screens/Formularios/PAR_ANT";
import TRANSITO from "./Screens/Formularios/TRANSITO";
import SRI from "./Screens/Formularios/SRI";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ListaCandidatos"
        component={ListaCandidatos}
        options={{
          tabBarLabel: "ListaCandidatos",
          tabBarIcon: () => <Icon name="user" size={32} color="skyblue" />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Encuestas"
        component={Encuestas}
        options={{
          tabBarLabel: "Encuestas",
          tabBarIcon: () => <Icon name="user" size={32} color="skyblue" />,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  if (!global.estaCargado) {
    cargarConfiguracion();
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VotoSensatoAdmin">
        <Stack.Screen
          name="VotoSensatoAdmin"
          component={TabHome}
        ></Stack.Screen>

        <Stack.Screen name="Candidato" component={Candidato}></Stack.Screen>

        <Stack.Screen name="Encuestas" component={Encuestas}></Stack.Screen>

        <Stack.Screen name="SRI" component={SRI}></Stack.Screen>

        <Stack.Screen name="JURIDICO" component={JURIDICO}></Stack.Screen>

        <Stack.Screen name="TRANSITO" component={TRANSITO}></Stack.Screen>

        <Stack.Screen name="PAR_ANT" component={PAR_ANT}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
