import React, {Component} from 'react';
import AddPaymentComponent from '../../components/Home/AddPaymentComponent'

export default class AddPaymentContainer extends Component {

    navigateToAddPayment = () => {
    this.props.navigation.navigate('PaymentDetailContainer');
  };

  render() {
    return <AddPaymentComponent
    navigateToAddPayment={this.navigateToAddPayment}
     />;
  }
}
