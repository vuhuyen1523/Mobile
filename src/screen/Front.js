import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Dropdown from './Dropdown'

export default function Front({navigation}) {
  const [dataSource] = useState([
    { country: 'switzerland', imageSource: require('../img/swizerland.png') },
    { country: 'iceland', imageSource: require('../img/iceland.svg.png') },
    { country: 'egypt', imageSource: require('../img/egypt.jpg') },
    { country: 'zambia', imageSource: require('../img/zambia.jpg') },
    { country: 'vietnam', imageSource: require('../img/vietnam.webp') },
    { country: 'japan', imageSource: require('../img/japan.png') },
    { country: 'new zealand', imageSource: require('../img/newzealand.png') },
    { country: 'fiji', imageSource: require('../img/fiji.jpg') },
    { country: 'canada', imageSource: require('../img/canada.jpg') },
    { country: 'colombia', imageSource: require('../img/colombia.jpg') }
  ])
  const [filter, setFilter] = useState(dataSource)
  const[searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if(text) {
      setSearching(true)
      const temp = text.toLowerCase()
      const tempList = dataSource.filter(item => {
        if(item.country.toLowerCase().includes(temp)) {
          return item
        }
      })
      setFilter(tempList)
    }
    else {
      setSearching(false)
      setFilter(dataSource)
    }
  }

  return (
    <View>
    <ScrollView>
      <Text style={styles.line9}>Find your next trip</Text>
      <Text style={styles.nordic}>Around the world</Text>
      <TouchableOpacity style={styles.home}>
        <Ionic name='search-outline' style={{ fontSize: 24, color: 'gray', paddingTop: 8, marginStart: 20 }}></Ionic>
        <TextInput
            style={{paddingTop:11, marginStart: 60, position:'absolute'}}
            placeholder='Search...'
            keyboardType="default"
            onChangeText={onSearch}
        /> 
      </TouchableOpacity>
      { 
        searching &&
        <Dropdown dataSource={filter} navigation={navigation}/>
      }
      <View style={styles.hiphop1}>
        <Text style={styles.popular}>Europe</Text>
      </View>

      <ScrollView horizontal={true} style={{height: 170}}>
        <TouchableOpacity style={styles.imageExplore}>
          <Image style={styles.Exrope}source={require('../img/item1.png')}/>
          <Text style={styles.b1}>Switzerland</Text>
          <Text style={styles.c1}>See reviews</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageExplore}>
          <Image style={styles.Exrope}source={require('../img/item2.png')} />
          <Text style={styles.b2}>Iceland</Text>
          <Text style={styles.c2}>See reviews</Text>
          
        </TouchableOpacity>
      </ScrollView>

          <View style={styles.hiphop2}>
          <Text style={styles.popular1}>Africa</Text>
          </View>

          <ScrollView horizontal={true} style={{height: 170}}>
           <TouchableOpacity style={styles.imageExplore} >
           <Image style={styles.Africa} source={require('../img/item3.jpg')}/>
           <Text style={styles.b1}>Egypt</Text>
           <Text style={styles.c1}>See reviews</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image  style={styles.Africa}source={require('../img/item4.jpg')}/>
           <Text style={styles.b2}>Zambia</Text>
           <Text style={styles.c2}>See reviews</Text>
           </TouchableOpacity>
          </ScrollView>

          <View style={styles.hiphop3}>
          <Text style={styles.popular1}>Asia</Text>
          </View>

          <ScrollView horizontal={true} style={{height: 170}}>
           <TouchableOpacity style={styles.imageExplore} onPress={()=>navigation.navigate("Detail")}>
           <Image style={styles.Asia} source={require('../img/item5.png')}/>
           <Text style={styles.b1}>Vietnam</Text>
           <Text style={styles.c1}>See reviews</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image  style={styles.Asia}source={require('../img/item6.jpg')}/>
           <Text style={styles.b2}>Japan</Text>
           <Text style={styles.c2}>See reviews</Text>
           </TouchableOpacity>
          </ScrollView>
<View style={styles.hiphop4}>
          <Text style={styles.popular1}>Australia</Text>
          </View>

          <ScrollView horizontal={true} style={{height: 170}}>
           <TouchableOpacity style={styles.imageExplore} >
           <Image style={styles.Australia} source={require('../img/item7.jpg')}/>
           <Text style={styles.b1}>New Zealand</Text>
           <Text style={styles.c1}>See reviews</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image  style={styles.Australia}source={require('../img/item8.webp')}/>
           <Text style={styles.b2}>Fiji</Text>
           <Text style={styles.c2}>See reviews</Text>
           </TouchableOpacity>
          </ScrollView>

          <View style={styles.hiphop5}>
          <Text style={styles.popular1}>Americas</Text>
          </View>

          <ScrollView horizontal={true} style={{height: 170}}>
           <TouchableOpacity style={styles.imageExplore} >
           <Image style={styles.Americas} source={require('../img/item9.webp')}/>
           <Text style={styles.b1}>Canada</Text>
           <Text style={styles.c1}>See reviews</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image  style={styles.Americas}source={require('../img/item10.jpg')}/>
           <Text style={styles.b2}>Colombia</Text>
           <Text style={styles.c2}>See reviews</Text>
           </TouchableOpacity>
          </ScrollView>
          
</ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
  c2:{
    marginTop: 2 ,
    color: 'white',
    marginStart: 40,
    fontSize: 12
  },
  b2:{
    marginTop: -70,
    fontWeight: 'bold',
    color: 'white',
    marginStart: 40,
    fontSize: 20
  },
 
  c1:{
    marginTop: 2 ,
    color: 'white',
    marginStart: 40,
    fontSize: 12
    
  },
  b1:{
    marginTop: -70,
    fontWeight: 'bold',
    color: 'white',
    marginStart: 40,
    fontSize: 20
  },
  Americas:{
    width: 230,
    height: 138,
    marginStart: 22,
    borderRadius: 20,
    marginTop:30,
  },
  Australia:{
    width: 230,
    height: 138,
    marginStart: 22,
    borderRadius: 20,
    marginTop:30,
  },
  Asia:{
    width: 230,
    height: 138,
    marginStart: 22,
    borderRadius: 20,
    marginTop:30,
  },
  Exrope:{
    width:230,
    height: 138,
    marginStart: 22,
    borderRadius: 20,
    marginTop: 30,
    
  },
  Africa:{
    width: 230,
    height: 138,
    marginStart: 22,
    borderRadius: 20,
    marginTop:30,
  },
  hiphop5:{
    width: 88,
    height: 27,
    marginTop: 45,
    marginStart: 22,
  },
  hiphop4:{
    width: 84,
    height: 27,
    marginTop: 45,
    marginStart: 22,
  },
  hiphop3:{
    width: 40,
    height: 27,
    marginTop: 45,
    marginStart: 22,
  },
  hiphop2:{
    width: 55,
    height: 27,
    marginTop: 45,
marginStart: 22,
  },
  hiphop1:{
    width: 64,
     height: 27,
     marginTop: 45,
     marginStart: 22,
  },
  popular1:{
     fontWeight: 'bold',
     fontSize: 18,
  },
   hiphop:{
    width: 160,
     height: 27,
     marginTop: 44,
     marginStart: 22,
  },
   
  popular:{
     fontWeight: 'bold',
     fontSize: 18,
  },
  home:{
    width: 420,
    height: 50,
    borderWidth: 1,
    borderColor: '#858D97',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 30,
    marginTop: 30,
    marginStart: 20,
    marginBottom: 10
  },
  nordic:{
    width: 220,
     height: 39,
     fontWeight: "bold",
     fontSize: 26,
     marginTop: 1,
     marginStart: 22,

  },
  line9:{
    width: 144,
     height: 24,
     marginTop: 81,
     marginStart: 22,
     fontSize: 16,
     color:"#818181"
  }

})