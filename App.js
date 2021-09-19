import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import Navigator from "./navigations";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { NativeBaseProvider } from 'native-base';

export default function App() {
  let [fontsLoaded] = useFonts({
    CabinBold: require("./assets/fonts/Cabin-Bold.ttf"),
    CabinSemiBold: require("./assets/fonts/Cabin-SemiBold.ttf"),
    CabinRegular: require("./assets/fonts/Cabin-Regular.ttf"),
    CabinMedium: require("./assets/fonts/Cabin-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NativeBaseProvider>
        <Navigator />
        </NativeBaseProvider>
      </Provider>
    );
  }
}
