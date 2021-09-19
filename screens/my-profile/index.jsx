import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalHeader from "../../components/global-header";
import CommonButton from "../../components/common-button";

const MyProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          {/* header  */}
          <GlobalHeader left title="My Profile" />
        </View>
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <View>
            <Image
              source={require("../../assets/images/user-pic2.png")}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={{
                backgroundColor: "#EAEAEA",
                marginTop: 8,
                borderRadius: 5,
                padding: 4,
              }}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={{
                backgroundColor: "#EAEAEA",
                marginTop: 8,
                borderRadius: 5,
                padding: 4,
              }}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={{
                backgroundColor: "#EAEAEA",
                marginTop: 8,
                borderRadius: 5,
                padding: 4,
              }}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Specialization</Text>
            <TextInput
              style={{
                backgroundColor: "#EAEAEA",
                marginTop: 8,
                borderRadius: 5,
                padding: 4,
              }}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>Experience</Text>
            <TextInput
              style={{
                backgroundColor: "#EAEAEA",
                marginTop: 8,
                borderRadius: 5,
                padding: 4,
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20, marginTop: 6 }}>
          <CommonButton title="Save" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;

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
  label: {
    fontFamily: "CabinMedium",
    fontSize: 15,
  },
});
