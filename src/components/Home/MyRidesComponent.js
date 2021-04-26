import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, TextInput, ScrollView, FlatList, Image } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class MyRidesComponent extends Component {
  state = {
    latitude: 20.9948891,
    longitude: 105.799677,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
    date: new Date(),
    setTime: false
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapStyle}>
            <Marker
              draggable
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={'Test Marker'}
              description={'This is a description of the marker'}
            />

          </MapView>

        </View>
        <View />



        <BottomSheet isOpen sliderMaxHeight={Height*.98}  sliderMinHeight={Height*.5}>
     
        <View style={styles.BottomView}>

          <View style={styles.RideView}>
            <View style={{alignItems:'flex-start',}}>
            <Text style={[styles.Title, { fontSize: 16, left: 10 }]}>Suggested Rides</Text>
            <View style={{height: Height*.75, width:Width}}>
            <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                    <Ripple onPress={() => this.props.navigateToBooking()} style={styles.FlatView}>
                        <View style={{height:100, width:'50%', justifyContent:"space-around"}}>
                        <Text style={[styles.Title, { fontSize: 14, left: 10 }]}>Sedan</Text>
                        <Text style={[styles.Title, { fontSize: 10, left: 10, marginTop:0 }]}>3 Seats</Text>
                        <Text style={[styles.Title, { fontSize: 16, left: 10, marginTop:0, color:"#FF75AC" }]}>₹ 1000   <Text style={[styles.Title,{fontSize:12}]}> 10 - 15 min</Text></Text>
                          </View>
                          <View style={styles.ImageView}>
                            <Image source={require('../../assets/Image/car1.png')} />
                          </View>
                   </Ripple>      
                  
                  }  
                
                />  
                </View>
              </View>
            <View style={styles.BookView}>
          <Ripple onPress={() => this.setState({setTime:false})}>
             <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
               <Text style={styles.ButtonText}>BOOK NOW</Text>
             </LinearGradient>
             </Ripple>
             </View>
          </View>
               
          
          </View>
      </BottomSheet>
      </SafeAreaView>
    );
  }
}


const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  Button: {
    height: 45,
    width: Width*.75,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
    marginTop: 5
  },
  ButtonText: {
    fontFamily: 'NunitoSans-Bold',
    color: 'white'
  },
  BottomView:{
    height:Height*.95, 
    width:Width,  
    alignSelf:'center'
  },
  RideView:{
    height:'100%', 
    width:'100%', 
    backgroundColor:'#FFF', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  BookView:{
    height:100, 
    width:Width,  
    alignItems:'center', 
    elevation:20,
    borderWidth: 0,
    backgroundColor:'#FFFF'
  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#121212',
    fontSize: 18,
    marginTop: 10,
  },
  FlatView:{
    width:Width*.9, height:100, backgroundColor:'#E3E5E5', marginTop:10, alignSelf:'center', borderRadius: 5, flexDirection:"row", justifyContent:"space-between"
  },
  ImageView:{
    height:100, width:'50%', justifyContent:"center", alignItems:'center'
  }


});