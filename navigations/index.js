import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Role from "../screens/auth-screens/role";
import Login from "../screens/auth-screens/login";
import SignUp from "../screens/auth-screens/signup";

const Navigator = () => {
  const AuthStack = createStackNavigator();
  return (
   <>
   <StatusBar style="auto" />
   <NavigationContainer>
    <AuthStack.Navigator
    headerMode="none"
    screenOptions={{
      headerTransparent: true,
      headerTitle: null,
      headerShown: false,
    }}
    headerShown='false'
    initialRouteName="Role"
  >
    <AuthStack.Screen name="Role" component={Role} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
  </NavigationContainer>
   </>
  );
};

export default Navigator;

