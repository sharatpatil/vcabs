import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from './HomeContainer';
import MyRidesContainer from './MyRidesContainer';
import BookingProcessContainer from './BookingProcessContainer';
import PaymentContainer from './PaymentContainer';
import PaymentSuccessContainer from './PaymentSuccessContainer';
import RiderRatingContainer from './RiderRatingContainer';
import WarningContainer from './WarningContainer';
import MyFavoriteContainer from './MyFavoriteContainer';
import AddPaymentContainer from './AddPaymentContainer';
import PaymentDetailContainer from './PaymentDetailContainer';
import SelectIssueContainer from './SelectIssueContainer';

const HomeStack = createStackNavigator();

export default class HomeNavigation extends Component {
  render() {
    return (
      <HomeStack.Navigator initialRouteName="HomeContainer">
        <HomeStack.Screen
          name="HomeContainer"
          component={HomeContainer}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen
          name="MyRidesContainer"
          component={MyRidesContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="BookingProcessContainer"
          component={BookingProcessContainer}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen
          name="PaymentContainer"
          component={PaymentContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="PaymentSuccessContainer"
          component={PaymentSuccessContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="RiderRatingContainer"
          component={RiderRatingContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="WarningContainer"
          component={WarningContainer}
          options={{
            headerShown: false,
          }}
        />



        <HomeStack.Screen
          name="MyFavoriteContainer"
          component={MyFavoriteContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="AddPaymentContainer"
          component={AddPaymentContainer}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen
          name="PaymentDetailContainer"
          component={PaymentDetailContainer}
          options={{
            headerShown: false,
          }}
        />


        <HomeStack.Screen
          name="SelectIssueContainer"
          component={SelectIssueContainer}
          options={{
            headerShown: false,
          }}
        />

      </HomeStack.Navigator>
    );
  }
}
