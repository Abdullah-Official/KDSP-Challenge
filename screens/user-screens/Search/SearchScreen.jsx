import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  let data = [
    {
      name: "Amina Rasheed",
      specialization: "Physcologist",
      rating: 4.5,
      imgUrl: require("../../../assets/images/featured-doc.png"),
      id: "1",
    },
    {
      name: "Amina Rasheed",
      specialization: "Physcologist",
      rating: 4.5,
      imgUrl: require("../../../assets/images/featured-doc.png"),
      id: "2",
    },
  ];

  const featuredDoc = (props) => {
    const { name, imgUrl, specialization, rating } = props.item;
    console.log(name, imgUrl, specialization, rating);
    return (
      <TouchableOpacity style={styles.featuredDocCard}>
        <Image
          source={imgUrl}
          style={{
            height: "60%",
            width: "90%",
            resizeMode: "cover",
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name="stethoscope"
              size={24}
              color="#7d7d7d"
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 15, color: "#7d7d7d" }}>
              {specialization}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome name="star" size={24} color="#FFC107" />
            <Text style={{ marginLeft: 5 }}>{rating}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.banner1Cta}>
          <Text style={styles.banner1CtaText}>Book</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        bounces={false}
      >
        <Text style={styles.searchHeading}>Search</Text>
        <View style={styles.searchCont}>
          <Feather
            name="search"
            size={24}
            color="#7d7d7d"
            style={{ marginRight: 30 }}
          />
          <TextInput placeholder="Search Doctors" style={{ width: "55%" }} />
          <TouchableOpacity style={styles.filter}>
            <Feather name="filter" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.featuredProf}>
          <Text style={styles.searchHeading}>Top Rated Professionals</Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <FlatList
            data={data}
            renderItem={featuredDoc}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={{ fontSize: 17, color: "#7d7d7d", textAlign: "center" }}>
          Find your perfect match by filling the questionare
        </Text>
        <TouchableOpacity style={styles.banner2Cta}>
          <Text style={styles.banner2CtaText}>Start Questionare</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
