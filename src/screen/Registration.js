import { StyleSheet, Text, View ,TouchableOpacity,Image, TextInput, Alert} from 'react-native'
import React, {useState} from 'react'

export default function Registration({navigation}) {
  const currentPassword="4321"
  const password="1234";
  const [status_check, setStaus_check]=useState(false);
  const [currentPassword_input,setcurrentPassword_Input]=useState("");
  const [password_input,setPassword_input]=useState("");
  const [Confimpassword_input,setConfirmPasword_input]=useState('');
  const Handle_currentPassword=(text)=>{
    setcurrentPassword_Input(text);
  }
  const Handle_password=(text)=>{
setPassword_input(text);
  }
  const Handle_Confimpassword=(text)=>{
    setConfirmPasword_input(text);
  }
  const Check_admin=()=>{
    if(currentPassword_input==="4321"&& password_input==="1234"&& Confimpassword_input==="1234"){
      Alert.alert("Thay đổi mật khẩu thành công")
      setPassword_input("");
      setcurrentPassword_Input("");
      setConfirmPasword_input("");
    }
    else{
      Alert.alert("Thay đổi mật khẩu thất bại")
    }
  }
  
  return (
    <View style={styles.containerRegis}>
     <View style={styles.headerRegis}>
      <TouchableOpacity onPress={()=>navigation.navigate('Navigation_Tab')}>
        <Image source={require('../img/icon_page/arrow_goback.png')} />
      </TouchableOpacity>
     </View>
      <View style={styles.contentRegis}>
          <View style={styles.ct1}>
          <Text style={{fontSize:30,fontWeight:800,color:'#1F1F1F'}}>Change password</Text>
          </View>
         <View style={styles.ct2}>
           <View style={styles.ct2_2}>
           <Image source={require('../img/icon_page/pass.png')} style={{width:25,height:25,}}/>
           </View>
           <TextInput placeholder='Your current password' style={styles.ct2_1} 
           keyboardType="default" 
           value={currentPassword_input}
           onChangeText={Handle_currentPassword}
           secureTextEntry={true}
           />
         </View>
          <View style={styles.ct3}>
           <View style={styles.ct2_2}>
           <Image source={require('../img/icon_page/pass.png')} style={{width:25,height:25,}}/>
           </View>
           <TextInput placeholder='Your new password' style={styles.ct2_1}
           value={password_input}
           onChangeText={Handle_password}
           keyboardType="default"
           secureTextEntry={true}
           />
          </View>
              <View style={styles.ct4}>
                <View style={styles.ct2_2}>
                <Image source={require('../img/icon_page/pass.png')} style={{width:25,height:25,}}/>
                </View>
                <TextInput placeholder='Confirm password' style={styles.ct2_1}
                keyboardType="default"
                onChangeText={Handle_Confimpassword}
                value={Confimpassword_input}
                secureTextEntry={true}
                />
              </View>

              <View style={styles.bt}>
              <TouchableOpacity onPress={Check_admin} style={styles.button}>
              <Text style={styles.textBtn}>Save</Text>
              </TouchableOpacity>
              </View>
         </View>
     </View>
  )
}

const styles = StyleSheet.create({
  headerRegis:{
    marginTop:74,
    marginLeft:25,
  },
 ct1:{
  marginTop:20,
  marginLeft:25,
 },
 ct2:{
  marginTop:20,
  marginLeft:30,
 },
 
 ct2_1:{
  width:355,
  height:40,
  borderWidth:1,
  borderColor:'#E9E9E9',
  borderRadius:36,
 paddingLeft:55,
 },
 ct2_2:{
paddingLeft:20,
paddingTop:8,
position:'absolute',
 },
 ct3:{
  marginTop:20,
  marginLeft:30,
 },
 ct4:{
  marginTop:20,
  marginLeft:30,
 },
 bt:{
marginLeft:30,
marginTop:300,
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
  color:'#fff',
 
},
})