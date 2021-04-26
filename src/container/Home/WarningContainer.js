import React, {Component} from 'react';
import {Text, View} from 'react-native';
import WarningsComponent from '../../components/Home/WarningsComponent';

export default class WarningContainer extends Component {

    navigateToWaenings = () => {
    this.props.navigation.navigate('MyFavoriteContainer');
  };

  render() {
    return <WarningsComponent
    navigateToWaenings={this.navigateToWaenings}
     />;
  }
}
