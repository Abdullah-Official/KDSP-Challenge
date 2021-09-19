import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CommonButton from "../../components/common-button";
import { Icon, Select } from "native-base";
import CommonInput from "../../components/common-input";

const SignUp = ({ navigation, route }) => {
  const { params } = route;
  console.log(params, " params");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [exp, setExp] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [specialization, setSpecialization] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        bounces={false}
      >
        <View style={styles.role_container}>
          <View>
            <SvgUri
              width="100%"
              height="200"
              source={
                params.role == "patient"
                  ? require("../../assets/images/login.svg")
                  : require("../../assets/images/doctor-login-illustration.svg")
              }
            />
          </View>
          <View style={{ marginTop: 30, marginHorizontal: 10 }}>
            <Text style={styles.login_txt}>Sign Up</Text>

            <View style={{ marginTop: 20, marginHorizontal: 10 }}>
              <View
                style={
                  (styles.social_login_container,
                  { ...styles.social_login_container, marginBottom: 20 })
                }
              >
                <TouchableOpacity style={styles.social_btn} activeOpacity={0.6}>
                  <SvgUri
                    width="26"
                    height="26"
                    source={require("../../assets/images/google-icon.svg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_btn} activeOpacity={0.6}>
                  <SvgUri
                    width="26"
                    height="26"
                    source={require("../../assets/images/fb-icon.svg")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.social_btn} activeOpacity={0.6}>
                  <SvgUri
                    width="26"
                    height="26"
                    source={require("../../assets/images/apple.svg")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.login_with_txt}>
                Or, Register with an Email
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <CommonInput
                icon={require("../../assets/images/email-icon.svg")}
                placeholder="Email ID"
                value={email}
                setValue={(e) => setEmail(e)}
              />
              <CommonInput
                icon={require("../../assets/images/full-name-icon.svg")}
                placeholder="Full Name"
                value={fullName}
                setValue={(e) => setFullName(e)}
              />
              <CommonInput
                icon={require("../../assets/images/phone-number-icon.svg")}
                placeholder="Phone Number"
                value={phone}
                setValue={(e) => setPhone(e)}
              />
              {
                params.role == 'doctor' ? (
                    <>
                    <View
                style={
                  (styles.main_input, { ...styles.main_input, marginTop: 30 })
                }
              >
                <View
                  style={
                    (styles.auth_inputs_container,
                    {
                      ...styles.auth_inputs_container,
                      justifyContent: "space-between",
                    })
                  }
                >
                  <View style={{ width: "10%" }}>
                    <SvgUri
                      width="20"
                      height="20"
                      source={require("../../assets/images/specialization-icon.svg")}
                    />
                  </View>
                  <View style={{ width: "90%" }}>
                    <Select
                      placeholder="Mode of payment"
                      width={"100%"}
                      style={{ backgroundColor: "transparent" }}
                      placeholder="Specialization"
                      selectedValue={specialization}
                      onValueChange={(e) => setSpecialization(e)}
                    >
                      <Select.Item
                        label="Psychiatrists"
                        value="Psychiatrists"
                      />
                      <Select.Item label="Psychologist" value="Psychologist" />
                    </Select>
                  </View>
                </View>
              </View>
              <CommonInput
                icon={require("../../assets/images/experience-icon.svg")}
                placeholder="Experience"
                value={exp}
                setValue={(e) => setExp(e)}
              />
                    </>                  
                ) : null
              }
              <CommonInput
                icon={require("../../assets/images/password-icon.svg")}
                placeholder="Password"
                value={password}
                placeholderColor={true}
                secureText={true}
                setValue={(e) => setPassword(e)}
              />
              <CommonInput
                icon={require("../../assets/images/password-icon.svg")}
                placeholder="Confirm Password"
                value={cpassword}
                placeholderColor={true}
                secureText={true}
                setValue={(e) => setCPassword(e)}
              />
            </View>
            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <CommonButton title="Sign up" />
            </View>
          </View>
          <View style={styles.new_platform_cont}>
            <View>
              <Text style={styles.newPlatTxt}>Already Signed up?</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                navigation.navigate("Login", { role: params.role })
              }
            >
              <Text style={styles.forgot_txt}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
