import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Candidatos } from "./Screens/Candidatos";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Encuestas } from "./Screens/Encuestas";

import JURIDICO from "./Screens/Formularios/JURIDICO"
import PAR_ANT from "./Screens/Formularios/PAR_ANT"
import TRANSITO from "./Screens/Formularios/TRANSITO"
import SRI from "./Screens/Formularios/SRI"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Candidatos" component={Candidatos}></Tab.Screen>
      <Tab.Screen name="Encuestas" component={Encuestas}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="VotoSensatoAdmin">
        <Stack.Screen
          name="VotoSensatoAdmin"
          component={TabHome}
        ></Stack.Screen>

        <Stack.Screen
          name="Candidatos"
          component={Candidatos}
        ></Stack.Screen>

        <Stack.Screen
          name="Encuestas"
          component={Encuestas}
        ></Stack.Screen>

        <Stack.Screen
          name='SRI' component={SRI}
        ></Stack.Screen> 

        <Stack.Screen
          name='JURIDICO' component={JURIDICO}
        ></Stack.Screen> 

        <Stack.Screen
          name='TRANSITO' component={TRANSITO}
        ></Stack.Screen> 

        <Stack.Screen
          name='PAR_ANT' component={PAR_ANT}
        ></Stack.Screen> 
        


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
