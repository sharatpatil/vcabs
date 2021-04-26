import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';
import InputText from '../Login/Components/InputText';
import LinearGradient from 'react-native-linear-gradient';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class MyFavoriteComponent extends Component {
  state = {
    Error: false
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.Title,{margin:20}]}>My Favorite</Text>

          <View style={styles.MenuView}>

            <View style={styles.SubMenu}>
              <Icon name="ios-home" size={15} color="#FF75AC" />
              <Text style={[styles.Title, { fontSize: 10 }]}>Home</Text>
            </View>

            <View style={styles.SubMenu}>
              <Icon name="ios-briefcase" size={15} color="#FF75AC" />
              <Text style={[styles.Title, { fontSize: 10 }]}>Work</Text>
            </View>


            <View style={styles.SubMenu}>
              <Icon name="ios-location" size={15} color="#FF75AC" />
              <Text style={[styles.Title, { fontSize: 10 }]}>Other</Text>
            </View>

          </View>


          <InputText
            label="Place Name"
            placeholder="Enter Your Place Name"
            isError={this.state.Error}
            value={this.state.destination}
            onChangeText={text => this.setState({ destination: text })}
          />


          <InputText
            label="Place Address"
            placeholder="Enter Your Place Address"
            isError={this.state.Error}
            value={this.state.destination}
            onChangeText={text => this.setState({ destination: text })}
          />


          <Ripple style={styles.MapButton}>
            <Icon name="ios-map-outline" size={25} color="#FFFFFF" />
            <Text style={[styles.Title, { fontSize: 16, color: '#FFFFFF' }]}>PICK ON MAP</Text>
          </Ripple>

        </View>
        <Ripple onPress={() => this.props.navigateToAddPayment()}>
          <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
            <Text style={styles.ButtonText}>SAVE PLACE</Text>
          </LinearGradient>
        </Ripple>

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
  MenuView: {
    flexDirection: 'row', width: Width, height: 100, justifyContent: 'space-around', alignItems: 'center'
  },
  SubMenu: {
    borderWidth: 1, flexDirection: 'row', borderColor: '#7E7E7E', height: 30, width: 90, borderRadius: 5, justifyContent: 'space-around', alignItems: 'center'
  },
  MapButton: {
    height: 50, width: 160, backgroundColor: "#975CD2", borderRadius: 50, margin: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
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
