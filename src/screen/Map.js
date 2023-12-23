import { StyleSheet, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map({navigation}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 21.770557,
    longitude: 104.146663,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });

  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await Location.geocodeAsync(searchInput);

      if (response.length > 0) {
        const { latitude, longitude } = response[0];
        setMapRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        console.warn('No results found for the entered address.');
      }
    } catch (error) {
      console.error('Error occurred during geocoding:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} region={mapRegion} provider='google'>
        <Marker coordinate={mapRegion}/>
      </MapView>

      <View style={styles.back}>
        <TouchableOpacity onPress={()=>navigation.navigate("Attraction_details")} style={{alignItems: 'center', justifyContent: 'center', paddingTop: 11}}>
          <Image source={require('../img/icon_page/arrow_goback.png')}/>
        </TouchableOpacity>

        <View style={styles.search}>
          <TextInput
            style={{paddingTop: 6, marginStart: 30, width: 300}}
            placeholder='Search...'
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch} disabled={loading}>
          {loading ? (
              <ActivityIndicator color='black' size='small' />
            ) : (
              <Image
                source={require('../img/icon_page/search.png')}
                style={{ width: 22, height: 22, marginTop: 13, marginStart: 300 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
  back: {
    marginTop: 80,
    marginStart: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    position:'absolute'
  },
  search: {
    width: 340,
    height: 50,
    backgroundColor: 'white',
    paddingTop: 5,
    borderRadius: 30,
    marginTop: -39,
    marginStart: 70
  },
  searchButton: {
    position: 'absolute'
  }
})