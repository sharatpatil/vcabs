import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HomeComponent from '../../components/Home/HomeComponent';

export default class HomeContainer extends Component {

  navigateToMyRider = () => {
    this.props.navigation.navigate('MyRidesContainer');
  };

  render() {
    return <HomeComponent
    navigateToMyRider={this.navigateToMyRider}
     />;
  }
}
