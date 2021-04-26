import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookingProcessComponent from '../../components/Home/BookingProcessComponent';

class BookingProcessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateToBooking = () => {
    this.props.navigation.navigate('PaymentContainer');
  };
  render() {
    return (
      <BookingProcessComponent 
      navigateToBooking={this.navigateToBooking}
      />
    );
  }
}

export default BookingProcessContainer;
