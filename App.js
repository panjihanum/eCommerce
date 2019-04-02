import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RootStack from './src/components/RootStack'


class HomeScreen extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default HomeScreen;
