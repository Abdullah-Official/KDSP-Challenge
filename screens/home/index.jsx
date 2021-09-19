import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AppointmentCard from "../../components/appointment-card";
import { userInfo } from "../../reducers/user-reducer";
import styles from "./styles";

const Home = () => {
  
  const state = useSelector(state => state.user)
  console.log(state)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 15, marginHorizontal: 15 }}
      >
        {/* header  */}
        <View style={styles.header_home}>
          <Image
            source={require("../../assets/images/user-pic.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
          <View style={styles.notif_bell}>
            <Image
              source={require("../../assets/images/notif-bell.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
          </View>
        </View>
        {/* user name  */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.doctor_name}>Welcome, Dr. {state.user && state.user.fullname}!</Text>
        </View>
        {/* session card  */}
        <View style={styles.session_card}>
          <View style={{ width: "28%", alignItems: "center" }}>
            <Text style={styles.number_card}>55</Text>
          </View>
          <View style={{ width: "45%", paddingLeft: 10 }}>
            <Text style={styles.card_mid_txt}>
              People signed up for your session
            </Text>
            <Text
              style={
                (styles.card_mid_txt,
                { ...styles.card_mid_txt, paddingTop: 10 })
              }
            >
              Today, 3:00pm
            </Text>
          </View>
          <View
            style={{
              width: "27%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity activeOpacity={0.6} style={styles.see_all_btn}>
              <Text style={{ fontSize: 12, fontFamily: "CabinMedium" }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* weeks appointment  */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={styles.doctor_name}>This week’s appointments</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <AppointmentCard />
          </View>
        </View>
        {/* Statistics  */}
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={styles.doctor_name}>Statistics</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View
                style={{
                  backgroundColor: "#E8F8FF",
                  borderRadius: 10,
                  padding: 8,
                  width: "33%",
                }}
              >
                <Text style={{ fontFamily: "CabinBold", fontSize: 30 }}>
                  20
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "CabinRegular",
                    color: "#7D7D7D",
                  }}
                >
                  Appointments
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 8,
                  width: "33%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "CabinBold", fontSize: 30 }}>
                  15
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "CabinRegular",
                    color: "#7D7D7D",
                  }}
                >
                  Patients
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 8,
                  width: "33%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "CabinBold", fontSize: 30 }}>
                  13
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "CabinRegular",
                    color: "#7D7D7D",
                  }}
                >
                  Sessions
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
