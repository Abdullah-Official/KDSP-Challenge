import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const GlobalHeader = ({ right, left, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header_main}>
      {left && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.2}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.header_title}>{title}</Text>
      </View>
      {right ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  header_main: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header_title: {
    color: "#141414",
    fontFamily: "CabinMedium",
    fontSize: 16,
  },
});
