import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CommonButton from "../../components/common-button";
import { COLORS } from "../../constants/theme";
import { useMutation } from "react-query";
import { BASE_URL } from "../../app/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken, userInfo } from "../../reducers/user-reducer";

const Login = ({ navigation, route }) => {
  const { params } = route;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const mutation = useMutation(
    (post) => axios.post(`${BASE_URL}/auth/api/v1/login/`, post),
    {
      onSuccess: (data) => {
        alert("Logged inn");
        dispatch(addToken(data.data[0].refresh));
        dispatch(userInfo(data.data[1]))
        console.log(data.data[1]," user")
      },
      onError: (data) => {
        console.log("Error register", data);
      },
    }
  );

  const LoginDoctor = () => {
    mutation.mutate({
      username: email,
      password: password,
      role: params.role,
    });
    setEmail();
    setPassword();
  };

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
            <Text style={styles.login_txt}>Login</Text>
            <View style={{ marginTop: 25 }}>
              <View style={styles.main_input}>
                <View style={styles.auth_inputs_container}>
                  <View style={{ width: "15%" }}>
                    <SvgUri
                      width="20"
                      height="20"
                      source={require("../../assets/images/email-icon.svg")}
                    />
                  </View>
                  <View style={{ width: "85%" }}>
                    <TextInput
                      placeholder="Email ID"
                      style={styles.input_placeholder}
                      value={email}
                      onChangeText={(e) => setEmail(e)}
                    />
                  </View>
                </View>
              </View>
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
                  <View style={{ width: "15%" }}>
                    <SvgUri
                      width="20"
                      height="20"
                      source={require("../../assets/images/password-icon.svg")}
                    />
                  </View>
                  <View style={{ width: "65%" }}>
                    <TextInput
                      placeholder="Password"
                      style={
                        (styles.input_placeholder,
                        { ...styles.input_placeholder, color: COLORS.blue })
                      }
                      value={password}
                      onChangeText={(e) => setPassword(e)}
                      secureTextEntry={true}
                    />
                  </View>

                  <TouchableOpacity style={{ width: "20%" }}>
                    <Text style={styles.forgot_txt}>Forgot?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginTop: 25 }}>
                <CommonButton title="Login" onPress={() => LoginDoctor()} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 25, marginHorizontal: 10 }}>
            <Text style={styles.login_with_txt}>Or, login with</Text>
            <View style={styles.social_login_container}>
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
            <View style={styles.new_platform_cont}>
              <View>
                <Text style={styles.newPlatTxt}>New to this platform?</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate("SignUp", { role: params.role })
                }
              >
                <Text style={styles.forgot_txt}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
