import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hawkeye from './src/component/Hawkeye'
import Sing_In from './src/component/Sing_In';
import Sing_Up from './src/component/Sing_Up';
import StartPage1 from './src/component/StartPage1';
import StartPage2 from './src/component/StartPage2';
import StartPage3 from './src/component/StartPage3';
import Navigation_Tab from './src/screen/Navigation_Tab';
import Front from './src/screen/Front';
import Map from './src/screen/Map';
import Detail from './src/screen/Detail';
import Attraction_details from './src/screen/Attraction_details';
import Ltinerary from './src/screen/Ltinerary';
import Weather_query from './src/screen/Weather_query';
import Introduction from './src/screen/Introduction';
import Schedule from './src/screen/Schedule';
import Travel_Arrangement from './src/screen/Travel_Arrangement';
import Transportation from './src/screen/Transportation';
import Registration from './src/screen/Registration';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Hawkeye" component={Hawkeye} options={{headerShown:false}} />
      <Stack.Screen name="StartPage1" component={StartPage1} options={{headerShown:false}} />
      <Stack.Screen name="StartPage2" component={StartPage2} options={{headerShown:false}} />
      <Stack.Screen name="StartPage3" component={StartPage3} options={{headerShown:false}}/>
      <Stack.Screen name="Sing_In" component={Sing_In} options={{headerShown:false}} />
      <Stack.Screen name="Sing_Up" component={Sing_Up} options={{headerShown:false}} />
      <Stack.Screen name="Navigation_Tab" component={Navigation_Tab} options={{headerShown:false}}/>
      <Stack.Screen name="Front" component={Front} options={{headerShown:false}}/>
      <Stack.Screen name="Map" component={Map} options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
      <Stack.Screen name="Attraction_details" component={Attraction_details} options={{headerShown:false}}/>
      <Stack.Screen name='Ltinerary' component={Ltinerary} options={{headerShown:false}}/>
      <Stack.Screen name='Weather_query' component={Weather_query} options={{headerShown:false}}/>
      <Stack.Screen name='Introduction' component={Introduction} options={{headerShown:false}}/>
      <Stack.Screen name='Schedule' component={Schedule} options={{headerShown:false}}/>
      <Stack.Screen name='Travel_Arrangement' component={Travel_Arrangement} options={{headerShown:false}}/>
      <Stack.Screen name='Transportation' component={Transportation} options={{headerShown:false}}/>
      <Stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
