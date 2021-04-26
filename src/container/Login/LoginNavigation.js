import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroSliderContainer from './IntroSliderContainer';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import VerifyOTPContainer from './VerifyOTPContainer';
import SucessContainer from './SucessContainer';
import HomeNavigation from '../Home/HomeNavigation';

const LoginStack = createStackNavigator();

export default class LoginNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <LoginStack.Navigator initialRouteName="IntroSliderContainer">
          <LoginStack.Screen
            name="IntroSliderContainer"
            component={IntroSliderContainer}
            options={{
              headerShown: false,
            }}
          />

          <LoginStack.Screen
            name="LoginContainer"
            component={LoginContainer}
            options={{
              headerShown: false,
            }}
          />

          <LoginStack.Screen
            name="RegisterContainer"
            component={RegisterContainer}
            options={{
              headerShown: false,
            }}
          />

          <LoginStack.Screen
            name="VerifyOTPContainer"
            component={VerifyOTPContainer}
            options={{
              headerShown: false,
            }}
          />

          <LoginStack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{
              headerShown: false,
            }}
          />

          <LoginStack.Screen
            name="SucessContainer"
            component={SucessContainer}
            options={{
              headerShown: false,
            }}
          />

        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }
}
