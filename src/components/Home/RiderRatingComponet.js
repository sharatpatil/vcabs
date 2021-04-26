import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, TextInput, Image } from 'react-native';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import DatePicker from 'react-native-date-picker';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class RiderRatingComponet extends Component {
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
            
            <KeyboardAwareScrollView style={styles.maincontainer}> 
            <SafeAreaView style={{ height:Height, width:Width, justifyContent: 'space-between' }}>
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



                <View style={styles.ContainerBottom}>
                    <View style={{ width: Width * .9, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 90, width: 90 }} source={require('../../assets/Image/person.png')} />
                        <Text style={[styles.Title, { fontSize: 14 }]}>Gourav Arora</Text>
                        <Text style={[styles.Title, { fontSize: 14 }]}>3.6 *</Text>
                        <View style={{ borderWidth: 1, width: Width, borderColor: '#E2E2E2', marginTop: 20 }} />
                    </View>
                    <View style={{ width: Width, height: 120, justifyContent: 'center', alignItems: "center" }}>
                        <Text style={[styles.Title, {}]}>HOW IS YOUR TRIP?</Text>
                        <Text style={[styles.Title, { fontSize: 12, color: "#E2E2E2", maxWidth: Width * .6, }]}>Your feedback will help us improve driving experience better.</Text>

                        <Rating
                            type='custom'
                            ratingColor='#FE79AE'
                            ratingCount={5}
                            imageSize={30}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10, }}
                        />
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Additional Review..."
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>

                    <Ripple onPress={() => this.props.navigateToRiderRating()}>
              <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                <Text style={styles.ButtonText}>SUBMIT REVIEW</Text>
              </LinearGradient>
            </Ripple>

                </View>
             

            </SafeAreaView>
            </KeyboardAwareScrollView>
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
    maincontainer:{
        flex:1,
      },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    ContainerBottom: {
        height: Height * .8,
        width: Width,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "space-around",
        elevation: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    Title: {
        fontFamily: 'NunitoSans-Bold',
        color: '#121212',
        fontSize: 18,
        textAlign: 'center'
    },
    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        width:Width*.9,
        borderRadius:20,
        elevation: 5,
        backgroundColor:'#FFF',
        justifyContent:'flex-start'
        
    },
    textArea: {
        height: 120,
        fontFamily: 'NunitoSans-Bold',
        fontSize:12,  
        color:'#FE79AE'    
    },
    Button: {
        height: 45,
        width: Width * .7,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
      },
      ButtonText: {
        fontFamily: 'NunitoSans-Bold',
        color: 'white'
      }

});