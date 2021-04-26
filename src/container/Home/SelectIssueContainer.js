import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SelectIssueComponent from '../../components/Home/SelectIssueComponent';

export default class SelectIssueContainer extends Component {

  navigateToMyRider = () => {
    this.props.navigation.navigate('MyRidesContainer');
  };

  render() {
    return <SelectIssueComponent
    navigateToMyRider={this.navigateToMyRider}
     />;
  }
}
