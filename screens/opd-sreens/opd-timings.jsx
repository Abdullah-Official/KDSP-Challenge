import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalHeader from "../../components/global-header";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/core";

const OpdTimings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          {/* header  */}
          <GlobalHeader left title="OPD Timings" />
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={{ fontFamily: "CabinSemiBold", fontSize: 18 }}>
            Timings:
          </Text>
        </View>
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <View style={styles.timing_card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View />
              <View>
                <Text style={{ fontFamily: "CabinBold", fontSize: 17 }}>
                  Monday
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ justifyContent: "center" }}
              >
                <SimpleLineIcons name="options" size={25} color="#5B5B5B" />
              </TouchableOpacity>
            </View>
            <View style={styles.slots_container}>
              <View style={styles.slot_box}>
                <Text
                  style={{
                    fontFamily: "CabinRegular",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  2:00pm
                </Text>
              </View>
              <View style={styles.slot_box}>
                <Text
                  style={{
                    fontFamily: "CabinRegular",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  2:00pm
                </Text>
              </View>
              <View style={styles.slot_box}>
                <Text
                  style={{
                    fontFamily: "CabinRegular",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  2:00pm
                </Text>
              </View>
              <View style={styles.slot_box}>
                <Text
                  style={{
                    fontFamily: "CabinRegular",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  2:00pm
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ marginTop: 30, position: "absolute", bottom: 40, right: 25 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AddOpd")}
          style={styles.float_btn}
        >
          <Feather name="plus" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OpdTimings;

const styles = StyleSheet.create({
  timing_card: {
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
    marginBottom: 20,
    padding: 20,
    width: "100%",
  },
  slot_box: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "45%",
  },
  slots_container: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  float_btn: {
    backgroundColor: COLORS.blue,
    padding: 5,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
