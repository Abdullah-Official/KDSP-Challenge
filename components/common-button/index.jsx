import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { COLORS } from "../../constants/theme";

const CommonButton = ({title, onPress, navigation, data}) => {
  return (
    <TouchableOpacity
      onPress={onPress && onPress}
      activeOpacity={0.7}
      style={styles.btn_container}
    >
      <Text style={styles.btn_txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
    btn_container:{
        backgroundColor: COLORS.blue,
        width:'100%',
        borderRadius:1000,
        padding:4,
        paddingVertical:11,
        alignItems:'center',
        alignSelf:'center'
    },
    btn_txt:{
        fontFamily:'CabinMedium',
        color: '#fff',
        fontWeight:'600',
        fontSize:16
    },
});
