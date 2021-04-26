import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>

                <View style={styles.DestinationView}>
                    <Ripple style={{ height: 40, width: 40, }}>
                        <Icon name="ios-close" size={40} color="#322143" style={{ alignSelf: 'flex-start' }} />
                    </Ripple>
                    <Text style={[styles.Title, { }]}>FARE</Text>
                    <Text style={[styles.Title, { fontSize: 25, color: '#FE79AE' }]}>₹ 80.00</Text>
                    <Text style={[styles.Title, {}]}>Incl. Tax</Text>
                    <Text style={[styles.Title, { marginTop: 20 }]}>TRIP FARE</Text>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                    <Text style={[styles.Title, {  fontSize:14 }]}>Trip Cost</Text>
                    <Text style={[styles.Title, {  fontSize:14 }]}>₹ 82.00</Text>
                    </View>

                    
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                    <Text style={[styles.Title, { fontSize:14 }]}>Discount</Text>
                    <Text style={[styles.Title, { fontSize:14 }]}>- ₹ 2.00</Text>
                    </View>


                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                    <Text style={[styles.Title, { fontFamily:'NunitoSans-ExtraBold', color:'#000000', fontSize:14 }]}>Total Bill</Text>
                    <Text style={[styles.Title, {fontFamily:'NunitoSans-ExtraBold', color:'#000000',  fontSize:14 }]}>₹ 80.00</Text>
                    </View>

                    <Text style={[styles.Title, { fontFamily:'NunitoSans-ExtraBold', color:'#000000', fontSize:16, marginTop:Height*.1 }]}>Select Payment Method</Text>
             
                    <View style={{flexDirection:'row', width:'100%', justifyContent:"space-around", marginTop:10 }}>
                        <View>
                        <Ripple style={styles.PaymentButton}>
                            <Image style={{height:30, width:30}} source={require('../../../src/assets/Image/phonepay.png')} />
                        </Ripple>
                        <Text style={[styles.Title, {  fontSize:9, textAlign:'center', marginTop:5 }]}>Paytm</Text>
                        </View>


                        <View>
                        <Ripple style={styles.PaymentButton}>
                            <Image style={{height:30, width:30}} source={require('../../../src/assets/Image/phonepay.png')} />
                        </Ripple>
                        <Text style={[styles.Title, {  fontSize:9, textAlign:'center', marginTop:5 }]}>PhonePe</Text>
                        </View>



                        <View>
                        <Ripple style={styles.PaymentButton}>
                            <Image style={{height:30, width:30}} source={require('../../../src/assets/Image/phonepay.png')} />
                        </Ripple>
                        <Text style={[styles.Title, {  fontSize:9, textAlign:'center', marginTop:5 }]}>GPay</Text>
                        </View>


                        <View>
                        <Ripple style={styles.PaymentButton}>
                                <Image style={{height:30, width:30}} source={require('../../../src/assets/Image/phonepay.png')} />
                        </Ripple>
                        <Text style={[styles.Title, {  fontSize:9, textAlign:'center', marginTop:5 }]}>Amazon</Text>
                        </View>


                        <View>
                        <Ripple style={styles.PaymentButton}>
                            <Image style={{height:30, width:30}} source={require('../../../src/assets/Image/phonepay.png')} />
                        </Ripple>
                        <Text style={[styles.Title, {  fontSize:9, textAlign:'center', marginTop:5 }]}>WhatsApp</Text>
                        </View>
                    </View>
                    <View style={{marginTop:Height*.25, alignItems:'center'}}>
                    <Ripple onPress={() => this.props.navigateToPayment()}>
              <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                <Text style={styles.ButtonText}>PAY</Text>
              </LinearGradient>
            </Ripple>
            </View>
                </View>
            </View>
        );
    }
}

export default PaymentComponent;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    DestinationView: {
        height: Height,
        width: Width * .9,
        alignSelf: 'center',
       
    },
    Title: {
        fontFamily: 'NunitoSans-Bold',
        color: '#707070',
        fontSize: 12,
    },
    PaymentButton:{
        height:45,
        width:45, 
        backgroundColor:'white', 
        justifyContent:'center', 
        alignItems:"center", 
        borderRadius:10, 
        elevation:10
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
