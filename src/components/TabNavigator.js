import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../screens/Home'
import Feed from '../components/TopNavigator'
import OS from '../screens/OS'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account'
import { createAppContainer } from 'react-navigation';



const TabNavigator = createMaterialBottomTabNavigator({
    Home: { screen: HomeScreen,                                 
        navigationOptions:{
        tabBarLabel:'Home',
        
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name="home"
                size= {focused? 28 : 22}
                color={tintColor}
            />
        )
    }},
    Feed: { screen: Feed, 
        navigationOptions:{
            tabBarLabel:'Feed',
            
            tabBarIcon: ({tintColor, focused}) => (
                <Icon
                    name="assessment"
                    size= {focused? 28 : 22}
                    color={tintColor}
                />
            )
        }},   
    OS: { screen: OS, 
        navigationOptions:{
           tabBarLabel:'OS',
                
            tabBarIcon: ({tintColor, focused}) => (
                <Icon
                    name="assignment-turned-in"
                    size= {focused? 28 : 22}
                    color={tintColor}
                />
            )
        }},
        
    Wishlist: { screen : Wishlist, 
        navigationOptions:{
            tabBarLabel:'Wishlist',
            
            tabBarIcon: ({tintColor, focused}) => (
                <Icon
                    name="shopping-cart"
                    size= {focused? 28 : 22}
                    color={tintColor}
                />
            )
        }},
    Account: { screen : Account, 
        navigationOptions:{
            tabBarLabel:'Account',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon
                    name="account-circle"
                    size= {focused? 28 : 22}
                    color={tintColor}
                />
            )
        } }
  },{
      shifting: true,
      iconShowing : true,
      inactiveTintColor: '#B6B6B6',
      initialRoute:'Home',
      barStyle: {
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 2,},
    },

      activeTintColor: '#00FF2A',
  });

const MyNavigator = createAppContainer(TabNavigator)
export default MyNavigator;