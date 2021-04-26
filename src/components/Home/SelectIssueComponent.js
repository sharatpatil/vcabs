import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class SelectIssueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{alignSelf:'flex-start', margin: 20}}>
            <Text style={[styles.Title, {  }]}>Select Issue</Text>
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
                    <View>
                      <View style={styles.AddressView}> 
                      <Text style={[styles.Title, { fontSize: 14, color: '#707070', }]}>Billing/Payment Related</Text>
                      <Icon name='ios-chevron-forward' size={25} color="#707070" />
                      </View>
                      <View style={styles.Line} />

                      <View style={styles.AddressView}> 
                      <Text style={[styles.Title, { fontSize: 14, color: '#707070', }]}>Driver Related</Text>
                      <Icon name='ios-chevron-forward' size={25} color="#707070" />
                      </View>
                      <View style={styles.Line} />


                      <View style={styles.AddressView}> 
                      <Text style={[styles.Title, { fontSize: 14, color: '#707070', }]}>Cab Related</Text>
                      <Icon name='ios-chevron-forward' size={25} color="#707070" />
                      </View>
                      <View style={styles.Line} />


                      <View style={styles.AddressView}> 
                      <Text style={[styles.Title, { fontSize: 14, color: '#707070', }]}>Safety</Text>
                      <Icon name='ios-chevron-forward' size={25} color="#707070" />
                      </View>




                    </View>

                    </View>
      </View>
    );
  }
}

export default SelectIssueComponent;






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
 AddressView:{
  flexDirection:'row', width:Width * .9, alignSelf:'center', height: 35,  justifyContent:'space-between', alignItems:"center",
 },
 Line:{
  borderWidth:0.5, borderColor:'#959595', width:Width*.95, alignSelf:'flex-end'
 }

});
