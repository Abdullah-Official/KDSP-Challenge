import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/core";

const AppointmentCard = ({ schedule, nav }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main_card}>
      <View style={styles.section1}>
        <View>
          <Image
            source={require("../../assets/images/user-pic.png")}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontFamily: "CabinSemiBold", fontSize: 18 }}>
            Muhammad Anas
          </Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.blue,
              borderRadius: 100,
              padding: 4,
            }}
          >
            <Feather name="message-circle" size={20} color="#fff" />
          </TouchableOpacity>
          {schedule !== "completed" && schedule !== "canceled" ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={nav ? () => navigation.navigate("PatientProfile") : console.log('clicked')}
              style={{ paddingLeft: 8 }}
            >
              <SimpleLineIcons name="options" size={25} color="#5B5B5B" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <View style={styles.section2}>
        <View style={{ flexDirection: "row", paddingTop: 4 }}>
          <Ionicons
            name="timer-outline"
            size={18}
            color="#7D7D7D"
            style={{ paddingTop: 1 }}
          />
          <Text
            style={{
              fontFamily: "CabinRegular",
              fontSize: 12,
              color: "#7D7D7D",
              paddingLeft: 5,
            }}
          >
            2:00pm - 3:00pm (1 hr)
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            marginRight: 5,
            backgroundColor:
              schedule == "completed"
                ? "#C7FFD0"
                : schedule == "canceled"
                ? "#FFDFDF"
                : "#DFF6FF",
            borderRadius: 8,
            height: 30,
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "CabinRegular",
              fontSize: 12,
              color:
                schedule == "completed"
                  ? "#00720B"
                  : schedule == "canceled"
                  ? "#EF2727"
                  : COLORS.blue,
            }}
          >
            Confirmed
          </Text>
        </View>
      </View>
      {schedule !== "completed" && schedule !== "canceled" ? (
        <View style={styles.section3}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: "#F4F4F4",
              width: 140,
              borderRadius: 6,
              paddingVertical: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#353146", fontFamily: "CabinMedium" }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: COLORS.blue,
              width: 140,
              borderRadius: 6,
              paddingVertical: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "CabinMedium" }}>
              Reschedule
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  section1: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  main_card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 8,
    paddingVertical: 12,
  },
  section2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
  },
  section3: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    width: "100%",
  },
});
