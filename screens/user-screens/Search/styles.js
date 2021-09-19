import { Center } from "native-base";
import { Platform, StyleSheet } from "react-native";
import { alignItems, alignSelf, height } from "styled-system";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  searchHeading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#141414",
    width: "95%",
    marginTop: 30,
    marginLeft: 30,
    alignSelf: "center",
  },
  searchCont: {
    width: "90%",
    marginTop: 30,
    // marginLeft: 30,
    alignSelf: "center",
    backgroundColor: "#F8F8F8",
    height: 50,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 5,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filter: {
    width: 35,
    height: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  featuredProf: {
    marginTop: 30,
  },
  featuredDocCard: {
    width: 250,
    height: 450,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    marginRight: 20,
  },
  banner1Cta: {
    backgroundColor: "#27B4EF",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  banner1CtaText: {
    fontSize: 20,
    color: "white",
  },
  banner2Cta: {
    backgroundColor: "#27B4EF",
    width: 200,
    height: 50,
    borderRadius: 15,
    marginTop: 20,
    marginRight: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  banner2CtaText: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;
