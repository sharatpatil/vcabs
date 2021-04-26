import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MyRidesComponent from '../../components/Home/MyRidesComponent';

export default class MyRidesContainer extends Component {

  navigateToBooking = () => {
    this.props.navigation.navigate('BookingProcessContainer');
  };

  render() {
    return <MyRidesComponent 
    navigateToBooking={this.navigateToBooking}
    />;
  }
}
