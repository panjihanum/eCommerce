import React from 'react';
import { Text, View } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/TabNavigator'
import Feed from '../screens/Feed'
import FeedExplore from '../screens/FeedExplore'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account'
import Seller from '../screens/Seller'
import Product from '../screens/Product'
import Buy from '../screens/Buy'
const RootStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Feed: { screen: Feed },
    FeedExplore: { screen : FeedExplore},
    Wishlist: { screen: Wishlist},
    Account: { screen: Account },
    Seller: { screen: Seller},
    Product: { screen: Product},
    Buy: {screen: Buy}
},
{
  initialRouteName: 'Account',
  headerMode: 'none',
})
  
export default createAppContainer(RootStack);