import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class SucessComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Start(){
    this.props.navigateToSucessContainer()
  }
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/Image/background.png')}>
         <LottieView 
            resizeMode='cover'
            style={{height:120, width: 120}}
            source={require('../../assets/json/rightmark.json')} 
            autoPlay loop />
 <Text style={styles.Title}>You are ready to go !</Text>
 <Text style={styles.Desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
 <Ripple onPress={() => this.Start()}>
            <LinearGradient colors={['#B37AEC', '#322143',]} style={styles.Button}>
              <Text style={styles.ButtonText}>GET STARTED</Text>
            </LinearGradient>
          </Ripple>
      </ImageBackground>
    );
  }
}

export default SucessComponent;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  Title: {
    fontFamily: 'NunitoSans-Bold',
    color: 'white',
    fontSize: 22,
    marginTop: 15
  },
  Desc: {
    fontFamily: 'NunitoSans-Regular',
    color: 'white',
    maxWidth: '85%',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: Height * .10
    
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
