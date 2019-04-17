//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Button, Text, StyleSheet, FlatList,  ScrollView, Image,TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Header, Right, Left, Content,Body,   Input, Item} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'
import CardItems from '../components/RecommendedCardItem'
import Axios from 'axios';

import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/products.actions'
// create a component
const window = Dimensions.get('window')
function convertToRupiah(angka){
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i=0;i<angkarev.length;i++)
        if(i%3 == 0)
            rupiah +=angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('', rupiah.length-1).reverse().join('');
}



class Home extends Component {
    constructor() {
        super();
        this.state = {
            menuanimation: [{
                key:"a",
               
                icon: "dashboard",
                text: 'Semua Kategori',
            },{
                key:"b",
                icon: "home",
                text: 'Belanja'
            },{
                key:"c",
                icon: "home",
                text: "Top-Up & Tagihan"
            },{
                key:"d",
                icon: "local-airport",
                text: "Travel & Entertaiment"
            },{
                key:"e",
                icon: "account-balance",
                text: "Keuangan"
            },{
                key:"f",
                icon: "verified-user",
                text: "Official Store"
            },{
                key:"g",
                icon: "directions-railway",
                text: "Tiket Kereta"
            },{
                key:"h",
                icon: "business-center",
                text: "Emas"
            },{
                key:"i",
                icon: "home",
                text: "Afiliasi"
            },{
                key:"j",
                icon: "mood",
                text: "Semua Promo"
            },]
        };
    }

    static navigationOptions = {
        title: "Home"
    };
    
    componentDidMount() {
        this.props.navigation.addListener('didFocus', () => {
            this.props.dispatch(getProducts());
        })
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                            <Icon name='widgets' style={{fontSize: 25}}/>
                    </Left>
                    <Body>
                        <Item style={styles.item}>
                            <Icon name="search" style={{fontSize:15, paddingTop: 5}} />
                            <Input placeholder="Search" />
                        </Item>
                    </Body>
                    <Right>
                        <Icon name='favorite' style={{fontSize: 25, marginRight: 15}} />
                        <Icon name='question-answer' style={{fontSize: 25, marginRight: 15}} />
                        <Icon name='notifications' style={{fontSize: 25}} />
                    </Right>
                </Header>
                <Content  style={styles.content}>
                    <ScrollView>
                        <Swiper style={styles.swiper} autoplay={true}>
                            <View style={styles.view}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={require('../assets/swiper_1.jpg')}
                                />
                            </View>
                            <View style={styles.view}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={require('../assets/swiper_3.jpg')}
                                />
                            </View>
                            <View style={styles.view}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={require('../assets/swiper_2.jpg')}
                                /> 
                        </View>
                    </Swiper>

                    {/* Column menu */}
                    <View style={{marginTop: 5, backgroundColor: 'white',  borderTopWidth: 5, borderTopColor: '#dbdbdb', justifyContent: 'center'}}>
                    <View style={{ marginTop: 4, resizeMode: 'contain'}}>
                        <FlatList
                            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                            data={this.state.menuanimation}
                            numColumns = '5'
                            renderItem={({item}) => (
                                <TouchableOpacity>
                                    <View style={styles.iconview}>
                                        <View style={styles.view}>
                                            <Icon name={item.icon} style={styles.icon} />
                                        </View>
                                        <Right style={styles.view}>
                                            <Text style={{fontSize: 9, textAlign: 'center'}}>
                                                {item.text}
                                            </Text>
                                        </Right>
                                    </View>
                                </TouchableOpacity>
                            )}
                            />
                        </View>
                        {/* Product */}
                        <View style={styles.product}> 
                            <View style={styles.produkview}>
                                <Body>
                                    <Text style={{fontSize: 20, fontFamily: 'arial',}}>Produk</Text>
                                </Body>
                            </View>
                            <View style={styles.produksview}>
                                <FlatList
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                                data={this.props.data}
                                numColumns = '3'
                                renderItem={({ item }) => (
                                    <CardItems itemImage= {"http://192.168.0.51:3333/uploads/" + item.picture1}
                                        itemPrice= {convertToRupiah(item.price)}
                                        itemPriceDiscount={convertToRupiah(item.price)}
                                        onPress={() => {
                                            this.props.navigation.navigate("Product",{
                                                id: item.id
                                            })
                                        }}
                                    />
                                )}
                                />
                            </View>
                        </View >
                        <View style={styles.views}>

                        </View>
                    </View>
                    </ScrollView>
                </Content>
        </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.products.data,
        total: state.products.total
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        backgroundColor: 'transparent',
        borderRadius: 5
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
    content: {
        backgroundColor: 'transparent', 
        borderRadius: 5,
        marginRight: 6,
        marginLeft: 6
    },
    swiper: { 
        height: 100, 
        borderRadius: 4
    },
    imgSwiper:{ 
        flex: 1, 
        height: null, 
        width: null, 
        resizeMode: 'contain'
    },
    item: {
        backgroundColor: 'white',
        paddingHorizontal: 10, 
        borderRadius: 50,
        width: window.width/1.7,
        right: 25
    },
    view: {
        flex: 1
    },
    views: {  
        borderTopWidth: 5, 
        borderTopColor: '#dbdbdb'
    },
    product: {
        borderTopWidth: 4, 
        marginTop:2, 
        borderTopColor: '#dbdbdb', 
        width:window.width
    },
    produkview: {
        flex: 1, 
        fontSize: 14, 
        borderBottomColor: '#dbdbdb', 
        borderBottomWidth: 1
    },
    produksview: { 
        flex: 1, 
        flexDirection:'row'
    },
    icon: {
        fontSize: 30,  
        alignItems: 'center',
    },
    iconview: { 
        flexDirection: 'column', 
        borderRadius: 5, 
        height: 60, width:(window.width/5.5),  
        borderColor: '#dbdbdb', 
        borderWidth: 2, 
        marginLeft: 3, 
        alignItems:'center'
    }
});

//make this component available to the app
export default connect(mapStateToProps)(Home)
