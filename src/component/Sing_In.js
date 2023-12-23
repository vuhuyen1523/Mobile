import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert ,TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import {Dimensions} from 'react-native';
const Height = Dimensions.get('window').height;
import { Keyboard } from 'react-native'

export default function Sing_In({ navigation }) {
  const [username_input, setUsername_Input] = useState("");
  const [password_input, setPassword_input] = useState("");
 
  const Handle_username = (text) => {
    setUsername_Input(text)
  }
  const Handle_password = (text) => {
    setPassword_input(text);
  }

  const Check_admin = () => {
    if (username_input === "admin@gmail.com" && password_input === "1234") {
      navigation.navigate('Navigation_Tab')
      setPassword_input("");
      setUsername_Input("");

    }
    else {
      Alert.alert("Tài khoản mật khẩu không chính xác!!!")

    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.containerSing_In}>
      <View style={styles.headeSing_In}>
       <TouchableOpacity onPress={()=>navigation.navigate("StartPage3")} style={{marginTop: 70, width: 25, height: 25}}>
       <Image source={require('../img/icon_page/arrow_goback.png')}/>
       </TouchableOpacity>
      </View>
      <View style={styles.contentSing_in}>
        <Text style={styles.line7}>Sign in</Text>
      <View style={styles.search}>
          <Image source={require('../img/icon_page/user.png')} style={{ width: 22, height: 22, marginLeft: 20 }} />
          <TextInput
            style={{ fontSize: 15.5, padding: 13, width: '80%' }}
            placeholder='Enter e-mail address'
            keyboardType='email-address'
            value={username_input}
            onChangeText={Handle_username}
          />
        </View>
        <View style={styles.pass}>
          <Image source={require('../img/icon_page/pass.png')} style={{ width: 22, height: 22, marginLeft: 20 }} />
          <TextInput
            style={{ fontSize: 15.5, padding: 13, width: '80%' }}
            placeholder='Enter password'
            value={password_input}
            onChangeText={Handle_password}
            keyboardType="default"
            secureTextEntry={true}
          /></View>
      </View>
      <Text style={styles.nextsu}>
          Do not have an account?<Text onPress={()=>navigation.navigate("Sing_Up")} style={styles.nextSing_Up}> Sign up</Text>
        </Text>
      <View style={styles.buttonSing_In}>
        <TouchableOpacity onPress={Check_admin} style={styles.button}>
          <Text style={styles.textBtn}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  contentSing_in: {
    paddingTop: 70,
    
  },
  containerSing_In: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonSing_In: {
    marginTop:Height/3,
  },
  nextsu: {
    marginStart: 70,
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 15.5,
    color: "#000000"
  },
  search: {
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'


  },
  pass: {
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'

  },
  line7: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headeSing_In: {
    paddingTop: 20
  },
  button: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 30,
    color: 'blue',
    backgroundColor:'blue',
  },
  textBtn: {
    color: '#fff',
    fontWeight: 'bold'
  },
  nextSing_Up: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#0373F3",
  },
})
