import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'

import React, { useEffect } from 'react'
export default function Hawkeye({navigation}) {
  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigation.navigate('StartPage1');
      return () => clearTimeout(timer);
    },2000)
  })
  return (
    <ImageBackground source={require('../img/background_loading.png')} style={{flex:1}}>
     
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})