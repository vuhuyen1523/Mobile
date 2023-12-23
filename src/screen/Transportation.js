import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, Button } from 'react-native'
import React from 'react'

export default function Transportation({navigation}) {
  return (
    <View style={styles.containerTransport}>
        <View style={styles.headerTransport}>
         <TouchableOpacity onPress={()=>navigation.navigate("Travel_Arrangement")}>
           <Image source={require('../img/icon_page/arrow_goback.png')} />
         </TouchableOpacity>
         <Text style={{fontSize:20,fontWeight:800,marginLeft:110,marginTop:2, color:'#000000'}}>Travel plan</Text>
        </View>
         <View style={styles.contentTransport}>
             <Text style={{fontSize:16,color:'#000000',fontWeight:600,marginLeft:25,marginTop:20,}}>Hotel</Text>
            </View>
            <View style={styles.ct1}>
             <Image source={require('../img/mu-cang-chai.webp')} style={{width:363,height:92,marginLeft:25,marginTop:20,position:'absolute'}}/>
             <Text style={{fontSize:14,color:'#FFFFFF' ,marginLeft:40,marginTop:45,position:'absolute', fontWeight: 'bold'}}>Mu Cang Chai</Text>
             <Image source={require('../img/rate.png')} style={{width:92,height:16,marginLeft:40,marginTop:75,}}/>
            </View>
            <View style={styles.ct2}>
             <Text style={{fontSize:16,color:'#000000',fontWeight:600,marginLeft:25,marginTop:50,}}>Flights</Text>
            </View>
            <View style={styles.ct3} >
             <Image source={require('../img/icon_page/around.png')} style={{width:149,height:219,marginTop:15,marginLeft:25,position:'absolute'}}/>
             <Image source={require('../img/icon_page/bg.png')} style={{width:56,height:56,marginLeft:70,marginTop:30,position:'absolute'}}/>
             <Image source={require('../img/icon_page/america.png')} style={{width:30,height:30,marginLeft:82,marginTop:43,position:'absolute'}}/>
             <Text style={{fontSize:36,fontWeight:500,color:'#000000',marginLeft:56,marginTop:100,position:'absolute'}}>UK</Text>
             <Text style={{fontSize:14,color:'#858585',marginTop:150,marginLeft:50,position:'absolute'}}>21.03 6:00 AM</Text>
             <Image source={require('../img/icon_page/ticket.png')} style={{width:14,height:14,position:'absolute',marginLeft:50,marginTop:190,}}/>
             <Text style={{fontSize:14,color:'#0373F3',marginTop:188,marginLeft:70,position:'absolute'}}>First Class</Text>
   
             <Image source={require('../img/icon_page/arrow_b.png')} style={{width:28,height:28,marginLeft:190,marginTop:110}}/>
   
             <Image source={require('../img/icon_page/around.png')} style={{width:149,height:219,marginTop:15,marginLeft:240,position:'absolute'}}/>
             <Image source={require('../img/icon_page/bg.png')} style={{width:56,height:56,marginLeft:290,marginTop:30,position:'absolute'}}/>
             <Image source={require('../img/icon_page/vietnam.png')} style={{width:30,height:30,marginLeft:303,marginTop:43,position:'absolute'}}/>
             <Text style={{fontSize:36,fontWeight:500,color:'#000000',marginLeft:290,marginTop:100,position:'absolute'}}>VN</Text>
             <Text style={{fontSize:14,color:'#858585',marginTop:150,marginLeft:265,position:'absolute'}}>21.03 18:00 AM</Text>
             <Image source={require('../img/icon_page/ticket.png')} style={{width:14,height:14,position:'absolute',marginLeft:270,marginTop:190,}}/>
             <Text style={{fontSize:14,color:'#0373F3',marginTop:188,marginLeft:290,position:'absolute'}}>First Class</Text>
            </View>
            <View style={styles.ct2}>
             <Text style={{fontSize:16,color:'#000000',fontWeight:600,marginLeft:25,marginTop:130,}}>Flights</Text>
            </View>
            <View style={styles.ct4}>
             <Text style={{fontSize:16,color:'#000000',marginTop: 7,marginLeft:25,position:'absolute'}}>Hotel (5nigh)</Text>
             
             <Text style={{fontSize:16,fontWeight:500,color:'#0373F3',marginLeft:345,marginTop:7,}}>$886</Text>
            </View>
            <View style={styles.ct5}>
             <Text style={{fontSize:16,color:'#000000',marginTop: 10,marginLeft:25,position:'absolute'}}>Flights</Text>
             
             <Text style={{fontSize:16,fontWeight:500,color:'#0373F3',marginLeft:345,marginTop:7,}}>$726</Text>
            </View>
   
            <View style={styles.ct6}>
             <Text style={{fontSize:16,color:'#000000',marginTop: 10,marginLeft:25,position:'absolute'}}>Total</Text>
             
             <Text style={{fontSize:16,fontWeight:500,color:'#0373F3',marginLeft:345,marginTop:7,}}>$1612</Text>
            </View>
            <View style={styles.bt}>
                 <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Navigation_Tab")}>
                 <Text style={styles.textBtn}>Determine the plan</Text>
                 </TouchableOpacity>
                 </View>
            </View>
  )
}

const styles = StyleSheet.create({
    containerTransport:{
        flex:1,
        backgroundColor:'#FFFFFF'
        },
        headerTransport:{
          marginTop:74,
          marginLeft:25,
          flexDirection:'row',
      
        },
        ct3:{
          flexDirection:'row',
        },
        bt:{
          marginLeft:30,
          marginTop:20,
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
           
          },
    
})