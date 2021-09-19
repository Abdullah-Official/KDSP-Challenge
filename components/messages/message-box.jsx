import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MessageBox = () => {
  return (
    <TouchableOpacity style={styles.message_box}>
      <View style={{ width: "80%", flexDirection:'row',}}>
       <View>
       <Image 
        source={require('../../assets/images/user-pic3.png')}
        style={{width:50, height:50, resizeMode:'contain'}}
        />
       </View>
       <View style={{marginLeft:10}}>
           <Text style={styles.name}>Henna Beck</Text>
           <Text style={styles.msg}>You : Amet donec mauris hrh akn ksan ..</Text>
       </View>
      </View>
      <View style={{ width: "20%", }}>
          <Text style={styles.timestamp}>12:00 pm</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
    message_box:{
        marginBottom:30,
        flexDirection:'row',
        width:'100%'
    },
    name:{
        fontFamily:'CabinMedium',
        fontSize:16,
    },
    msg:{
        fontFamily:'CabinRegular',
        fontSize:12,
        color:'#7D7D7D'
    },
    timestamp:{
        fontFamily:'CabinRegular',
        fontSize:10,
        color:'#7D7D7D',
        paddingTop:2
    }
});
