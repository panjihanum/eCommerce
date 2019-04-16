import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/Home'
import Feed from '../components/TopNavigator'
import OS from '../screens/OS'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account/Login'


const DrawerNavigator = DrawerNavigator({
    Home: { screen: HomeScreen},
    Feed: { screen: Feed},
    OS: { screen: OS },
    Wishlist: { screen : Wishlist},
    Account: { screen : Account}
  });


export default DrawerNavigator;