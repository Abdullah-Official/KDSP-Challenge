import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import FirstRoute from "../../components/schecdule/first-route";
import SecondRoute from "../../components/schecdule/second-route";
import ThirdRoute from "../../components/schecdule/third-route";
import styles from "./styles";




const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Schedule = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title:"Upcoming" },
    { key: "second", title: "Complete" },
    { key: "third", title: "Canceled" },
    
  ]);
  return (
    <>
      <View style={{marginTop:60, marginHorizontal:10}}>
      <Text style={styles.doctor_name}>Schedule</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{ marginTop: 20,marginHorizontal:10, fontSize:12 }}
        labelStyle={{color:'red'}}
      />
    </>
  );
};

export default Schedule;

