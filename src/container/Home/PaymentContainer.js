import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PaymentComponent from '../../components/Home/PaymentComponent';

export default class PaymentContainer extends Component {

    navigateToPayment = () => {
    this.props.navigation.navigate('PaymentSuccessContainer');
  };

  render() {
    return <PaymentComponent 
    navigateToPayment={this.navigateToPayment}
    />;
  }
}
