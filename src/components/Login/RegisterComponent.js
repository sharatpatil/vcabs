import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import InputText from './Components/InputText';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Error: false,
      fullname: '',
      email:'',

    };
  }

  Register(){
    // this.props.navigateToHomeContainer()
    this.props.navigateToSucessContainer()
  }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.maincontainer}> 
      <View style={styles.container}>
      <Image source={require('../../assets/Image/topintro4.png')} />
      <Image style={{height:40, width:40}} source={require('../../assets/Image/app-logo.png')} />
      <Text style={styles.Title}>Register Details</Text>
      <Text style={styles.Desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <InputText
        label="Full Name"
        placeholder="Enter Full Name"
        isError={this.state.Error}
        style={{marginTop: 30}}
        value={this.state.mobile}
        onChangeText = {text => this.setState({ fullname: text })}
      />
       <InputText
        label="Email"
        placeholder="Enter Your Email"
        isError={this.state.Error}
        style={{marginBottom: 30}}
        value={this.state.mobile}
        onChangeText = {text => this.setState({ email: text })}
      />
       <Ripple onPress={() => this.Register()}>
            <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
              <Text style={styles.ButtonText}>CONTINUE</Text>
            </LinearGradient>
          </Ripple>
    </View>
    </KeyboardAwareScrollView>
    );
  }
}


const styles = StyleSheet.create({
  maincontainer:{
    flex:1
  },
  container: {
    width:Width ,
    height:Height,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  TopImage: {
    width: '100%',
    height: '25%'
  },
  HeadTitle: {
    fontFamily: 'NunitoSans-Bold',
    color: '#9D66D8',
    marginTop: 15,
    fontSize: 18,
  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#9D66D8',
    fontSize: 18,
  },
  Desc: {
    fontFamily: 'NunitoSans-Regular',
    color: 'grey',
    maxWidth: '75%',
    textAlign: 'center',
    marginTop: 5
  },
  Button: {
    height: 45,
    width: 180,
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