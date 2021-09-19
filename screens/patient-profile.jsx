import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalHeader from "../components/global-header";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PatientProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          {/* header  */}
          <GlobalHeader left title="Patient Profile" />
        </View>
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/images/user-pic2.png")}
              style={{ width: 150, height: 150, resizeMode: "contain" }}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <Ionicons
                name="ios-location-outline"
                size={17}
                style={{ paddingTop: 3 }}
                color="#7D7D7D"
              />
              <Text
                style={{
                  color: "#7D7D7D",
                  fontSize: 14,
                  fontFamily: "CabinRegular",
                  paddingLeft: 6,
                }}
              >
                Islamabad, Pakistan
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <FontAwesome5
                name="user-circle"
                size={17}
                style={{ paddingTop: 3 }}
                color="#7D7D7D"
              />
              <Text
                style={{
                  color: "#7D7D7D",
                  fontSize: 14,
                  fontFamily: "CabinRegular",
                  paddingLeft: 6,
                }}
              >
                14 years
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.note_txt}>Notes:</Text>
          <Text style={styles.para_txt}>
            Ullamcorper at ridiculus neque arcu aliquet lacus, eget sed lectus.
            Rutrum in scelerisque turpis ornare iaculis mauris tellus eu. Nisl,
            eleifend pellentesque diam libero morbi sit id dictumst bibendum.
            Lacus morbi elit tincidunt vestibulum ut ut.
          </Text>
        </View>
        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <Text style={styles.note_txt}>Attachements:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.attachement_box}
            >
              <Image
                source={require("../assets/images/file-download.png")}
                style={{ width: 60, height: 60, resizeMode: "contain" }}
              />
              <Text style={styles.att_txt}>Report1.pdf</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.attachement_box}
            >
              <Image
                source={require("../assets/images/file-download.png")}
                style={{ width: 60, height: 60, resizeMode: "contain" }}
              />
              <Text style={styles.att_txt}>Report1.pdf</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.attachement_box}
            >
              <Image
                source={require("../assets/images/file-download.png")}
                style={{ width: 60, height: 60, resizeMode: "contain" }}
              />
              <Text style={styles.att_txt}>Report1.pdf</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientProfile;

const styles = StyleSheet.create({
  note_txt: {
    fontFamily: "CabinSemiBold",
    fontSize: 20,
  },
  para_txt: {
    fontFamily: "CabinRegular",
    fontSize: 13,
    color: "#7D7D7D",
    marginTop: 15,
  },
  att_txt: {
    fontFamily: "CabinRegular",
    fontSize: 13,
    color: "#7D7D7D",
    marginTop: 10,
  },
  attachement_box: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CECECE",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 11,
  },
});
