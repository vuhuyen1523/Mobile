import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Front from '../screen/Front';
import Ltinerary from './Ltinerary';
import Personal from './Personal ';
import Ionic from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
export default function Navigation_Tab() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
     tabBarIcon: ({ focused, size, color }) => {
       let iconName;
       if (route.name === "Home") {
         iconName = focused ? 'home' : 'home-outline';
       } else if (route.name === "Guide") {
         iconName = focused ? 'compass-sharp' : 'compass-outline';
       } else if (route.name === "Group") {
        iconName = focused ? 'person-sharp' : 'person-outline';
      } 
       return <Ionic name={iconName} size={size} color={color} />; 
     },
   })}
   >
     <Tab.Screen name="Home" component={Front} options={{headerShown:false}}  />
     <Tab.Screen name="Guide" component={Ltinerary} options={{headerShown:false}}/>
     <Tab.Screen name="Group" component={Personal} options={{headerShown:false}}/>
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})