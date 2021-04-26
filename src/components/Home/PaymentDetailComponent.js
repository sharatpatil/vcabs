import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class PaymentDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignSelf: "flex-start", width: Width }}>
                    <Text style={[styles.Title, { margin: 20 }]}>Apr 9 2021, 10:45 AM</Text>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Text style={[styles.Title, { color: '#FF0000', fontSize: 12, marginRight: 10 }]}>Cancelled</Text>
                    </View>

                    <Image style={{ margin: 20, alignSelf: 'center' }} source={require('../../assets/Image/Map.png')} />
                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={styles.DotsView}>
                            <Icon name="ios-ellipse" size={10} color="#322143" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                        </View>
                        <View style={styles.DestAdress}>
                            <Text style={[styles.Title, { fontSize: 14, color: '#707070', marginTop: 5 }]}>PICKUP LOCATION</Text>
                            <Text style={[styles.Title, { fontSize: 14, color: '#303030', marginTop: 5 }]}>Café Coffee Day, Sahakar Nagar</Text>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={styles.DotsView}>
                            <Icon name="ios-ellipse" size={10} color="#322143" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                            <Icon name="ios-ellipse" size={3} color="#999896" />
                        </View>
                        <View style={styles.DestAdress}>
                            <Text style={[styles.Title, { fontSize: 14, color: '#707070', marginTop: 5 }]}>DESTINATION #1</Text>
                            <Text style={[styles.Title, { fontSize: 14, color: '#303030', marginTop: 5 }]}>Yelahanka</Text>
                        </View>
                    </View>
                    <View style={styles.PriceView}>
                        <Text style={[styles.Title, { fontSize: 12, color: '#707070' }]}>FARE</Text>
                        <Text style={[styles.Title, { fontSize: 25, color: '#FE79AE' }]}>₹ 80.00</Text>
                        <Text style={[styles.Title, { fontSize: 12, color: '#707070' }]}>Incl. Tax</Text>
                    </View>

                    <View style={styles.DriverView}>
                        <View style={styles.DriverLeftView}>
                            <Image style={{ height: 60, width: 60 }} source={require('../../assets/Image/person.png')} />
                            <Text style={[styles.Title, { fontSize: 12, color: '#303030' }]}>Gourav Arora</Text>
                        </View>
                        <View style={styles.DriverRightView}>
                        <View style={{marginRight:20, alignItems:"flex-end"}}>
                      <Image source={require('../../assets/Image/car1.png')} />
                      <Text style={[styles.Title, { fontSize: 12, color:"#303030", }]}>3.6 *</Text>
                      <Text style={[styles.Title, { fontSize: 10, color:"#303030",  }]}>Green Toyota</Text>
                      <Text style={[styles.Title, { fontSize: 14, color:"#303030", }]}>KA02AF4393</Text>
                      </View>
                        </View>
                    </View>
                </View>

                <View style={styles.BottomView}>
                <Ripple onPress={() => this.props.navigator()} style={styles.Buttons}>
                <Icon name="ios-mail-outline" size={25} color="#707070"  />
                <Text style={[styles.Title, { fontSize: 14, color:"#707070", marginLeft:15 }]}>Mail Invoice</Text>
                </Ripple>
                <Ripple style={styles.Buttons}>
                <Icon name="ios-settings-outline" size={25} color="#707070"  />
                <Text style={[styles.Title, { fontSize: 14, color:"#707070", marginLeft:15 }]}>Support</Text>
                </Ripple>
                </View>

            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Title: {
        fontFamily: 'NunitoSans-Bold',
        color: '#121212',
        fontSize: 18,
    },
    DotsView: {
        height: 70,
        width: '20%',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    DestAdress: {
        height: 70,
        width: '80%',
        justifyContent: 'flex-start'
    },
    PriceView:{
        width: Width * .9, alignSelf: 'center', margin: 20
    },
    DriverView:{
        height: 100, width: Width, backgroundColor: '#EFEFEF', flexDirection: 'row' 
    },
    DriverLeftView:{
        height: 100, width: '50%', flexDirection: 'row',  justifyContent: 'space-around', alignItems: 'center' 
    },
    DriverRightView:{
        height: 100, width: '50%',  justifyContent: 'space-around', alignItems: 'flex-end' ,
    },
    BottomView:{
        flexDirection:"row", width:Width, height:60,borderTopWidth:1, borderColor:'#EFEFEF', alignItems:'center'
    },
    Buttons:{
        height:50, width:'50%', backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', flexDirection:'row'
    }


});
