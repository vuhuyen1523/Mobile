import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Dropdown({navigation, dataSource}) {  
    return (
    <View style={styles.bg}>
        {
            dataSource.map((item, index) => (
                <View key={index}>
                    <Text style={{ color: 'black', fontSize: 16, paddingTop: 7 }}
                    onPress={() => navigation.navigate('Detail')}>
                        {item.country}
                    </Text>
                    <Image source={item.imageSource} style={styles.image}/>
                    <View style={{borderColor: '#858D97', borderWidth: 0.35}} />
                </View>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: '#858D97',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginTop: '49%',
        marginStart: 20,
        position: 'absolute',
        width: '90%',
        zIndex: 1,
    },
    image: {
        position: 'absolute',
        width: 22,
        height: 15,
        marginStart: 330,
        marginTop: 12
    }
})