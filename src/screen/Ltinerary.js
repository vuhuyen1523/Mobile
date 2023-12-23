import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Ltinerary({navigation}) {
  return (
    <View>
      <View style={styles.up}>
        <Text style={styles.hello}>Hello, traveler</Text>
        <Image source={require('../img/profile_pic.png')} style={styles.propic}/>
        <Text style={styles.location}>Location</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Introduction")} style={{backgroundColor: 'white'}}>
          <Image source={require('../img/mu-cang-chai.webp')} style={styles.loca}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.sche} onPress={()=>navigation.navigate("Weather_query")}>Schedule</Text>
      <View>
        <Text style={styles.hour}>01:00</Text>
        <View style={styles.dis}/>
        <View style={styles.distance}/>
        <Text style={styles.place}>Los Angeles</Text>
        <Text style={styles.activity}>Begin the fly</Text>
      </View>
      <View>
        <Text style={styles.hour1}>20:30</Text>
        <View style={styles.dis1}/>
        <View style={styles.distance1}/>
        <Text style={styles.place1}>Ha Noi</Text>
        <Text style={styles.activity1}>End the fly</Text>
      </View>
      <View>
        <Text style={styles.hour1}>23:30</Text>
        <View style={styles.dis1}/>
        <Text style={styles.place1}>Yen Bai</Text>
        <Text style={styles.activity1}>Go to hotel</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  up: {
    backgroundColor: 'white',
    height: 470
  },
  hello: {
    marginStart: 35,
    marginTop: 87,
    fontSize: 26,
    fontWeight: 'bold'
  },
  propic: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginStart: 360,
    marginTop: 81
  },
  location: {
    marginStart: 35,
    marginTop: 87,
    fontSize: 20,
    fontWeight: 'bold'
  },
  loca: {
    width: 370,
    height: 180,
    marginStart: 40,
    marginTop: 20,
    borderRadius: 20
  },
  sche: {
    marginStart: 35,
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  hour: {
    marginStart: 35,
    marginTop: 30,
    fontSize: 20
  },
  dis: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    position: 'absolute',
    marginStart: 100,
    marginTop: 30
  },
  distance: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 1,
    height: 65,
    position: 'absolute',
    marginStart: 112,
    marginTop: 55
  },
  place: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    marginStart: 140,
    marginTop: 20
  },
  activity: {
    fontSize: 18,
    color: 'gray',
    position: 'absolute',
    marginStart: 140,
    marginTop: 45
  },
  hour1: {
    marginStart: 35,
    marginTop: 60,
    fontSize: 20
  },
  dis1: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    position: 'absolute',
    marginStart: 101,
    marginTop: 62
  },
  distance1: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 1,
    height: 65,
    position: 'absolute',
    marginStart: 112,
    marginTop: 85
  },
  place1: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    marginStart: 140,
    marginTop: 50
  },
  activity1: {
    fontSize: 18,
    color: 'gray',
    position: 'absolute',
    marginStart: 140,
    marginTop: 75
  }
})