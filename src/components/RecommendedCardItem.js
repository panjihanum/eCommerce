//import liraries
import React, { Component } from 'react';
import {  Right,  CardItem } from 'native-base'
import { 
    View,
    Text, 
    StyleSheet,
    Image, TouchableOpacity
    } from 'react-native';


// create a component
class RecommendedCardItem extends Component {
    render() {
        
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <CardItem>
                <View style={{height: 120, width: 80}}>
                    <Image style={{ height: 90, width: '100%'}} source={this.props.imageUri}/>
                    <Text style={{ color: 'red',textDecorationLine: 'line-through', fontSize: 11}}>{this.props.itemPrice}</Text>
                    <Text style={{ color: 'grey', fontSize: 11}}>{this.props.itemPriceDiscount}</Text>
                </View>
            </CardItem>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default RecommendedCardItem;
//make this component available to the app