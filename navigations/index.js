import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userReducer from "../reducers/user-reducer";

const Navigator = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(userReducer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "CabinBold", fontSize: 20 }}>
        Data From Redux :)
      </Text>
      <Text style={{ fontFamily: "CabinMedium" }}>{user.name}</Text>
      <Text style={{ fontFamily: "CabinMedium" }}>{user.age}</Text>
      <Text style={{ fontFamily: "CabinMedium" }}>{user.email}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
