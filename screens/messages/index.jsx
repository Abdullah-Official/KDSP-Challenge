import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import styles from "../schecdule/styles";
import { AntDesign } from "@expo/vector-icons";
import MessageBox from "../../components/messages/message-box";

const Messages = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 15, marginHorizontal: 15 }}
      >
        <View style={{ marginTop: 30, }}>
          <Text style={styles.doctor_name}>Messages</Text>
        </View>
        <View style={styles.input_search}>
          <View
            style={{
              justifyContent: "center",
              width: "10%",
              alignItems: "center",
            }}
          >
            <AntDesign name="search1" size={18} color="#7D7D7D" />
          </View>
          <View style={{ width: "90%" }}>
            <TextInput placeholder="Search for chats & messages" />
          </View>
        </View>
        <View style={{marginTop:50, marginBottom:10}}>
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
