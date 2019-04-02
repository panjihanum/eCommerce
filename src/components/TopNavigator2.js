import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Akun from '../screens/Akun'
import AkunJual from '../screens/AkunJual'

import { createAppContainer } from 'react-navigation';



const TopNavigatorz = createMaterialTopTabNavigator({
    Akun: { screen: Akun, 
        navigationOptions:{
        tabBarLabel:'Beli',
    }},
    AkunJual: { screen: AkunJual, 
        navigationOptions:{
            tabBarLabel:'Jual',
        }},
    },{
      shifting: true,
      iconShowing : true,
      initialRoute:'FeedExplore',
      activeTintColor: 'orange',
      inactiveTintColor: '#8E8E93',
  });

const myNavi = createAppContainer(TopNavigatorz)
export default myNavi;
