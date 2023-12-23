import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function StartPage1({navigation}) {
  return (
    <View style={styles.containerStartPage1}>
    <View style={styles.contentStartPage1}>
      <Image source={require('../img/show1.png')} style={styles.showimage}/>
      <Text style={styles.line1}>Make your own private travel plan</Text>
      <Text style={styles.line2}>Formulate your strategy to receive wonderful gift packs</Text>
      <TouchableOpacity style={styles.Btn_nextPage2} onPress={()=>navigation.navigate('StartPage2')}>
        <Image source={require('../img/icon_page/arrow_icon.png')} />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  line2:{
    width: 305,
    height: 54,
    fontSize: 18,
    marginTop: 15,
    marginStart: 85,
    textAlign: 'center'
  },
  line1:{
    width: 323,
    height: 84,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginStart: 85,
    marginTop: 45,

  },
  showimage:{
    width: 406,
    height: 306,
    marginStart: 35,
    marginTop: 98
    
  },
  containerStartPage1:{
    flex:1,
  
  },
  contentStartPage1:{
    flex:1
  },
  Btn_nextPage2:{
    height: 70,
    width: 70,
    marginStart: 200,
    marginTop: 50,
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
  },
})