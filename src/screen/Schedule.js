import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Schedule({navigation}) {
  return (
    <View style={styles.containerSchedule}>
        <View style={styles.headerSchedule}>
         <View style={styles.ct1}>
         <TouchableOpacity onPress={()=>navigation.navigate("Introduction")}>
           <Image source={require('../img/icon_page/arrow_goback.png')} style={styles.ct1_1} />
         </TouchableOpacity>
         <Text style={{fontSize:20,fontWeight:700,marginTop:53,marginLeft:170}}>New Plan</Text>
         </View>
         <View style={styles.ct2}>
          <Image source={require('../img/mu-cang-chai.webp')} style={styles.ct2_1}/>
          <Text style={{fontSize:14,fontWeight:300,color:'#ffffff',marginTop:55,marginLeft:45,position:'absolute'}}>Mu Cang Chai</Text>
          <Text style={{fontSize:24,fontWeight:500,color:'#ffffff',marginTop:80,marginLeft:45,position:'absolute'}}>Mu Cang Chai</Text>
         </View>
         <View style={styles.ct3}>
          <Text style={{fontSize:16,fontWeight:700,color:'#000000',marginTop:160,marginLeft:29,position:'absolute'}}>Select dates</Text>
          <Image source={require('../img/icon_page/left.png')} style={styles.ct3_1}/>
          <Text style={{fontSize:16,fontWeight:400,color:'#000000',marginTop:160,marginLeft:294,position:'absolute'}}>March</Text>
          <Image source={require('../img/icon_page/righ.png')} style={styles.ct3_2}/>
         </View>
         <View style={styles.ct4}>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:29,position:'absolute'}}>Mon</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:81,position:'absolute'}}>Tue</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:134,position:'absolute'}}>Wed</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:197,position:'absolute'}}>Thu</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:252,position:'absolute'}}>Fri</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:299,position:'absolute'}}>Sat</Text>
               <Text style={{fontSize:14,fontWeight:300,color:'#A5A5A5',marginTop:210,marginLeft:350,position:'absolute'}}>Sun</Text>
         </View>
         <View style={styles.ct5}>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:250,marginLeft:144,position:'absolute'}}>1</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:250,marginLeft:207,position:'absolute'}}>2</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:250,marginLeft:255,position:'absolute'}}>3</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:250,marginLeft:305,position:'absolute'}}>4</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:250,marginLeft:359,position:'absolute'}}>5</Text>
         </View>
         <View style={styles.ct6}>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:37,position:'absolute'}}>6</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:89,position:'absolute'}}>7</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:144,position:'absolute'}}>8</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:207,position:'absolute'}}>9</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:253,position:'absolute'}}>10</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:303,position:'absolute'}}>11</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:290,marginLeft:357,position:'absolute'}}>12</Text>
         </View>
         <View style={styles.ct7}>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:35,position:'absolute'}}>13</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:87,position:'absolute'}}>14</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:142,position:'absolute'}}>15</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:205,position:'absolute'}}>16</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:253,position:'absolute'}}>17</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:303,position:'absolute'}}>18</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:330,marginLeft:357,position:'absolute'}}>19</Text>
         </View>
         <View style={styles.ct8}>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:370,marginLeft:35,position:'absolute'}}>20</Text>
         <Image source={require('../img/icon_page/chose.png')} style={styles.ct8_1}/>
         <Image source={require('../img/icon_page/picker.png')} style={styles.ct8_3}/>
         <Text style={{fontSize:14,fontWeight:500,color:'#ffffff',marginTop:370,marginLeft:87,position:'absolute'}}>21</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:370,marginLeft:142,position:'absolute'}}>22</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:370,marginLeft:205,position:'absolute'}}>23</Text>
         <Image source={require('../img/icon_page/chose.png')} style={styles.ct8_2}/>
         <Text style={{fontSize:14,fontWeight:500,color:'#ffffff',marginTop:370,marginLeft:253,position:'absolute'}}>24</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:370,marginLeft:303,position:'absolute'}}>25</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:370,marginLeft:357,position:'absolute'}}>26</Text>
         </View>



         <View style={styles.ct9}>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:410,marginLeft:35,position:'absolute'}}>27</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:410,marginLeft:87,position:'absolute'}}>28</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:410,marginLeft:142,position:'absolute'}}>29</Text>
         <Text style={{fontSize:14,fontWeight:500,color:'#000000',marginTop:410,marginLeft:205,position:'absolute'}}>30</Text>
         </View>
         <View style={styles.ct10}>
          <TouchableOpacity onPress={()=>navigation.navigate("Travel_Arrangement")} style={styles.ct10_1}>
            <Text style={{fontSize:16,color:'#FFFFFF'}}>Next step</Text>
          </TouchableOpacity>
         </View>
                 </View>
            </View>
  )
}

const styles = StyleSheet.create({
  ct1_1:{
    width:28,
    height:28,
    marginTop:50,
    marginLeft:29,
    position:'absolute'
      },
      ct2_1:{
    width:356,
    height:92,
    marginTop:30,
    marginLeft:29,
    position:'absolute'
      },
      ct3_1:{
    width:22,
    height:22,
    marginTop:160,
    marginLeft:264,
    position:'absolute'
      },
      ct3_2:{
        width:23,
        height:23,
        marginTop:159,
        marginLeft:346,
        position:'absolute'
          },
          ct8_1:{
            width:34,
            height:34,
            marginLeft:78,
            marginTop:360,
            position:'absolute'
          },
          ct8_2:{
            width:34,
            height:34,
            marginLeft:245,
            marginTop:360,
            position:'absolute'
          },
          ct8_3:{
            width:165,
            height:34,
            marginTop:360,
            marginLeft:95,
            position:'absolute'
          },
          ct10_1:{
            width:356,
            height:54,
            borderRadius:36,
            backgroundColor:'#0373F3',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:580,
            marginLeft:29
          }
})