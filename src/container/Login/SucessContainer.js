import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SucessComponent from '../../components/Login/SucessComponent';
class SucessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  navigateToSucessContainer = () => {
    this.props.navigation.navigate('HomeNavigation');
  };

  render() {
    return (
        <SucessComponent
        navigateToSucessContainer={this.navigateToSucessContainer}
      />
    );
  }
}

export default SucessContainer;
