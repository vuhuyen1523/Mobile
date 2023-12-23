import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, Button } from 'react-native'
import React from 'react'

export default function Travel_Arrangement({navigation}) {
  return (
    <View style={styles.containerTravel_Arr}>
     <View style={styles.headerTravel_Arr}>
      <TouchableOpacity onPress={()=>navigation.navigate("Schedule")}>
        <Image source={require('../img/icon_page/arrow_goback.png')} />
      </TouchableOpacity>
      <Text style={{fontSize:20,fontWeight:800,color:'#000000',marginLeft:95,marginTop:2,}}>Add itinerary</Text>
     </View>
      <View style={styles.contentTravel_Arr}>
              <View style={styles.ct1}>
              <Text style={{fontSize:18,fontWeight:600,color:'#000000',marginTop:10,marginLeft:40,}}>Day 1</Text>
              <Text style={{fontSize:18,fontWeight:600,color:'#000000',marginTop:10,marginLeft:100,}}>Day 2</Text>
              <Text style={{fontSize:18,fontWeight:600,color:'#000000',marginTop:10,marginLeft:100,}}>Day 3</Text>
              </View>
              <View style={styles.ct2}>
                <Text style={{fontSize:16,color:'#B1B1B1',marginLeft:38,marginTop:10,}}>July 14</Text>
                <Text style={{fontSize:16,color:'#B1B1B1',marginLeft:97,marginTop:10,}}>July 15</Text>
                <Text style={{fontSize:16,color:'#B1B1B1',marginLeft:97,marginTop:10,}}>July 16</Text>
              </View>
              <View style={styles.ct4}>
                {/* <Image source={require('../img/icon_page/d3.png')} style={{width:412,height:580,position:'absolute'}}/> */}
                <TouchableOpacity style={styles.ct4_1}>
                    <Text style={{fontSize:18,color:'#000000',marginLeft:39,marginTop:12,position:'absolute'}}>5:30</Text>
                    <Image source={require('../img/icon_page/time.png')} style={{width:22,height:22,marginTop:12,marginLeft:10,position:'absolute'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct6}>
              <TouchableOpacity style={styles.ct6_1}>
                    <Text style={{fontSize:16,color:'#000000',marginLeft:19,marginTop:12,position:'absolute'}}>Wake up</Text>
                    <Image source={require('../img/icon_page/bg.png')} style={{width:37,height:37,marginLeft:190,marginTop:5,position:'absolute'}}/>
                    <Image source={require('../img/icon_page/sun.png')} style={{width:24,height:24,marginLeft:197,marginTop:11,position:'absolute'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct4}>
                <TouchableOpacity style={styles.ct4_2}>
                    <Text style={{fontSize:18,color:'#000000',marginLeft:39,marginTop:12,position:'absolute'}}>7:30</Text>
                    <Image source={require('../img/icon_page/time.png')} style={{width:22,height:22,marginTop:12,marginLeft:10}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct6}>
              <TouchableOpacity style={styles.ct6_2}>
                    <Text style={{fontSize:16,color:'#000000',marginLeft:19,marginTop:12,position:'absolute'}}>City tour</Text>
                    <Image source={require('../img/icon_page/bg.png')} style={{width:37,height:37,marginLeft:190,marginTop:5,position:'absolute'}}/>
                    <Image source={require('../img/icon_page/car.png')} style={{width:24,height:24,marginLeft:197,marginTop:11,position:'absolute'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct4}>
                <TouchableOpacity style={styles.ct4_3}>
                    <Text style={{fontSize:18,color:'#000000',marginLeft:39,marginTop:12,position:'absolute'}}>8:30</Text>
                    <Image source={require('../img/icon_page/time.png')} style={{width:22,height:22,marginTop:12,marginLeft:10}}/>
                </TouchableOpacity>
              </View>
              
              <View style={styles.ct6}>
              <TouchableOpacity style={styles.ct6_3}>
                    <Text style={{fontSize:16,color:'#000000',marginLeft:19,marginTop:12,position:'absolute'}}>Sailing project</Text>
                    <Image source={require('../img/icon_page/bg.png')} style={{width:37,height:37,marginLeft:190,marginTop:5,position:'absolute'}}/>
                    <Image source={require('../img/icon_page/boat.png')} style={{width:24,height:24,marginLeft:197,marginTop:11,position:'absolute'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct4}>
                <TouchableOpacity style={styles.ct4_4}>
                    <Text style={{fontSize:18,color:'#000000',marginLeft:39,marginTop:12,position:'absolute'}}>9:30</Text>
                    <Image source={require('../img/icon_page/time.png')} style={{width:22,height:22,marginTop:12,marginLeft:10}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.ct6}>
              <TouchableOpacity style={styles.ct6_4}>
                    <Text style={{fontSize:16,color:'#000000',marginLeft:19,marginTop:12,position:'absolute'}}>Skydiving</Text>
                    <Image source={require('../img/icon_page/bg.png')} style={{width:37,height:37,marginLeft:190,marginTop:5,position:'absolute'}}/>
                    <Image source={require('../img/icon_page/sport.png')} style={{width:24,height:24,marginLeft:197,marginTop:11,position:'absolute'}}/>
                </TouchableOpacity>
              </View>

              <View style={styles.bt}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>Add activity</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.bt1}>
              <TouchableOpacity onPress={()=>navigation.navigate("Transportation")} style={styles.button1}>
              <Text style={styles.textBtn1}>Next step</Text>
              </TouchableOpacity>
              </View>
              </View>
          </View>

  )
}

const styles = StyleSheet.create({
  containerTravel_Arr:{
    flex:1,
    backgroundColor:'#FFFFFF'
    },
    headerTravel_Arr:{
      marginTop:74,
      marginLeft:25,
      flexDirection:'row',
  
    },
    ct1:{
      flexDirection:'row',
    },
    
    ct2:{
      flexDirection:'row',
    },
    ct4_1:{
      width:99,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',
      marginTop:30,
      marginLeft:25,
      flexDirection:'row',
    
    },
    ct4_2:{
      width:99,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',
      marginTop:20,
      marginLeft:25,
      flexDirection:'row',
    },
  
    ct4_3:{
      width:99,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',
      marginTop:20,
      marginLeft:25,
      flexDirection:'row',
    
    },
    ct4_4:{
      width:99,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',
      marginTop:20,
      marginLeft:25,
      flexDirection:'row',
  
    },
    ct6:{
      position:'absolute'
    },
  
    ct6_1:{
      width:238,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',   
      marginLeft:150,
      marginTop:104,
     
    },
    ct6_2:{
      width:238,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',   
      marginLeft:150,
      marginTop: 174,
    },
    ct6_3:{
      width:238,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',   
      marginLeft:150,
      marginTop: 244,
    },
    ct6_4:{
      width:238,
      height:50,
      borderWidth:1,
      borderRadius:35,
      borderColor:'#ECECEC',   
      marginLeft:150,
      marginTop: 314,
    },
    bt:{
      marginTop:30,
      marginLeft:25,
    },
    button:{
      backgroundColor:'#0373F3',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   width:355,
   height:40,
   borderRadius:36,
  },
  textBtn:{
    color:'#FFFFFF',
   fontSize:16,
  },
  
  bt1:{
    marginTop:120,
    marginLeft:25,
  },
  button1:{
    backgroundColor:'#0373F3',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  width:355,
  height:40,
  borderRadius:36,
  },
  textBtn1:{
  color:'#FFFFFF',
  fontSize:16,
  },
})