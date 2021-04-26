import React, {Component} from 'react';
import {Text, View} from 'react-native';
import VerifyOTPComponent from '../../components/Login/VerifyOTPComponent';

export default class VerifyOTPContainer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToRegisterContainer = () => {
    this.props.navigation.navigate('RegisterContainer');
  };

  render() {
    return (
      <VerifyOTPComponent
        navigateToRegisterContainer={this.navigateToRegisterContainer}
      />
    );
  }
}
