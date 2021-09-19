import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AppointmentCard from "../../components/appointment-card";

const ThirdRoute = () => {
  const dummy = [1, 2, 3, 4, 5];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View tyle={{ flex: 1, marginTop:-10 }}>
        <View style={{marginBottom:20}}>
          {dummy.map((v, i) => {
            return (
              <View style={{marginTop:25}} key={i}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.font_date_dark}>October 23, </Text>
                  <Text style={styles.font_date_light}> Friday</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <AppointmentCard schedule={'canceled'}/>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ThirdRoute;

const styles = StyleSheet.create({
  font_date_dark: {
    fontSize: 15,
    fontFamily: "CabinSemiBold",
  },
  font_date_light: {
    fontSize: 15,
    fontFamily: "CabinMedium",
    color: "#7D7D7D",
  },
});
