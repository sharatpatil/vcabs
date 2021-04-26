import React, {Component} from 'react';
import {Text, View} from 'react-native';
import RiderRatingComponet from '../../components/Home/RiderRatingComponet'

export default class RiderRatingContainer extends Component {

    navigateToRiderRating = () => {
    this.props.navigation.navigate('WarningContainer');
  };

  render() {
    return <RiderRatingComponet
    navigateToRiderRating={this.navigateToRiderRating}
     />;
  }
}
