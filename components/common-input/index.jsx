import SvgUri from "expo-svg-uri";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "../../screens/auth-screens/styles";

const CommonInput = (props) => {
  return (
    <View style={(styles.main_input, { ...styles.main_input, marginTop: 30 })}>
      <View style={styles.auth_inputs_container}>
        <View style={{ width: "15%" }}>
          <SvgUri width="21" height="21" source={props.icon} />
        </View>
        <View style={{ width: "85%" }}>
          <TextInput
            placeholder={props.placeholder}
            style={
              (styles.input_placeholder,
              {
                ...styles.input_placeholder,
                color: props.placeholderColor ? COLORS.blue : "#7D7D7D",
              })
            }
            value={props.value}
            onChangeText={props.setValue && props.setValue}
            secureTextEntry={props.secureText && props.secureText}
          />
        </View>
      </View>
    </View>
  );
};

export default CommonInput;
