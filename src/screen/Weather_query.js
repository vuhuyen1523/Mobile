import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function Introduction({navigation}) {
  return (
    <View>
      <View style={{backgroundColor: 'white', height: 300}}>
        <View style={styles.back}>
          <Text style={{marginStart: 120, fontSize: 26, fontWeight: 'bold'}}>Itinerary Form</Text>
          <ScrollView horizontal={true}>
            <View>
              <Text style={styles.day}>Day 1</Text>
              <Text style={styles.month}>July 14</Text>
            </View>
            <View>
              <Text style={styles.day1}>Day 2</Text>
              <Text style={styles.month1}>July 15</Text>
            </View>
            <View>
              <Text style={styles.day1}>Day 3</Text>
              <Text style={styles.month1}>July 16</Text>
            </View>
          </ScrollView>
        </View>
      </View>
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
      <View style={styles.btn}>
        <TouchableOpacity onPress={()=>navigation.navigate('Navigation_Tab')} style={styles.button}>
          <Text style={styles.textBtn}>View specific itinerary</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    marginStart: 35,
    marginTop: 80
  },
  day: {
    marginTop: 90,
    marginStart: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  month: {
    marginTop: 5,
    marginStart: 34,
    fontSize: 18,
    color: 'gray'
  },
  day1: {
    marginTop: 90,
    marginStart: 90,
    fontSize: 20,
    fontWeight: 'bold'
  },
  month1: {
    marginTop: 5,
    marginStart: 86,
    fontSize: 18,
    color: 'gray'
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
  },
  btn:{
    paddingStart: 20
  },
  button:{
    backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: 425,
    height: 60,
    borderRadius:30,
    marginTop: 230
  },
  textBtn:{
    color:'#fff',
    fontWeight:'bold'
  }
})