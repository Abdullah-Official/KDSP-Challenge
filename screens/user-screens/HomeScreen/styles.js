import { Center } from "native-base";
import { Platform, StyleSheet } from "react-native";
import { height } from "styled-system";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  homeContainer: {
    width: "95%",
    alignSelf: "center",
    marginTop: 30,
    padding: 5,
  },
  homeGreetAndProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeGreet: {},
  greetingPrim: {
    fontSize: 28,
    fontWeight: "700",
    color: "#141414",
    marginBottom: 5,
  },
  greetingSec: {
    fontSize: 16,
    color: "#7d7d7d",
  },
  profileAndNotif: {
    flexDirection: "row",
    justifyContent: "center",
  },
  notif: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    alignSelf: "center",
  },
  //   profileNotifIcon : {
  //       justifyContent
  //   }
  profile: { width: 55, height: 55, resizeMode: "contain" },
  banner1: {
    width: "100%",
    height: 200,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#C0E7F8",
    color: "white",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  banner1HeadCta: {
    width: "65%",
  },
  banner1Prim: {
    fontSize: 24,
    fontWeight: "700",
    color: "#141414",
  },
  banner1Cta: {
    backgroundColor: "#27B4EF",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20,
  },
  banner1CtaText: {
    fontSize: 20,
    color: "white",
  },
  banner1Img: {
    width: "35%",
  },
  banner2: {
    marginTop: 50,
    maxHeight: 300,
    marginBottom: 80,
  },
  sessionHeading: {
    fontSize: 24,
    fontWeight: "700",
  },
  banner2Cont: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  banner2mainHead: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  banner2PicAndDesc: {
    marginTop: 15,
    flexDirection: "row",
    height: "80%",
  },
  banner2Desc: {
    paddingLeft: 20,
    width: "65%",
  },
  banner2PicAndDescText: {
    width: "100%",
    flexDirection: "row",
  },
  banner2DescText: {
    color: "#7d7d7d",
    fontSize: 14,
    marginBottom: 15,
  },
  banner2Time: {
    fontWeight: "700",
    color: "#7d7d7d",
  },
  banner2img: {
    width: "35%",
    paddingRight: 20,
    height: "100%",
  },
  noAppMsg: {
    marginTop: 30,
    color: "#7d7d7d",
    textAlign: "center",
  },
  appCta: {
    marginTop: 15,
    marginBottom: 45,
    alignSelf: "center",
    borderRadius: 15,
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
  },
  appCtaText: {
    fontSize: 20,
    color: "white",
  },
});

export default styles;
