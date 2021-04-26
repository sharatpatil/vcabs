import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PaymentSuccessComponent from '../../components/Home/PaymentDetailComponent';

export default class PaymentDetailContainer extends Component {

  navigator = () => {
    this.props.navigation.navigate('SelectIssueContainer');
  };

  render() {
    return <PaymentSuccessComponent
    navigator={this.navigator}
     />;
  }
}
