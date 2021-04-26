import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, TextInput } from 'react-native';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import DatePicker from 'react-native-date-picker';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class HomeComponent extends Component {
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
 
        {!this.state.setTime ? (
             <View style={styles.BottomView}>
             <View style={styles.ContentView}>
               <Text style={styles.Title}>Where are you going?</Text>
               <Text style={[styles.Title, { fontSize: 14 }]}>Book on-demand or pre-schedule rides</Text>
               <View style={styles.TextInputView}>
                 <TextInput
   
                   onChangeText={text => this.setState({ destination: text })}
                   style={styles.InputText}
                   placeholder="Enter Phone Number" />
                 <Ripple onPress={() => this.setState({setTime:true})} style={styles.TimeView}>
                   <Text style={[styles.Title, { fontSize: 12, color: 'white', marginTop: 0 }]}>NOW</Text>
                 </Ripple>
               </View>
             </View>
           </View>

        ) : (

            
          <View style={{height:Height, width:Width, backgroundColor:'#00000040', justifyContent:'space-between'}}>
           
          <View />
           <View style={styles.TimesetView}>
             <View style={{width:Width, height:80,  flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
               <View>
               <Text style={[styles.Title, { fontSize: 16 }]}>Schedule Ride</Text>
               <Text style={[styles.Title, { fontSize: 14 }]}>Schedule your rides in advance</Text>
               </View>
               <Ripple onPress={() => this.props.navigateToMyRider()} style={styles.TimeView}>
               <Text style={[styles.Title, { fontSize: 12, color: 'white', marginTop: 0 }]}>RIDE NOW</Text>
             </Ripple>
             </View>
         
           <DatePicker
           style={{width:Width, height:80,}}
           date={this.state.date}
           onDateChange={date => this.setState({ date: date })}
           />
                   <Text style={[styles.Title, { fontSize: 11 }]}>Driver may arrive between 10:15 - 10:25 PM</Text>
                   <Ripple onPress={() => this.setState({setTime:false})}>
             <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
               <Text style={styles.ButtonText}>SET PICK-UP TIME</Text>
             </LinearGradient>
           </Ripple>
           </View>
           </View>

        )}
       

        
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
  BottomView: {
    height: Height * .3,
    width: Width,
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#121212',
    fontSize: 18,
    marginTop: 5,
  },
  ContentView: {
    width: Width * .9,
    height: Height * .25,
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  TextInputView: {
    width: '100%',
    height: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FE79AE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  InputText: {
    left: 10,
    maxWidth: '70%',
    fontSize: 14,
    fontWeight: "bold",
    width: '70%',
    color: 'black'
  },
  TimeView: {
    height: 48,
    width: '30%',
    backgroundColor: '#975CD2',
    borderRadius: 50,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TimesetView:{
    height:Height*.5, 
    width:Width, 
    backgroundColor:'white', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius:20,
    alignItems:'center',
    justifyContent:'space-around'

  },
  Button: {
    height: 45,
    width: Width*.75,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
  },
  ButtonText: {
    fontFamily: 'NunitoSans-Bold',
    color: 'white'
  }

});