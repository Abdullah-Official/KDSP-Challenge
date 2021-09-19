import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  doctor_name: {
    fontFamily: "CabinSemiBold",
    fontSize: 20,
    color: "#000",
  },
  input_search:{
    marginTop:20,
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#EBEBEB',
    borderRadius:5,
    alignSelf:'center',
    padding:5
  }
  
});

export default styles;
