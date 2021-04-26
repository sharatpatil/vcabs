import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';

export default class IntroSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro1: true,
      intro2: false,
      intro3: false,
    };
  }

  next() {
    if (this.state.intro1) {
      this.setState({ intro1: false, intro2: true })
    }
    else if (this.state.intro2) {
      this.setState({ intro2: false, intro2: false })
    }
    else {
      this.props.navigateToLoginContainer();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.intro1 ? (
          <>
            <Image style={styles.TopImage} source={require('../../assets/Image/topintro.png')} />
            <Image source={require('../../assets/Image/intro1.png')} />
            <Text style={styles.HeadTitle}>LOCATE</Text>
            <Text style={styles.Title}>THE DESTINATION</Text>
            <Text style={styles.Desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Ripple onPress={() => this.next()}>
              <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                <Text style={styles.ButtonText}>NEXT</Text>
              </LinearGradient>
            </Ripple>
          </>

        ) :
          this.state.intro2 ? (
            <>
              <Image style={styles.TopImage} source={require('../../assets/Image/topintro2.png')} />
              <Image source={require('../../assets/Image/intro2.png')} />
              <Text style={styles.HeadTitle}>LOCATE</Text>
              <Text style={styles.Title}>THE ROUTE</Text>
              <Text style={styles.Desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Ripple onPress={() => this.next()}>
                <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                  <Text style={styles.ButtonText}>NEXT</Text>
                </LinearGradient>
              </Ripple>
            </>
          ) : (
            <>
              <Image style={[styles.TopImage, { height: '40%' }]} source={require('../../assets/Image/topintro3.png')} />
              <Image style={{ bottom: 150 }} source={require('../../assets/Image/intro3.png')} />
              <Text style={[styles.HeadTitle, { bottom: 150 }]}>GET</Text>
              <Text style={[styles.Title, { bottom: 150 }]}>YOUR CAB</Text>
              <Text style={[styles.Desc, { bottom: 150 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              <Ripple style={{ bottom: 150 }} onPress={() => this.next()}>
                <LinearGradient colors={['#F8ACCA', '#FF75AC',]} style={styles.Button}>
                  <Text style={styles.ButtonText}>NEXT</Text>
                </LinearGradient>
              </Ripple>
            </>
          )

        }

      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 5,
    marginBottom: 30
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