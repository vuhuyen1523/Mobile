import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

export default function StartPage3({navigation}) {
  return (
    <View style={styles.containerStartPage3}>
    <View style={styles.contentStartPage3}>
      <Image source={require('../img/show3.png')} style={styles.showimage3}/>
      <Text style={styles.line5}>High-end leisure projects to choose from</Text>
      <Text style={styles.line6}>The world's first-class modern leisure and entertainment method</Text>
    <TouchableOpacity style={styles.Btn_nextSing_In} onPress={()=>navigation.navigate('Sing_In')}>
        <Image source={require('../img/icon_page/arrow_icon.png')} />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  line6:{
    width: 305,
    height: 54,
    fontSize: 18,
    marginTop: 15,
    marginStart: 85,
    textAlign: 'center'
  },
  line5:{
    width: 323,
    height: 84,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginStart: 85,
    marginTop: 45,
  },
  showimage3:{
    width: 406,
    height: 306,
    marginStart: 35,
    marginTop: 98
  },
  containerStartPage3:{
    flex:1,
  
  },
  contentStartPage3:{
    flex:1,
  },
  Btn_nextSing_In:{
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