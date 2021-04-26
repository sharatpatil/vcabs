import React, {Component} from 'react';
import {Text, View} from 'react-native';

import LoginNavigation from './container/Login/LoginNavigation';

import Splash from './Splash';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        isLogin: true,
      });
    }, 3000);
  };
  render() {
    return this.state.isLogin ? <LoginNavigation /> : <Splash />;
  }
}
