import React, {Component} from 'react';
import {Text, View} from 'react-native';
import RegisterComponent from '../../components/Login/RegisterComponent';

export default class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSucessContainer = () => {
    this.props.navigation.navigate('SucessContainer');
  };

  render() {
    return (
      <RegisterComponent
      navigateToSucessContainer={this.navigateToSucessContainer}
      />
    );
  }
}
