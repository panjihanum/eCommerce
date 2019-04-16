//import liraries
import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Content, Footer, Header,Input, Container,  Item, } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'
import AwesomeButton from 'react-native-really-awesome-button'

import { connect } from 'react-redux';
import { getProductsById } from '../../redux/actions/products.actions'
import { addCarts } from '../../redux/actions/carts.action'

const Width= () => {Dimensions.get('window').width};
// create a component

function convertToRupiah(angka){
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i=0;i<angkarev.length;i++)
        if(i%3 == 0)
            rupiah +=angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('', rupiah.length-1).reverse().join('');
}

const window = Dimensions.get('window');
class Product extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: []
        }
    }

    _onPress = (id) => {
        this.props.dispatch(addCarts(id)),
        this.props.navigation.navigate("Wishlist",{
            id : data.id
            // itemKey: key,
            // itemPrice: pricediscount,
            // itemName: name,
            // itemImage: img,
            // itemDetails: detail,
        })
    }
    componentDidMount() {
        const id = this.props.navigation.getParam("id","")
        return this.props.dispatch(getProductsById(id));
    }   
    render() {
        data = this.props.data;
        const pic = "http://192.168.0.51:3333/uploads/" + data.picture1
        return (
            <Container>
                <Header style={{backgroundColor:'transparent', borderRadius: 3}}>
                    
                    <View style={styles.headerSearch}>
                        <TouchableOpacity onPress={() => alert(data.picture1)}>
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
                                    source={{uri : pic}}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={{uri : pic}}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={{uri : pic}}
                                /> 
                            </View>
                        </Swiper>
                        <View style={styles.viewStock}>
                            <View style={{flex: 1, flexDirection:'column'}}>
                                <View style={{flex: 1, backgroundColor:'red',  borderTopRightRadius: 10, borderBottomRightRadius: 50,}}>
                                    <Text style={{textAlign:'center', marginTop: 5, fontSize: 15, color:'white'}}>
                                        Flash Sale
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text>Stok terbatas! Tersedia = {data.stock} </Text> 
                                </View>
                            </View>
                            <View style={{flex: 1.5}}>

                            </View>
                        </View>
                        <View stlye={{flexDirection: 'row', backgroundColor:'#dbdbdb', height:200,}}>
                            <View style={{flex: 1, flexDirection:'row', marginRight:4, marginLeft:10}}>
                                <View style={{flex: 1.5,}}>
                                    <Text style={{fontSize:20, fontWeight: 'bold',}}>{data.name}</Text>
                                </View>
                                <View style={{flex: 1, }}>
                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#dbdbdb', borderBottomWidth: 1,  marginRight:4, marginLeft:10}}>
                                <View style={{flex: 1.5}}>
                                    <Text style={{fontSize: 15,textDecorationLine: 'line-through', color: 'red',}}>{convertToRupiah(Number(data.price))}</Text>
                                    <Text style={{fontSize: 20, fontWeight:'bold'}}> {convertToRupiah(Number(data.price))}</Text>
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
                                <Text style={styles.textDetail}>
                                    Min.Pembelian :
                                </Text>
                                <Text style={styles.textDetail}>
                                    Kondisi : {data.condition}
                                </Text>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>
                                    Deskripsi Produk
                                </Text>
                                <Text style={{fontSize:14}}>
                                    {data.description}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </Content>
                <Footer style={styles.footer}>
                    <View style={styles.footerview}>
                        <AwesomeButton progress onPress={() => this._onPress(data.id)} > Tambahkan Ke Keranjang </AwesomeButton>
                    </View>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.products.data
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
    viewStock: {
        height:80, 
        flexDirection:'row', 
        backgroundColor:'#dbdbdb'
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
    },
    footer:{
        backgroundColor: 'transparent',
        width: window.width 
    },
    footerview:{
        width: window.width/1.05,
        alignItems: 'center',
        borderRadius: 25
    },
    textDetail:{
        fontSize:14, color:'#dbdbdb', 
        marginTop: 10
    },
});

//make this component available to the app
export default connect(mapStateToProps)(Product);
