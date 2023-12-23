    import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
    import React from 'react'
    
    export default function Introduction({navigation}) {
      return (
        <View>
          <View>
            <ImageBackground source={require('../img/mu-cang-chai.webp')}  style={styles.intro_img}>
              <TouchableOpacity onPress={()=>navigation.navigate("Navigation_Tab")}>
                <Image source={require('../img/icon_page/back.png')} style={styles.back}/>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.txt}>About</Text>
            <Text style={styles.txt_intro}>Mu Cang Chai is a small mountainous town of Yen Bai province, located at the foot of the Hoang Lien Son Mountain.</Text>
            
            <Image source={require('../img/rate.png')} style={styles.rate}/>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginStart: 135, marginTop: 150, position: 'absolute'}}>5.0</Text>
            <Text style={{fontSize: 16, marginStart: 165, marginTop: 150, color: 'gray', position: 'absolute'}}>(78 reviews)</Text>
            
            <Text style={{fontSize: 18, fontWeight: 'bold', marginStart: 30, marginTop: 40}}>Pricing</Text>
            <Image source={require('../img/icon_page/flight.png')} style={{width: 50, height: 50, marginStart: 30, marginTop: 30}}/>
            <Text style={{marginStart: 100, marginTop: 260, fontSize: 18, fontWeight: 'bold', position: 'absolute'}}>Flights</Text>
            <Text style={{marginStart: 100, marginTop: 285, fontSize: 18, color: 'gray', position: 'absolute'}}>from $199</Text>
            
            <View style={styles.btn}>
              <TouchableOpacity onPress={()=>navigation.navigate('Schedule')} style={styles.button}>
                <Text style={styles.textBtn}>Plan trip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      back: {
        marginStart: 35,
        marginTop: 80,
        width: 35,
        height: 35
      },
      intro_img: {
        height: 380
      },
      bottom: {
        backgroundColor: 'white',
        height: 575,
        borderRadius: 40,
        marginTop: -50
      },
      txt: {
        marginTop: 30,
        marginStart: 30,
        fontSize: 18,
        fontWeight: 'bold'
      },
      txt_intro: {
        marginTop: 5,
        marginStart: 30,
        fontSize: 18,
        width: 395
      },
      rate: {
        marginStart: 30,
        marginTop: 25,
        width: 95,
        height: 16
      },
      btn:{
        paddingStart: 20
      },
      button:{
        backgroundColor:'blue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width: 425,
        height: 60,
        borderRadius:30,
        marginTop: 130
      },
      textBtn:{
        color:'#fff',
        fontWeight:'bold'
      }
    })