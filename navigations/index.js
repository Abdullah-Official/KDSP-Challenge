import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Role from "../screens/auth-screens/role";
import Login from "../screens/auth-screens/login";
import SignUp from "../screens/auth-screens/signup";
import Schedule from "../screens/schecdule";
import Home from "../screens/home";
import HomeUser from "../screens/user-screens/HomeScreen/HomePatient";
import SearchScreen from "../screens/user-screens/Search/SearchScreen";
import Messages from "../screens/messages";
import Profile from "../screens/profile";
import { Platform } from "react-native";
import { COLORS } from "../constants/theme";
import {
  FontAwesome5,
  Entypo,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import PatientProfile from "../screens/patient-profile";
import { useSelector } from "react-redux";
import MyProfile from "../screens/my-profile";
import TransactionHistory from "../screens/transaction-history";
import OpdTimings from "../screens/opd-sreens/opd-timings";
import AddOpd from "../screens/opd-sreens/add-opd";

const Navigator = () => {
  const token = true;
  const AuthStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const ScheduleStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const state = useSelector((state) => state.user);

  const ProfileScreens = () => (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
      initialRouteName="Profile"
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="MyProfile" component={MyProfile} />
      <ProfileStack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
      />
      <ProfileStack.Screen name="OpdTimings" component={OpdTimings} />
      <ProfileStack.Screen name="AddOpd" component={AddOpd} />
    </ProfileStack.Navigator>
  );

  const ScheduleScreens = () => (
    <ScheduleStack.Navigator
      headerMode="none"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}
      initialRouteName="Schedule"
    >
      <ScheduleStack.Screen
        name="Schedule"
        component={
          state.user && state.user.role == "doctor" ? Schedule : SearchScreen
        }
      />
      <ScheduleStack.Screen name="PatientProfile" component={PatientProfile} />
    </ScheduleStack.Navigator>
  );
  return (
    <>
      <StatusBar style="auto" />
      {state.token == null ? (
        <NavigationContainer>
          <AuthStack.Navigator
            headerMode="none"
            screenOptions={{
              headerTransparent: true,
              headerTitle: null,
              headerShown: false,
            }}
            headerShown="false"
            initialRouteName="Role"
          >
            <AuthStack.Screen name="Role" component={Role} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
          </AuthStack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            headerMode="none"
            screenOptions={{
              headerTransparent: true,
              headerTitle: null,
              headerShown: false,
            }}
            tabBarOptions={{
              activeTintColor: COLORS.darkBlue,
              showLabel: false,
              style: {
                // paddingTop: 15,
                paddingHorizontal: Platform.OS === "ios" ? 5 : null,
                height: Platform.OS === "ios" ? 73 : 68,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={
                state.user && state.user.role == "doctor" ? Home : HomeUser
              }
              options={{
                tabBarIcon: ({ color }) => (
                  <Entypo name="home" size={25} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Schedule"
              component={ScheduleScreens}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons
                    name={
                      state.user && state.user.role == "doctor"
                        ? "ios-briefcase-outline"
                        : "search"
                    }
                    size={24}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Messages"
              component={Messages}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="envelope-o" size={24} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreens}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="user-circle" size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigator;
