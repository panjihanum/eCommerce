//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Button, Text, StyleSheet, FlatList,  ScrollView, Image,TouchableOpacity } from 'react-native';
import { Container, Header, Right, Left, Content,Body,   Input, Item} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Swiper from 'react-native-swiper'

import CardItems from '../components/RecommendedCardItem'
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
    constructor(props) {
        super(props);
        this.state = {
            itemDetail:[{
                key: "a",
                name: 'Laptop AllienWare',
                img:require('../assets/laptop.png'),
                price:'25000000',
                pricediscount:'20000000',
                detail:'Laptop Yang murah dan terjangkau',

            },{
                key:"b",
                name: "Samsung Galaxy S9 RAM 6/64",
                img:require('../assets/samsungs9.jpg'),
                detail:'Hp Murah dan terjangkau',
                price:'9000000',
                pricediscount:'8000000'
            },{
                key :"c",
                name: 'Laptop Acer E5-475G',
                img:require('../assets/AcerE5.jpg'),
                price:'8000000',
                pricediscount:'7000000',
                detail:'Laptop Yang murah dan terjangkau'
            },{
                key :"d",
                name: 'Laptop AllienWare',
                img:require('../assets/laptop.png'),
                price:'25000000',
                pricediscount:'20000000',
                detail:'Laptop Yang murah dan terjangkau'
            },{
                key :"e",
                name: 'Laptop AllienWare',
                img:require('../assets/laptop.png'),
                price:'25000000',
                pricediscount:'20000000',
                detail:'Laptop Yang murah dan terjangkau'
            },{
                key :"f",
                name: 'Laptop AllienWare',
                img:require('../assets/laptop.png'),
                price:'25000000',
                pricediscount:'20000000',
                detail:'Laptop Yang murah dan terjangkau',
            }
            ],menuanimation: [{
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
    

    render() {
        return (
            <Container style={{height:'100%'}}>
                <Header style={styles.header}>
                    <View style={styles.headerSearch}>
                        <Icon name='widgets' style={{fontSize: 25}}/>
                        <View style={styles.headerSearchMiddle}>
                            <Item style={styles.item}>
                                <Icon name="search" style={{fontSize:15, paddingTop: 5}} />
                                <Input placeholder="Search" />
                            </Item>
                    </View>
                    <Icon name='favorite' style={{fontSize: 25}} />
                    <Icon name='question-answer' style={{fontSize: 25}} />
                    <Icon name='notifications' style={{fontSize: 25}} />
                    </View>
                </Header>
                <Content  style={styles.content}>
                    
                    <ScrollView>
                        <View style={{ height: 50,  flexDirection: 'row', backgroundColor: 'white'}}>
                            <View style={{flex: 1}}></View>
                            <View style={{flex: 1, backgroundColor: '#dbdbab'}}></View>
                        </View>
                        <Swiper style={styles.swiper} autoplay={true}>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={require('../assets/swiper_1.jpg')}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Image
                                    style={styles.imgSwiper}
                                    source={require('../assets/swiper_3.jpg')}
                                />
                            </View>
                            <View style={{flex: 1}}>
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
                                <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Product")}}>
                                    <View style={{ flexDirection: 'column', borderRadius: 5, height: 60, width:(window.width/5.3),  borderColor: '#dbdbdb', borderWidth: 2, marginLeft: 3, alignItems:'center'}}>
                                        <View style={{flex: 1}}>
                                            <Icon name={item.icon} style={{fontSize: 30,  alignItems: 'center',}} />
                                        </View>
                                        <Right style={{flex: 1}}>
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
                        <View style={{borderTopWidth: 4, marginTop:2, borderTopColor: '#dbdbdb', width:window.width}}> 
                            <View style={{flex: 1, fontSize: 14, borderBottomColor: '#dbdbdb', borderBottomWidth: 1}}>
                                <Body>
                                    <Text style={{fontSize: 20, fontFamily: 'arial',}}>Produk</Text>
                                </Body>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontSize: 15, textAlign: 'right', color:'green'}}> Lihat Semua</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection:'row'}}>
                                <FlatList
                                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                                data={this.state.itemDetail}
                                renderItem={({ item }) => (
                                    <CardItems itemImage= {item.img}
                                        itemPrice= {convertToRupiah(item.price)}
                                        itemPriceDiscount={convertToRupiah(item.pricediscount)}
                                        onPress={() => {
                                            this.props.navigation.navigate("Product",{
                                                itemKey: item.key,
                                                itemImage: item.img,
                                                itemPrice: item.price,
                                                itemPriceDiscount: item.pricediscount,
                                                itemName: item.name,
                                                itemDetail: item.detail,
                                            })
                                        }}
                                    />
                                )}
                                numColumns= '3'
                                />
                            </View>
                        </View >
                        <View style={{  borderTopWidth: 5, borderTopColor: '#dbdbdb'}}>

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
        borderRadius: 5
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
        top: 10,
        paddingHorizontal: 10, 
        borderRadius: 50
    }
});

//make this component available to the app
export default Home;
