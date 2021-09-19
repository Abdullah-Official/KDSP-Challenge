import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import {
  FontAwesome5,
  Entypo,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { style } from "styled-system";

const HomePatient = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        bounces={false}
      >
        <View style={styles.homeContainer}>
          <View style={styles.homeGreetAndProfileContainer}>
            <View style={styles.homeGreet}>
              <Text style={styles.greetingPrim}>Hi Salman!</Text>
              <Text style={styles.greetingSec}>How are you feeling today?</Text>
            </View>
            <View style={styles.profileAndNotif}>
              <TouchableOpacity style={styles.notif}>
                <Ionicons
                  name="notifications-outline"
                  style={styles.profileNotifIcon}
                  size={24}
                  color="#7d7d7d"
                />
              </TouchableOpacity>
              <View>
                <Image
                  source={require("../../../assets/images/user-pic.png")}
                  style={styles.profile}
                />
              </View>
            </View>
          </View>
          <View style={styles.banner1}>
            <View style={styles.banner1HeadCta}>
              <Text style={styles.banner1Prim}>Book a appointment now</Text>
              <TouchableOpacity style={styles.banner1Cta}>
                <Text style={styles.banner1CtaText}>Book</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.banner1Img}>
              <Image
                source={require("../../../assets/images/patient-home-banner-1.png")}
                style={{ height: "100%", width: "100%", resizeMode: "cover" }}
              />
            </View>
          </View>
          <View style={styles.banner2}>
            <Text style={styles.sessionHeading}>
              Live Sessions of top proffesionals
            </Text>
            <View style={styles.banner2Cont}>
              <View>
                <Text style={styles.banner2mainHead}>
                  Awareness about Down Syndrome
                </Text>
              </View>
              <View style={styles.banner2PicAndDesc}>
                <View style={styles.banner2Desc}>
                  <Text style={styles.banner2DescText}>
                    55 people have already signed-up for this event.
                  </Text>
                  <Text style={styles.banner2Time}>August 31, 3:00pm</Text>
                  <TouchableOpacity style={styles.banner1Cta}>
                    <Text style={styles.banner1CtaText}>SignUp</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.banner2img}>
                  <Image
                    source={require("../../../assets/images/patient-home-banner-2.png")}
                    style={{
                      height: "100%",
                      width: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.upcomAppoint}>
            <Text style={styles.sessionHeading}>Upcomming Appointments</Text>
            <Text style={styles.noAppMsg}>
              There are no upcomming appointments
            </Text>
            <TouchableOpacity style={styles.appCta}>
              <Text style={styles.appCtaText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePatient;
