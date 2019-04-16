//import liraries
import React, { Component } from 'react';
import { View, Text,Button, StyleSheet, FlatList, Dimensions, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { Container,  Left, Content, Header, Card, CardItem, Body, Right, Footer} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import { addCarts, getCarts} from '../redux/actions/carts.action'
import { connect } from 'react-redux'

const window= Dimensions.get('window')
function convertToRupiah(angka){
    if( angka > 0 ){
        var rupiah = ''
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i=0;i<angkarev.length;i++)
            if(i%3 == 0)
                rupiah +=angkarev.substr(i,3)+'.';
                return 'Rp. '+rupiah.split('', rupiah.length-1).reverse().join('');
    }
}

class Wishlist extends Component {
    constructor(props){
        super(props);
    }


    _onDelete(key) {
        axios({
            method: "delete",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + key,
        }).then((response) => {
            axios({
                method: "get",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
            }).then((response) => {
                this.setState({
                    data: response.data.data,
                    total: response.data.total
                })
            })
        })
    }


    _decrementData = (quantity, id) => {
        axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: quantity - 1
            }
        }).then((response) => {
            axios({
                method: "get",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
            }).then((response) => {
                this.setState({
                    data: response.data.data,
                    total: response.data.total
                })
            })
        })
    }
    
    _incrementData = (quantity,  id) => {
        axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: quantity + 1
            }
        }).then((response) => {
            axios({
                method: "get",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
            }).then((response) => {
                this.setState({
                    data: response.data.data,
                    total: response.data.total
                })
            })
        })
    }

    _onChangeText = (id, val) => {
        axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: val
            }
        }).then((response) => {
            axios({
                method: "get",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
            }).then((response) => {
                this.setState({
                    data: response.data.data,
                    total: response.data.total
                })
            })
        })
    }


    // _onDelete(key) {
    //     const findKey = this.state.data.findIndex((val, i) => {
    //         return val.key === key;
    //     })

    //      var array = [...this.state.data]
    //      if (findKey !== -1){
    //          array.splice(findKey, 1)
    //          this.setState({          
    //             data: array})
    //      }

    //     data = []

    //     this.state.data.forEach((val, i) => {
    //         if(val.key === key){
    //             data.push({
    //                 key: val.key,
    //                 name: val.name,
    //                 price: val.price,
    //                 img: val.img,
    //                 detail: val.detail,
    //                 quantity: val.quantity
    //             })
    //         }else{
    //             data.push(val)
    //         }
    //     })

    //     let total = 0
    //     data.forEach((val, i) => {
    //         if(val.key=== key){
    //             total += val.quantity * val.price
    //         }
    //     })

    //     this.setState({
    //          pricechange: this.state.pricechange - total,
    //     })

    // }


    // _incrementData = (key) => {
    //     const data = []
    //     this.state.data.forEach((val, i) => {
    //         if(val.key === key){
    //             data.push({
    //                 key: val.key,
    //                 name: val.name,
    //                 price: val.price,
    //                 img: val.img,
    //                 detail: val.detail,
    //                 quantity: val.quantity + 1
    //             })
    //         }else{
    //             data.push(val)
    //         }
    //     })
    //     let total = 0
    //     data.forEach((val, i) => {
    //         total += val.quantity * val.price
    //     })

    //     this.setState({
    //         pricechange: total
    //     })

    //     this.setState({
    //         data: data
    //     })
        
    //  }

    // _decrementData = (key) => {
    //     const data = []
    //     this.state.data.forEach((val, i) => {
    //         if(val.key === key){
    //             if(val.quantity > 0){
    //                 data.push({
    //                     name: val.name,
    //                     key: val.key,
    //                     price: val.price,
    //                     img: val.img,
    //                     detail: val.detail,
    //                     quantity: val.quantity - 1
    //                 })  
    //             }else{
    //                 data.push(val)
    //             }
    //         }else{
    //             data.push(val)
    //         }
    //     })
    //     let total = 0
    //     data.forEach((val, i) => {
    //         total += val.quantity * val.price
    //     })
    //     this.setState({
    //         pricechange: total,
    //         data: data
    //     })
    //     }

    // _onChangeText = (key, value) =>{
    //     const data = []
    //     this.state.data.forEach((val, i) => {
    //         if(val.key === key){
    //             data.push({
    //                 key: val.key,
    //                 name: val.name,
    //                 price: val.price,
    //                 img: val.img,
    //                 detail: val.detail,
    //                 quantity: Number(value)
    //             })
    //         }else{
    //             data.push(val)
    //         }
    //     })
    //     let total = 0
    //     data.forEach((val, i) => {
    //         total += val.quantity * val.price
    //     })
    //     this.setState({pricechange: total, data: data})
    // }

   
    componentDidMount(){


        this.props.navigation.addListener('didFocus', () =>{
            const {navigation} = this.props;
            this.props.dispatch(getCarts())
            // axios({

            //     method: "post",
            //     url: "http://192.168.0.51:3333/api/v1/wishlist/",
            //     data: {
            //         product_id: id,
            //         quantity: 1
            //     }
            // }).then((response) => {
            //     axios({
            //         method: "get",
            //         url: "http://192.168.0.51:3333/api/v1/wishlist/",
            //     }).then((response) => {
            //         this.setState({
            //             data: response.data.data,
            //             total: response.data.total
            //         })
            //     })
            // })
    })
        
 
    }
    
    render() {
        const http = "http://192.168.0.51:3333/uploads/"
        return (
            
            <Container style={styles.container}>
                <Header style={styles.header}>

                </Header>
                <Content style={styles.content}>
                    <ScrollView>
                        <Card style={styles.card}>
                            <CardItem>
                                <Left style={styles.left}>
                                    <Icon name='archive' style={styles.icon} />
                                    <Text style={styles.text} > Gunakan Kode Promo atau Kupon</Text>         
                                </Left>
                            </CardItem>
                        </Card>
                        <FlatList 
                        data = {this.props.data}
                        renderItem={({item}) => (
                            
                            <Card style={styles.card}>
                                <CardItem header bordered>
                                    <Text style={styles.penjual}> penjual: </Text>
                                    <Text style={styles.penjualObject}>{item.product.seller.name_store}</Text>
                                </CardItem>
                                <CardItem>
                                    <View style={{flexDirection: 'row',}}>
                                        <Image source={{uri : http + item.product.picture1}} style={styles.img} />
                                            <Body>
                                            <Text style={styles.text}>{item.product.name} </Text>
                                            <Text style={styles.text}>{convertToRupiah(item.product.price)}</Text>
                                        </Body>
                                        <View style={styles.incdecview}>
                                            <Card style={styles.incdec}>
                                                <TouchableOpacity onPress={() => this._decrementData(item.quantity, item.id)}>
                                                    <Icon name='arrow-back' style={styles.icon} />
                                                </TouchableOpacity>
                                            </Card>
                                            <TextInput style={styles.textInput} onChangeText={(val) => this._onChangeText(item.id, val)}>{item.quantity}</TextInput>
                                            <Card style={styles.incdec}>    
                                                <TouchableOpacity onPress={() => this._incrementData(item.quantity, item.id)} > 
                                                        <Icon name='arrow-forward' style={styles.icon} />
                                                </TouchableOpacity>
                                            </Card>
                                        </View>
                                        <Right>
                                            <TouchableOpacity onPress={() => this._onDelete(item.id)}>
                                                <Icon name="delete" style={styles.icons} />
                                            </TouchableOpacity>
                                        </Right>
                                    </View>
                                </CardItem>
                            </Card> 
                        )}
                    />
                    </ScrollView>
                </Content>
                <Footer style={styles.footer}>
                    <Left>
                        <Text style={styles.totalharga} >Total Harga</Text>
                        <Text style={styles.pricechange}>{convertToRupiah(this.props.total)}</Text>
                    </Left>
                    <Right>
                        <Button onPress={() => this.props.navigation.navigate('Buy',{
                        itemTotalPrice: Number(this.state.pricechange),
                        })} color='#5BAD52' title='Checkout' style={{}} />       
                    </Right>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    // alert(JSON.stringify(state.carts.data))
    return {
        data: state.carts.data,
        total: state.carts.total
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        backgroundColor: 'white', 
        borderBottomColor: "#dbdbdb", 
        borderBottomWidth: 3,
        fontSize: 12
    },
    content: {
        marginLeft: 6,
        marginRight: 6
    },
    marginLeft: 5,
        card: {
        marginRight: 5,
    },
    text: {
        fontSize:14,
        color: 'green'
    },
    penjual: {
        fontSize: 12,
        color: '#dbdbdb'
    },
    penjualObject: {                                                    
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    left: {
        marginLeft: 5,
        fontSize: 12
    },
    card: {
        width: window.width/1.05, 
    },
    text: {
        fontSize:14,
        color: 'green',
        marginLeft: 4
    },
    penjual: {
        fontSize: 12,
        color: '#dbdbdb'
    },
    penjualObject: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    icon: {
        fontSize:20, 
        justifyContent: 'center'
    },
    icons: {
        fontSize: 25,
        bottom: 8
    },
    incdecview:{
        flexDirection: 'row',
        justifyContent: 'center',
        left: 40
    },
    incdec: {
        justifyContent:"center", 
        height: 25
    },
    img: {
        height: 40,
        width: 40
    }, 
    textInput: {
        height: 40,
        alignItems: 'center',
        textAlign: 'center',
        bottom: 2,
        fontSize: 12
    },
    totalharga:{
        justifyContent:"center", 
        height: 25
    },
    pricechange: {
        fontSize:14, 
        color:'#dbdbdb'
    },
    footer: {
        backgroundColor: 'white', 
        borderColor:'#dbdbdb', 
        borderWidth: 1,
    }
});
//make this component available to the app
export default connect(mapStateToProps)(Wishlist);

