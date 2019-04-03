import React from 'react';
import { Text, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/TabNavigator'
import Feed from '../screens/Feed'
import FeedExplore from '../screens/FeedExplore'
import Keranjang from '../screens/Keranjang'
import Akun from '../screens/Akun'
import AkunJual from '../screens/AkunJual'
import Product from '../screens/Product'
import Buy from '../screens/Buy'
const RootStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Feed: { screen: Feed },
    FeedExplore: { screen : FeedExplore},
    Keranjang: { screen: Keranjang},
    Akun: { screen: Akun },
    AkunJual: { screen: AkunJual},
    Product: { screen: Product},
    Buy: {screen: Buy}
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
})
  
export default createAppContainer(RootStack);