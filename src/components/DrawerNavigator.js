import React, { Component } from 'react'
import { DrawerNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/Home'
import Feed from '../components/TopNavigator'
import OS from '../screens/OS'
import Keranjang from '../screens/Keranjang'
import Akun from '../screens/Akun'


const DrawerNavigator = DrawerNavigator({
    Home: { screen: HomeScreen},
    Feed: { screen: Feed},
    OS: { screen: OS },
    Keranjang: { screen : Keranjang},
    Akun: { screen : Akun}
  });


export default DrawerNavigator;