import { StyleSheet, Text, View ,TouchableOpacity,Image, TextInput, Button} from 'react-native'
import React from 'react'

export default function Personal ({navigation}) {
  return (
    <View style={styles.containerPersonal}>
     <View style={styles.headerPersonal}>
      
     </View>
      <View style={styles.contentPersonal}>
      <View style={styles.ct}>
          <Text style={{fontSize:26,fontWeight:800,color:'#000000',marginLeft:30,marginTop:20,}}>Traveler</Text>
          <Image source={require('../img/profile_pic.png')} style={{width:43,height:43,marginLeft:210,marginTop:20,}}/>
          </View>
          <View style={styles.ct_1}>
            <Text style={{fontSize:14,color:'#ADADAD',}}>E-mail address</Text>
          </View>
         <View style={styles.ct1}>
          <Text style={{fontSize:16,paddingLeft:55,paddingTop:10,position:'absolute'}}>admin@gmail.com</Text>
          <TextInput Text='admin@gmail.com' style={{fontSize:16,position:'absolute'}}></TextInput>
          <Image source={require('../img/icon_page/user.png')} style={{width:22,height:22,marginTop:10,marginLeft:25,}}/>
         </View>
         <View style={styles.ct2}>
          <Text style={{fontSize:14,color:'#ADADAD',}}> Password</Text>
         </View>
         <View style={styles.ct3}>
          <Image source={require('../img/icon_page/pass.png')} style={{width:22,height:22,marginLeft:25,marginTop:8,}}/>
        <TextInput placeholder='****' style={{paddingLeft:55,paddingTop:12,position:'absolute',}}></TextInput>
        <TouchableOpacity onPress={()=>navigation.navigate("Registration")} style={styles.button}>
          <Text style={styles.textBtn}>Change</Text>
        </TouchableOpacity>
         </View>
         <View style={styles.ct4}>
          <Text style={{fontSize:14,color:'#ADADAD',}}>Authenticate</Text>
         </View>
         <View style={styles.ct5}>
          <Text style={{fontSize:16,paddingLeft:55,paddingTop:10,position:'absolute'}}>Travel blogger</Text>
          <TextInput Text='Travel blogger' style={{fontSize:16,position:'absolute'}}></TextInput>
          <Image source={require('../img/icon_page/people.png')} style={{width:22,height:22,marginTop:10,marginLeft:25,}}/>
         </View>
         <View style={styles.ct6}>
          <Image source={require('../img/icon_page/log-out.png')} style={styles.ct6_1}/>
          <TouchableOpacity onPress={()=>navigation.navigate("Sing_In")}>
          <Text style={{fontSize:16,fontWeight:700,color:'#0373F3',marginLeft:77,marginTop:33}}>Log out</Text>
          </TouchableOpacity>
         </View>
         
         </View>
         </View>
  )
}

const styles = StyleSheet.create({
  containerPersonal:{
    flex:1,
    },
    headerPersonal:{
      marginTop:70,
      marginLeft:25,
   
    },
    ct:{
  flexDirection:'row',
    },
  ct_1:{
  marginLeft:30,
  marginTop:10,
  },
  ct1:{
    width:355,
    height:40,
    borderWidth:1,
    borderColor:'#E9E9E9',
    borderRadius:36,
   marginTop:20,
   marginLeft:30,
   
  },
  ct3:{
    width:355,
    height:40,
    borderWidth:1,
    borderColor:'#E9E9E9',
    borderRadius:36,
    marginTop:20,
   marginLeft:30,
  },
  button:{
    width:100,
    height:30,
    backgroundColor:'#0373F3',
       position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:19,
  marginLeft:250,
  marginTop:4,
  },
  textBtn:{
  fontSize:14,
  color:'#fff',
  },
  
  ct2:{
  marginTop:20,
  marginLeft: 30,
  },
  ct4:{
    marginTop:20,
    marginLeft: 30,
  },
  ct5:{
    width:355,
    height:40,
    borderWidth:1,
    borderColor:'#E9E9E9',
    borderRadius:36,
    marginTop:20,
   marginLeft:30,
  },
  ct6_1:{
    width:24,
    height:24,
    marginTop:30,
    marginLeft:39,
    position:'absolute'
  }
})