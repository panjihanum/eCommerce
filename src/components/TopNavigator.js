import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Feed from '../screens/Feed'
import FeedExplore from '../screens/FeedExplore'

import { createAppContainer } from 'react-navigation';



const TopNavigator = createMaterialTopTabNavigator({
    Feed: { screen: Feed, 
        navigationOptions:{
        tabBarLabel:'Feed',
    }},
    FeedExplore: { screen: FeedExplore, 
        navigationOptions:{
            tabBarLabel:'Explore',
        }},
    },{
      shifting: true,
      iconShowing : true,
      initialRoute:'FeedExplore',
      activeTintColor: 'orange',
      inactiveTintColor: '#8E8E93',
  });

const TopNavigators = createAppContainer(TopNavigator)
export default TopNavigators;
