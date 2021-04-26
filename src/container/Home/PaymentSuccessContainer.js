import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PaymentSuccessComponent from '../../components/Home/PaymentSuccessComponent'

export default class PaymentSuccessContainer extends Component {

    navigateToPaymentSuccess = () => {
    this.props.navigation.navigate('RiderRatingContainer');
  };

  render() {
    return <PaymentSuccessComponent
    navigateToPaymentSuccess={this.navigateToPaymentSuccess}
     />;
  }
}
