import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IntroSliderComponent from '../../components/Login/IntroSliderComponent';

export default class IntroSliderContainer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToLoginContainer = () => {
    this.props.navigation.navigate('LoginContainer');
  };

  render() {
    return (
      <IntroSliderComponent
        navigateToLoginContainer={this.navigateToLoginContainer}
      />
    );
  }
}
