import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Calculator} from '../screens';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Teste1">
      <Screen name="Calculator" component={Calculator} />
    </Navigator>
  );
}
