import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text, TextInput, ScrollView, FlatList, Image } from 'react-native';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import SwipeButton from 'rn-swipe-button';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-simple-bottom-sheet';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class BookingProcessComponent extends Component {
    state = {
        latitude: 20.9948891,
        longitude: 105.799677,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
        date: new Date(),
        setTime: false,
        msg:'',
        Booking:false,
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

                {this.state.Booking ? (
                     <BottomSheet isOpen sliderMaxHeight={Height*.9}  sliderMinHeight={Height*.48}>
                          <View style={styles.BottomBooking}>
                          <View style={{alignItems:"center"}}>
                      <Text style={[styles.Title, { fontSize: 16 }]}>WE FOUND YOU A DRIVER</Text>
                      <Text style={[styles.Title, { fontSize: 12, color:"#FE79AE" }]}>Driver will pickup you in 05:36</Text>
                      </View>
                      <View style={styles.Profile}>
                     <View style={styles.ProfileSub}>
                      <Image style={{height: 90, width:90, borderRadius:50}} source={require('../../assets/Image/person.png')} />
                      <Text style={[styles.Title, { fontSize: 12, color:"#303030", marginTop:4 }]}>Gourav Arora</Text>
                      </View>
                      <View style={styles.ProfileSub}>
                      
                      <Text style={[styles.Title, { fontSize: 12, color:"#121212",  }]}>OTP</Text>
                      <View style={styles.OTP}>
                      <Text style={[styles.Title, { fontSize: 13, color:"#121212", margin:5, fontFamily:'NunitoSans-ExtraBold' }]}>8576</Text>   
                      </View>
                      </View>
                      <View style={styles.ProfileSub}>
                      <Image style={{ }} source={require('../../assets/Image/car1.png')} />
                      <Text style={[styles.Title, { fontSize: 12, color:"#303030", marginTop:4 }]}>3.6 *</Text>
                      <Text style={[styles.Title, { fontSize: 10, color:"#303030", marginTop:4 }]}>Green Toyota</Text>
                      <Text style={[styles.Title, { fontSize: 14, color:"#303030", marginTop:4 }]}>KA02AF4393</Text>
                      </View>
                      </View>
                      <View style={styles.Msg}>
                      <Ripple style={styles.Call}>
                      <Icon name="ios-call" size={25} color="#999896" />
                      </Ripple>
                      <View style={styles.TextView}>
                      <TextInput
                      onChangeText={text => this.setState({ msg: text })}
                      style={styles.InputText}
                      placeholder="Message your driver..."
                      placeholderTextColor={'lightgrey'} />
                       <Ripple style={styles.Send}>
                      <Icon name="ios-send" size={25} color="#999896" />
                      </Ripple>
                      </View>
                      </View>
                      </View>
                      <View  style={styles.Destination}/>
                    <View style={styles.DestinationView}>
                    <Text style={[styles.Title, { fontSize: 12, color:'#707070' }]}>FARE</Text>
                    <Text style={[styles.Title, { fontSize: 25, color:'#FE79AE' }]}>₹ 80.00</Text>
                    <Text style={[styles.Title, { fontSize: 12, color:'#707070' }]}>Incl. Tax</Text>

                        <View style={{flexDirection:'row', width:'100%', }}>
                            <View style={styles.DotsView}>
                            <Icon name="ios-ellipse" size={10} color="#322143" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            </View>
                            <View style={styles.DestAdress}>
                            <Text style={[styles.Title, { fontSize: 14, color:'#707070', marginTop:5 }]}>PICKUP LOCATION</Text>
                            <Text style={[styles.Title, { fontSize: 14, color:'#303030', marginTop:5 }]}>Café Coffee Day, Sahakar Nagar</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row', width:'100%', }}>
                            <View style={styles.DotsView}>
                            <Icon name="ios-ellipse" size={10} color="#322143" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            </View>
                            <View style={styles.DestAdress}>
                            <Text style={[styles.Title, { fontSize: 14, color:'#707070', marginTop:5 }]}>DESTINATION #1</Text>
                            <Text style={[styles.Title, { fontSize: 14, color:'#303030', marginTop:5 }]}>Yelahanka</Text>
                            </View>

                        </View>

                        <View style={{flexDirection:'row', width:Width, justifyContent:'space-around', alignItems:'center', alignSelf:'center'}}>
                            <Ripple onPress={()=>this.props.navigateToBooking()} style={[styles.Button,{backgroundColor:'#E6E6E6'}]}>
                            <Text style={[styles.Title, { fontSize: 16, color:'#707070', }]}>CANCEL</Text>
                            </Ripple>
                            <Ripple onPress={()=>this.props.navigateToBooking()} style={[styles.Button,{backgroundColor:'#322143'}]}>
                            <Text style={[styles.Title, { fontSize: 16, color:'#FFFFFF', }]}>SHARE</Text>
                            </Ripple>

                        </View>
                    </View>
                      </BottomSheet>
                ) : (
                    <View style={styles.BottomBooking}>
                    <View />
                    <LottieView 
            resizeMode='cover'
            style={{height:120, width: 120}}
            source={require('../../assets/json/liquideloader.json')} 
            autoPlay loop />
                    <View style={{ alignItems: "center" }}>
                        <Text style={[styles.Title, { fontSize: 16 }]}>WE ARE PROCESSING YOUR BOOKING</Text>
                        <Text style={[styles.Title, { fontSize: 12 }]}>Your ride will start soon</Text>
                    </View>
                    <SwipeButton
                        titleStyles={{ fontFamily: 'NunitoSans-Bold', color: "white" }}
                        disabled={false}
                        //disable the button by doing true (Optional)
                        swipeSuccessThreshold={70}
                        height={45}
                        //height of the button (Optional)
                        width={330}
                        //width of the button (Optional)
                        title="SLIDE TO CANCEL"
                        //Text inside the button (Optional)
                        //thumbIconImageSource={thumbIcon}
                        //You can also set your own icon (Optional)
                        onSwipeSuccess={() => {
                            this.setState({Booking:true})
                        }}
                        //After the completion of swipe (Optional)
                        railFillBackgroundColor="#FE79AE" //(Optional)
                        railFillBorderColor="white" //(Optional)
                        thumbIconBackgroundColor="white" //(Optional)
                        thumbIconBorderColor="transparent" //(Optional)
                        railBackgroundColor="grey" //(Optional)
                        railBorderColor="#bbeaff" //(Optional)
                    />
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
    Button: {
        height: 45,
        width: '40%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 5
    },
    ButtonText: {
        fontFamily: 'NunitoSans-Bold',
        color: 'white'
    },
    BottomView: {
        height: Height * .4, 
        width: Width, 
        backgroundColor: "white", 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        justifyContent: 'space-around', 
        alignItems: "center"
    },
    RideView: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    BookView: {
        height: 100,
        width: Width,
        alignItems: 'center',
        elevation: 20,
        borderWidth: 0,
        backgroundColor: '#FFFF',
    
    },
    Title: {
        fontFamily: 'NunitoSans-Bold',
        color: '#121212',
        fontSize: 18,
       
    },
    BottomBooking:{
        height: Height * .4, 
        width: Width, 
        justifyContent: 'space-around', 
        alignItems: "center",
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    Profile:{
        flexDirection:'row', 
        height:120, 
        width:'100%',  
        justifyContent:'space-between', 
        alignItems:"center",
    },
    ProfileSub:{
        alignItems:"center", 
        justifyContent:'center', 
        width:Width*.33,
    },
    InputText: {
        left: 10,
        maxWidth: '70%',
        fontSize: 14,
        fontWeight: "bold",
        width: '70%',
        color: 'black'
      },
      OTP:{
        backgroundColor:"#EFEFEF", 
        justifyContent:"center", 
        alignItems:'center', 
        borderRadius:50
      },
      Msg:{
        width:Width, 
        height: 50, 
        alignItems:"center", 
        justifyContent:'center', 
        flexDirection:'row'
      },
      Call:{
        backgroundColor:'#EFEFEF', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:100, 
        height:40, 
        width:40
      },
      TextView:{
        width:Width*.8, 
        height:45, 
        backgroundColor:'#EFEFEF', 
        margin:5, 
        borderRadius:50, 
        justifyContent:'space-between', 
        flexDirection:'row', 
        alignItems:'center'
      },
      Send:{
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:100, 
        height:40, 
        width:40
      },
      Destination:{
        borderWidth:4, 
        borderColor:'#E6E6E6', 
        width:Width, 
        alignSelf:"center"
      },
      DestinationView:{
        height:Height *5, 
        width:Width*.9, 
        alignSelf:'center', 
        backgroundColor:'white'
      },
      DotsView:{
        height:70, 
        width:'20%',  
        justifyContent:'space-around', 
        alignItems:"center"
      },
      DestAdress:{
        height:70, 
        width:'80%',  
        justifyContent:'flex-start'
      }


});