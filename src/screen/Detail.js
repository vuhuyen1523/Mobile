import { StyleSheet, Text, TouchableOpacity, View, TextInput,FlatList ,ImageBackground, TouchableWithoutFeedback} from 'react-native'
import React, {useState} from 'react'
import { data_VN } from '../Data.js'
import { Dimensions } from 'react-native';
import { Keyboard } from 'react-native'
const Height = Dimensions.get('window').height;
import Ionic from 'react-native-vector-icons/Ionicons'

export default function Detailed_location({ navigation }) {
  const Item = ({ image, name, content }) => (

    <TouchableOpacity style={{ flex: 1, padding: 10, height: 130 }} onPress={() => navigation.navigate('Attraction_details')} >
      <ImageBackground source={image} style={{ flex: 1, padding: 10 }} imageStyle={{ borderRadius: 20 }}>

        <View style={{ borderRadius: 20, flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
          <Text numberOfLines={1} style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ color: '#fff' }}>{content}</Text>
        </View>
      </ImageBackground>

    </TouchableOpacity>
  )

  const [searchQuery, setSearchQuery] = useState("");
  const filterData = (item) => {
    if(searchQuery === "") {
      return(
        <Item image={item.image} name={item.title} content={item.from} datnuoc={item.datnuoc} />
      );
    }

    if(item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) || item.from.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
      return(
        <Item image={item.image} name={item.title} content={item.from} datnuoc={item.datnuoc} />
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.container_detail_location}>
        <View style={styles.header_detail_location}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '68%' }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Navigation_Tab")}>
              <Ionic name='arrow-back' style={{ fontSize: 30, paddingTop: 6 }}></Ionic>
            </TouchableOpacity>

            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>VIETNAM</Text>
          </View>
        </View>
        <View style={styles.content_detail_location}>
          <View style={styles.input_search}>
            <Ionic name='search-outline' style={{ fontSize: 24, color: 'gray', marginStart: 20 }}></Ionic>
            <TextInput
              style={styles.input}
              placeholder='Search...'
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <FlatList
              data={data_VN}
              renderItem={({ item }) => filterData(item)}
              keyExtractor={item => item.id}
              numColumns={2}
              style={{ height: Height / 1.3, marginTop: 10 }}
            />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container_detail_location: {
    height: Height,
    padding: 20,
    paddingTop: 60
  },
  header_detail_location: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  input_search: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    gap: 10,
    padding: 13,
    alignItems: 'center'

  },
  input: {
    width: 373
  },
  content_detail_location: {
    paddingTop: 20
  },
})