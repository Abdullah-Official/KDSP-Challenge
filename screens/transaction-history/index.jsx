import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalHeader from "../../components/global-header";

const TransactionHistory = () => {
  const dummy = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          {/* header  */}
          <GlobalHeader left title="Transaction History" />
        </View>
        <View style={{ marginTop: 40 }}>
          {dummy.map((v, i) => {
            return (
              <View key={i} style={styles.transaction_card}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={require("../../assets/images/user-pic2.png")}
                      style={{ width: 63, height: 63, resizeMode: "contain" }}
                    />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.name_txt}>September 30, 2021</Text>
                    <Text style={styles.email_txt}>
                      Appointment for Eijaz H.
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 15, alignSelf: "flex-end" }}>
                  <Text style={styles.transac}>RS 2,000</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  transaction_card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:20,
    padding:20
  },
  name_txt: {
    fontFamily: "CabinBold",
    fontSize: 15,
    color: "#000",
  },
  email_txt: {
    fontFamily: "CabinSemiBold",
    fontSize: 13,
    color: "#7D7D7D",
  },
  transac: {
    fontFamily: "CabinBold",
    fontSize: 20,
    color: "#000",
  },
});
