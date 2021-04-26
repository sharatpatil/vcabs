import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LoginComponent from '../../components/Login/LoginComponent';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToVerifyOTPContainer = () => {
    this.props.navigation.navigate('VerifyOTPContainer');
  };

  render() {
    return (
      <LoginComponent
        navigateToVerifyOTPContainer={this.navigateToVerifyOTPContainer}
      />
    );
  }
}
