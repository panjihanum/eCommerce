//import liraries
import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Content, Footer, Header,Input, Container,  Item, } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'
import { whileStatement } from '@babel/types';
import {Button} from 'react-native-elements'
import AwesomeButton from 'react-native-really-awesome-button'
const Width= () => {Dimensions.get('window').width};
// create a component


const window = Dimensions.get('window');
class Product extends Component {
    constructor(props){
        super(props);
    }
    render() {
        
        const {navigation} = this.props;
        const name = navigation.getParam("itemName", "")
        const img = navigation.getParam("itemImage", "")
        const price = navigation.getParam("itemPrice", "")
        const pricediscount = navigation.getParam("itemPriceDiscount", "")
        const detail = navigation.getParam("itemDetail", "")
        return (
            <Container>
                <Header style={{backgroundColor:'transparent', borderRadius: 3}}>
                    
                    <View style={styles.headerSearch}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                            <Icon name='arrow-back' style={{fontSize: 25}}/>
                        </TouchableOpacity>
                        <View style={styles.headerSearchMiddle}>
                        </View>
                        <Icon name='share' style={{fontSize: 25}} />
                        <Icon name='shopping-cart' style={{fontSize: 25}} />
                        <Icon name='more-vert' style={{fontSize: 25}} />
                    </View>
                </Header>
                <Content>
                    <ScrollView>
                        <Swiper style={styles.swiper}>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={img}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={img}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={img}
                                /> 
                            </View>
                        </Swiper>
                        <View style={{height:80, flexDirection:'row', backgroundColor:'#dbdbdb'}}>
                            <View style={{flex: 1, flexDirection:'column'}}>
                                <View style={{flex: 1, backgroundColor:'red',  borderTopRightRadius: 10, borderBottomRightRadius: 50,}}>
                                    <Text style={{textAlign:'center', marginTop: 5, fontSize: 15, color:'white'}}>
                                        Flash Sale
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text>Stok terbatas! Tersedia > 50 </Text> 
                                </View>
                            </View>
                            <View style={{flex: 1.5}}>

                            </View>
                        </View>
                        <View stlye={{flexDirection: 'row', backgroundColor:'#dbdbdb', height:200,}}>
                            <View style={{flex: 1, flexDirection:'row', marginRight:4, marginLeft:10}}>
                                <View style={{flex: 1.5,}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',}}>{name}</Text>
                                </View>
                                <View style={{flex: 1, }}>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#dbdbdb', borderBottomWidth: 1,  marginRight:4, marginLeft:10}}>
                                <View style={{flex: 1.5}}>
                                    <Text style={{fontSize: 15}}>{price}</Text>
                                    <Text style={{color: 'red',textDecorationLine: 'line-through',fontSize: 20, fontWeight:'bold'}}> {pricediscount}</Text>
                                </View>
                                <View style={{flex: 1}}>
                                
                                </View> 
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', borderColor: '#dbdbdb', borderWidth: 2,marginTop: 10, marginBottom: 10,}}>
                                <View style={{flex: 1.5}}>
                                 
                                </View>
                                <View style={{flex: 1}}>
                                
                                </View> 
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#dbdbdb', borderBottomWidth: 2, marginLeft:4, marginRight: 4}}>
                            <View>
                                <Text style={{fontSize: 18, fontWeight:'bold'}}>
                                    Informasi Produk
                                </Text>
                                <Text style={{fontSize:14, color:'#dbdbdb', marginTop: 10}}>
                                    Min.Pembelian :
                                </Text>
                                <Text style={{fontSize:14, color:'#dbdbdb', marginTop: 10}}>
                                    Kondisi :
                                </Text>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>
                                    Deskripsi Produk
                                </Text>
                                <Text style={{fontSize:14}}>
                                    {detail}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </Content>
                <Footer style={{backgroundColor: 'white', borderColor: '#dbdbdb', borderWidth: 3}}>
                    <View style={{flexDirection: 'row'}}>

                        <View style={{marginRight: 10, marginTop: 4}}>
                            <AwesomeButton progress onPress={() => this.props.navigation.navigate("Buy")}>Beli Sekarang</AwesomeButton>
                        </View>
                        <View style={{marginTop: 4}}>
                            <AwesomeButton progress onPress={() => this.props.navigation.navigate("Keranjang")} > Tambahkan Ke Keranjang </AwesomeButton>
                        </View>
                    </View>
                </Footer>
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
    image: {
        height: (window.height/2),
        width: window.width,
    },
    headerSearch:{ 
        position: 'absolute',
        left: 0,
        right:0,
        top: 0, 
        height: 60, 
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 5
    },
    headerSearchMiddle: { 
        flex: 1, 
        height: "100%", 
        marginLeft: 4, 
    },
    swiper: {
        height: window.height/2.5, 
        borderRadius: 4
    },
    imgSwiper:{ 
        flex: 1, 
        height: null, 
        width: null, 
        resizeMode: 'contain'
    }
});

//make this component available to the app
export default Product;
