import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function StartPage2({navigation}) {
  return (
    <View style={styles.containerStartPage2}>
    <View style={styles.contentStartPage2}>
      <Image source={require('../img/show2.png')} style={styles.showimage1}/>
      <Text style={styles.line3}>Customize your High-end travel</Text>
      <Text style={styles.line4}>Countless high-end entertainment facilities</Text>
    <TouchableOpacity style={styles.Btn_nextPage3} onPress={()=>navigation.navigate('StartPage3')}>
        <Image source={require('../img/icon_page/arrow_icon.png')} />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  line4:{
    width: 305,
    height: 54,
    fontSize: 18,
    marginTop: 15,
    marginStart: 85,
    textAlign: 'center'
  },
  line3:{
    width: 323,
    height: 84,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginStart: 85,
    marginTop: 45,
  },
  showimage1:{
    width: 406,
    height: 306,
    marginStart: 35,
    marginTop: 98
  },
  containerStartPage2:{
    flex:1,
  
  },
  contentStartPage2:{
    flex:1
  },
  Btn_nextPage3:{
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