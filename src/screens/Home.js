//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Container, Header, Right, Left, Content,  Input, Item} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'

import CardItems from '../components/RecommendedCardItem'
// create a component
class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };
    
    _onPress = () => {
        this.props.navigation.navigate("Product");

    };

    render() {
        return (
            <Container style={{height:'100%'}}>
                <Header style={{backgroundColor: 'transparent', borderRadius: 5}}>
                    <View style={{ position: 'absolute', left: 0, right:0, top: 0, height: 60, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
                        <Icon name='widgets' style={{fontSize: 25}}/>
                        <View style={{ flex: 1, height: "100%", marginLeft: 4, }}>
                            <Item style={{ backgroundColor: 'white', top: 10, paddingHorizontal: 10, borderRadius: 50}}>
                                <Icon name="search" style={{fontSize:15, paddingTop: 5}} />
                                <Input placeholder="Search" />
                            </Item>
                    </View>
                    <Icon name='favorite' style={{fontSize: 25}} />
                    <Icon name='question-answer' style={{fontSize: 25}} />
                    <Icon name='notifications' style={{fontSize: 25}} />
                    </View>
                </Header>
                <Content  style={{marginTop: 8, marginLeft: 5, marginRight: 5, backgroundColor: '#dbdbdb'}}>
                    <ScrollView>
                        <View style={{ height: 50,  flexDirection: 'row', backgroundColor: 'white'}}>
                            <View style={{flex: 1}}></View>
                            <View style={{flex: 1, backgroundColor: '#dbdbab'}}></View>
                        </View>
                        <Swiper style={{height: 100, backgroundColor:'#dbdbdb', borderRadius: 4}} autoplay={true}>
                            <View style={{flex: 1}}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain'}}
                                    source={require('../assets/swiper_1.jpg')}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain'}}
                                    source={require('../assets/swiper_3.jpg')}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain'}}
                                    source={require('../assets/swiper_2.jpg')}
                                /> 
                        </View>
                    </Swiper>
                    <View style={{marginTop: 5, backgroundColor: 'white', height: '100%',marginRight: 2, marginLeft: 2, borderRadius: 5}}>
                        <View>
                            <Left style={{borderBottomColor: 'black', borderBottomWidth: 1,}}>
                                <Text style={{fontSize: 15, fontFamily: 'arial',}}>Flash Sale</Text>
                            </Left>
                            <View style={{ flexDirection:'row', justifyContent: 'center'}}>
                                <CardItems
                                    imageUri={require('../assets/laptop.png')}
                                    itemPrice='Rp. 25.000.000'
                                    itemPriceDiscount='Rp.20.000.000'
                                    onPress={this._onPress}
                                />
                                <CardItems
                                    imageUri={require('../assets/samsungs9.jpg')}
                                    itemPrice='Rp. 9.000.000'
                                    itemPriceDiscount='Rp.8.000.000'
                                    onPress={this._onPress}
                                />
                                <CardItems
                                    imageUri={require('../assets/laptop.png')}
                                    itemPrice='Rp. 25.000.000'
                                    itemPriceDiscount='Rp.5.000.000'
                                    onPress={this._onPress}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection:'row', justifyContent: 'center'}}>
                                <CardItems
                                    imageUri={require('../assets/laptop.png')}
                                    itemPrice='Rp. 25.000.000'
                                    itemPriceDiscount='Rp.5.000.000'
                                    onPress={this._onPress}
                                />
                                <CardItems
                                    imageUri={require('../assets/laptop.png')}
                                    itemPrice='Rp. 25.000.000'
                                    itemPriceDiscount='Rp.5.000.000'
                                    onPress={this._onPress}
                                />
                                <CardItems
                                    imageUri={require('../assets/laptop.png')}
                                    itemPrice='Rp. 25.000.000'
                                    itemPriceDiscount='Rp.5.000.000'
                                    onPress={this._onPress}
                                />
                            </View>
                    </View>
                    </ScrollView>
                </Content>
        </Container>
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

//make this component available to the app
export default Home;
