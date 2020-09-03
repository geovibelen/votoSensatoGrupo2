import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Candidatos } from "./Screens/Candidatos";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CandidatosScreen" component={Candidatos}></Tab.Screen>
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
          name="CandidatosScreen"
          component={Candidatos}
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
