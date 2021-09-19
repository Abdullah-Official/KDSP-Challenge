import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../../components/common-button";
import styles from "./styles";

const Role = ({ navigation }) => {
  const authRole = (e) => {
    navigation.navigate("Login", { role: e });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.role_container}>
          <View>
            <SvgUri
              width="100%"
              height="270"
              source={require("../../assets/images/role-svg.svg")}
            />
          </View>
          <View style={{ marginTop: 70 }}>
            <View>
              <Text style={styles.continue_txt}>
                If you are a patient continue here :
              </Text>
              <View style={{ marginTop: 10 }}>
                <CommonButton
                  title="Continue as patient"
                  onPress={() => authRole("patient")}
                />
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.continue_txt}>
                If you are a doctor you can continue here:
              </Text>
              <TouchableOpacity
                onPress={() => authRole("doctor")}
                activeOpacity={0.6}
                style={{ marginTop: 10 }}
              >
                <Text style={styles.continue_dr_txt}>Continue as a doctor</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Role;
