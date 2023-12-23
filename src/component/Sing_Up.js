import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, Alert, Modal} from 'react-native'
import React, { useState } from 'react'

export default function Sing_Up({navigation}) {
  const username="admin";
  const password="1";
  const [status_check,setStaus_Check]=useState(false);
  const [username_input,setUsername_Input]=useState("");
  const [password_input,setPassword_input]=useState("");
  const [confirmPassword_input, setConfirmPassword_input] = useState('');
  const Handle_username=(text)=>{
    setUsername_Input(text)
  }
  const Handle_password=(text)=>{
    setPassword_input(text);
  }
  const Handle_confirmPassword=(text)=>{
    setConfirmPassword_input(text);
  }

  const Check_admin=()=>{
    if(username_input==="admin@gmail.com" && password_input==="1234" && confirmPassword_input==="1234")
    {
      navigation.navigate('Navigation_Tab')
      setPassword_input("");
      setUsername_Input("");
      setConfirmPassword_input("");
      

    }
  else{
    Alert.alert("Tài khoản dang ki that bai")
    
    }
  }

  const [Visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <View style={styles.containerSing_Up}>
     <View style={styles.headerSing_Up}>
      <TouchableOpacity onPress={()=>navigation.navigate('Sing_In')} style={{marginTop: 20, width: 25, height: 25}}>
        <Image source={require('../img/icon_page/arrow_goback.png')}/>
      </TouchableOpacity>
     </View>
     <View style={styles.contentSing_Up}>
     <Text style={styles.line7}>Sign up free</Text>
     <Text style={styles.oline}>Or continue with</Text>
          <View  style={styles.search}>
          <Image source={require('../img/icon_page/user.png')} style={{width:22,height:22,marginTop:15,marginLeft:20}}/>
            <TextInput
             style={{paddingTop:15,marginStart: 60, position:'absolute'}}
            placeholder='Enter e-mail address'
            keyboardType="default"
            value={username_input}
            onChangeText={Handle_username}
            
          /></View>
          
          <Text style={styles.oline}>Or continue with</Text>
          <View style={styles.pass}>
          <Image source={require('../img/icon_page/pass.png')} style={{width:22,height:22,marginTop:15,marginLeft:20}}/>
             <TextInput
           style={{paddingTop:15,marginStart: 60, position:'absolute'}}
            placeholder='Create a password'
            value={password_input}
            onChangeText={Handle_password}
            keyboardType="default"
            secureTextEntry={true}
          /></View>
         
           <Text style={styles.oline}>Or continue with</Text>
           <View style={styles.rapeat}>
           <Image source={require('../img/icon_page/pass.png')} style={{width:22,height:22,marginTop:15,marginLeft:20}}/>
             <TextInput
            style={{paddingTop:15,marginStart: 60, position:'absolute'}}
            placeholder='Create password'
            value={confirmPassword_input}
            onChangeText={Handle_confirmPassword}
            keyboardType="default"
            secureTextEntry={true}
          /></View>
      </View>
      <Image source={require('../img/icon_page/rule.png')} style={styles.imgsu}/>
      <Text style={styles.nextsu}>
          I have read the <Text style={styles.nextSing_Up} onPress={show}>Term of Service</Text>
        </Text>
      <View style={styles.buttonSing_Up}>
        <TouchableOpacity onPress={Check_admin} style={styles.button}>
          <Text style={styles.textBtn}>Continue</Text>
        </TouchableOpacity>
     </View>
     <Modal transparent={true} visible={Visible} animationType='slide'>
        <View style={{backgroundColor: '#000000aa', flex: 1}}>
          <View style={{backgroundColor: '#ffffff', borderRadius: 20, margin: 50}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 25, paddingTop: 10}}>TERM OF SERVICE</Text>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>1, Acceptance:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>By using our travel app, you agree to abide by the terms outlined herein. Cease usage if any terms are disagreeable.</Text>
            </View>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>2, Ownership:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>All intellectual property rights are ours. No copying, modifying, or distributing without written permission.</Text>
            </View>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>3, Data Usage:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>Usage implies consent to collect and use personal data as per our Privacy Policy.</Text>
            </View>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>4, Responsibility:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>You are responsible for account security; we are not liable for any damages.</Text>
            </View>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>5, Changes:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>We may modify terms without notice; check for updates regularly.</Text>
            </View>
            <View style={{margin: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>6, Contact:</Text>
              <Text style={{fontSize: 14, paddingTop: 7}}>For any questions, suggestions, or complaints regarding the terms of service, please contact us via the support email: <Text style={{color: 'blue'}}>support@gmail.com</Text></Text>
            </View>
            <Text onPress={hide} style={{textAlign: 'center', fontSize: 18, padding: 10, color: 'gray'}}>Close</Text>
          </View>
        </View>
     </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  oline:{
    marginTop: 30,
    color: 'gray',
    marginStart: 20
  },
  buttonSing_Up:{
    paddingStart: 20
  },
  nextsu:{
    marginStart: 50,
    marginTop: 595,
    color:"#000000",
    position: 'absolute'
  },
  imgsu: {
    width: 25,
    height: 25,
    marginStart: 20,
    marginTop: 31
  },
  rapeat:{
    width: 425,
    height: 60,
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 10,
    marginStart:20
  },
  search:{
    width: 425,
    height: 60,
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 10,
    marginStart:20
  },
  pass: {
    width: 425,
    height: 60,
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 10,
    marginStart:20
  },
  line7:{
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 50,
    fontSize: 30,
  },
  headerSing_Up:{
    paddingStart: 20,
    paddingTop: 70
  },
  button:{
    backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: 425,
    height: 60,
    borderRadius:30,
    marginTop: 160
  },
  textBtn:{
    color:'#fff',
    fontWeight:'bold'
  },
  nextSing_Up:{
    color: "#0373F3"
  },
})