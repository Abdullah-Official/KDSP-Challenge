import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  header_home: {
    alignItems: "flex-end",
    flexDirection: "row-reverse",
  },
  notif_bell: {
    resizeMode: "contain",
    marginHorizontal: 10,
    backgroundColor: "#EDEDED",
    padding: 5,
    borderRadius: 199,
  },
  doctor_name: {
    fontFamily: "CabinSemiBold",
    fontSize: 20,
    color: "#000",
  },
  session_card: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 130,
    marginTop: 20,
  },
  card_mid_txt: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "CabinSemiBold",
  },
  number_card: {
    fontFamily: "CabinBold",
    fontSize: 55,
    color: "#fff",
  },
  see_all_btn: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});

export default styles;
