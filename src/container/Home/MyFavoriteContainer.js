import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MyFavoriteComponent from '../../components/Home/MyFavoriteComponent';

export default class MyFavoriteContainer extends Component {

  navigateToAddPayment = () => {
    this.props.navigation.navigate('AddPaymentContainer');
  };
  render() {
    return <MyFavoriteComponent 
    navigateToAddPayment={this.navigateToAddPayment}
    />;
  }
}
