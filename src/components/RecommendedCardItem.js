//import liraries
import React, { Component } from 'react';
import {  Right, Left, Card, CardItem, Body } from 'native-base'
import { 
    View,
    Text, 
    StyleSheet,
    Image, TouchableOpacity,
    Dimensions
    } from 'react-native';

// create a component
const window = Dimensions.get('window');
class RecommendedCardItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <Card style={{ flex: 0, height:window.height/4.1,  width:window.width/3.1, }}>
                <CardItem cardBody>
                    <Image style={{ height: 90, width: '100%'}} source={{uri : this.props.itemImage}}/>
                </CardItem>
                <CardItem>
                    <Body stlye={{flexDirection: 'row',}}>
                        <Text style={{ color: 'red',textDecorationLine: 'line-through', fontSize: 11}}>{this.props.itemPrice}</Text>
                        <Text style={{ color: 'grey', fontSize: 11}}>{this.props.itemPriceDiscount}</Text>
                    </Body>
                </CardItem>
            </Card>
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
    swiper: {
        height: 100, 
        borderRadius: 4
    },
});

export default RecommendedCardItem;
//make this component available to the app