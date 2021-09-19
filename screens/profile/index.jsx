import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/user-reducer";

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(state => state.user)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    >
      <View style={{ marginTop: 15, marginHorizontal: 15 }}>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.doctor_name}>Profile</Text>
        </View>

        <View style={{ marginTop: 36, flexDirection: "row" }}>
          <View>
            <Image
              source={require("../../assets/images/user-pic2.png")}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
          </View>
          <View style={{ marginLeft: 20, marginTop: 5 }}>
            <Text style={styles.name_txt}>Dr. {state.user && state.user.fullname}</Text>
            <Text style={styles.email_txt}>anonymous@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 36,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: "#E8F8FF",
                borderRadius: 10,
                padding: 8,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "CabinBold",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                20
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "CabinRegular",
                  color: "#7D7D7D",
                  textAlign: "center",
                }}
              >
                Appointments
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 20, marginTop: 5 }}>
            <View
              style={{
                backgroundColor: "#E8F8FF",
                borderRadius: 10,
                padding: 12,
                width: 120,
              }}
            >
              <Text
                style={{
                  fontFamily: "CabinBold",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                30K<Text style={{ fontSize: 12 }}>RS</Text>
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "CabinRegular",
                  color: "#7D7D7D",
                  textAlign: "center",
                }}
              >
                Earned
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyProfile")}
            style={styles.navigations_profile}
          >
            <View style={{ justifyContent: "center" }}>
              <FontAwesome5 name="user-circle" size={22} color="#7D7D7D" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.nav_label}>My Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("OpdTimings")} style={styles.navigations_profile}>
            <View style={{ justifyContent: "center" }}>
            <FontAwesome5
                name="hand-holding-medical"
                size={22}
                color="#7D7D7D"
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.nav_label}>OPD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("TransactionHistory")} style={styles.navigations_profile}>
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons name="receipt" size={22} color="#7D7D7D" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.nav_label}>Transaction History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              justifyContent: "center",
              marginRight: 5,
              borderColor: "#EF2727",
              borderWidth: 2,
              borderRadius: 8,
              height: 35,
              width: 120,
            }}
            onPress={() => dispatch(logout())}
          >
            <Text
              style={{
                fontFamily: "CabinRegular",
                fontSize: 12,
                textAlign: "center",
                color: "#EF2727",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  doctor_name: {
    fontFamily: "CabinSemiBold",
    fontSize: 20,
    color: "#000",
  },
  name_txt: {
    fontFamily: "CabinBold",
    fontSize: 18,
    color: "#000",
    marginBottom: 8,
  },
  email_txt: {
    fontFamily: "CabinSemiBold",
    fontSize: 15,
    color: "#7D7D7D",
  },
  navigations_profile: {
    flexDirection: "row",
    marginBottom: 15,
  },
  nav_label: {
    color: "#7D7D7D",
    fontSize: 16,
    marginLeft: 15,
  },
});
