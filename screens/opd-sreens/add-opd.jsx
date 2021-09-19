import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalHeader from "../../components/global-header";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const AddOpd = () => {
  const daysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [day, setDay] = useState("");
  const [opd, setOpd] = useState({
    day,
    slots: [],
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          {/* header  */}
          <GlobalHeader left title="Add OPD" />
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={{ fontFamily: "CabinSemiBold", fontSize: 18 }}>
            Add a new OPD timing
          </Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={{ fontFamily: "CabinMedium", fontSize: 16 }}>
            Available Days
          </Text>
        </View>
        <View style={styles.days_container}>
          {daysArray.map((v, i) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setDay(v)}
                key={i}
                style={
                  (styles.day,
                  {
                    ...styles.day,
                    backgroundColor: day == v ? COLORS.blue : "transparent",
                  })
                }
              >
                <Text
                  style={{
                    fontFamily: "CabinRegular",
                    fontSize: 14,
                    color: day == v ? "#fff" : "#000",
                  }}
                >
                  {v}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={{ fontFamily: "CabinSemiBold", fontSize: 18 }}>
            Timings:
          </Text>
          <TouchableOpacity
            onPress={() =>
              alert(`Sorry, appointment on ${day} is not avialable.`)
            }
            activeOpacity={0.5}
            style={{
              marginTop: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.Notime}>
              No timing added click here to add a timeslot
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddOpd;

const styles = StyleSheet.create({
  day: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C2C2C2",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    marginTop: 15,
  },
  days_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 20,
  },
  Notime: {
    color: COLORS.blue,
    fontFamily: "CabinMedium",
    fontSize: 18,
    textAlign: "center",
  },
});
