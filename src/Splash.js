import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.BackImage} source={require('./assets/Image/splashback.png')} />
        <Image style={styles.vanlogo} source={require('./assets/Image/van.png')} />
        <Image style={styles.Logo} source={require('./assets/Image/vcablogo.png')} />
      </View>
    );
  }
}

export default Splash;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  BackImage: {
    width: '100%',
    height: '50%'
  },
  vanlogo: {
    width: 230,
    height: 160,
    bottom: 100
  },
  Logo: {
    marginTop: 25
  }
});
