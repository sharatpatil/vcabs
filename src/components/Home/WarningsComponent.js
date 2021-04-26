import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, TextInput, Image } from 'react-native';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class WarningsComponent extends Component {
    state = {
        latitude: 20.9948891,
        longitude: 105.799677,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
        warn: true
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


                {this.state.warn ? (
                    <View style={styles.WarnView}>
                        <View>
                            <Text style={[styles.Title, { fontSize: 10, textAlign: 'center', marginTop: 5 }]}>WE FEEL REGRET</Text>
                            <Text style={[styles.Title, {}]}>VEHICLE IS NOT AVAILABLE</Text>
                        </View>
                        <Ripple onPress={() => this.setState({warn:false})}>
                            <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                                <Text style={styles.ButtonText}>TRY ANOTHER VEHICLE OPTION</Text>
                            </LinearGradient>
                        </Ripple>
                        <Text style={[styles.Title, { color: "#00000059" }]}>TRY AFTER SOME TIMES</Text>
                    </View>

                ) : (
                    <View style={styles.WarnView}>
                        <Icon name="ios-alert-circle" size={60} color="#FF75AC" />
                        <View>
                            <Text style={[styles.Title, { fontSize: 13 }]}>CANCEL THIS RIDE?</Text>
                            <Text style={[styles.Title, { fontSize: 10, textAlign: 'center', marginTop: 5 }]}>Passenger that cancel less get faster bookings</Text>
                        </View>
                        <Ripple onPress={() => this.props.navigateToWaenings()}>
                            <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                                <Text style={styles.ButtonText}>KEEP THE BOOKING</Text>
                            </LinearGradient>
                        </Ripple>
                        <Ripple onPress={() => this.setState({warn:true})}>
                            <LinearGradient colors={['#F4F3F5', '#F4F3F5',]} style={styles.Button}>
                                <Text style={[styles.ButtonText,{color:'#000000'}]}>CANCEL RIDE</Text>
                            </LinearGradient>
                        </Ripple>
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
    maincontainer: {
        flex: 1,
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    Title: {
        fontFamily: 'NunitoSans-Bold',
        color: '#121212',
        fontSize: 16,
        textAlign: 'center'
    },
    WarnView: {
        height: Height * .4,
        width: Width,
        backgroundColor: '#FFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: 'space-around',
        alignItems: 'center'
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