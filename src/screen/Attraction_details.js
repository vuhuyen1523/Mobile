import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { Keyboard } from 'react-native'
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Attraction_details({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground source={require('../img/binh_minh.jpg')} style={{ height: Height, padding: 20 }} >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
          <View style={{ height: Height / 2.2, flexDirection: 'column', justifyContent: 'space-around', marginBottom: 20 }}>
            <View>
              <Text style={{ color: '#fff', fontSize: 35, paddingBottom: 10 }}>Mu Cang Chai</Text>
              <Text style={{ width: '40%', color: '#fff', fontSize: 18, letterSpacing: 1, paddingBottom: 20 }}>Mu Cang Chai is a small mountainous town of Yen Bai province, located at the foot of the Hoang Lien Son Mountain. </Text>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.imageIcon} source={require("../img/icon_page/start.png")} />
                <Image style={styles.imageIcon} source={require("../img/icon_page/start.png")} />
                <Image style={styles.imageIcon} source={require("../img/icon_page/start.png")} />
                <Image style={styles.imageIcon} source={require("../img/icon_page/start.png")} />
                <Image style={styles.imageIcon} source={require("../img/icon_page/start.png")} />

                <Text style={{ color: '#fff', paddingStart: 5 }}>5.0</Text>
                <Text style={{ color: '#fff', paddingStart: 5 }}>(78 reviews)</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.btn_detail, { marginRight: 20 }]} onPress={() => navigation.navigate('Map')}>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>Enter the plan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_detail} onPress={() => navigation.navigate('Detail')}>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>View other</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 16,
    height: 16,
  },
  btn_detail: {
    height: 50,

    width: Width / 2.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20
  },
})