//import liraries
import React, { Component } from 'react';
import { View, Text,Button, StyleSheet, FlatList, Dimensions, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { Container,  Left, Content, Header, Card, CardItem, Body, Right, Footer} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'




const window= Dimensions.get('window')
function convertToRupiah(angka){
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i=0;i<angkarev.length;i++)
        if(i%3 == 0)
            rupiah +=angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('', rupiah.length-1).reverse().join('');
}

class Keranjang extends Component {
    constructor(props){
        super(props);
        this.state={
            pricechange: 0,
            data:[]
            
        }
    }


    AddData(){
        const {navigation} = this.props;
        const key = navigation.getParam("itemKey","")
        const name = navigation.getParam("itemName", "")
        const price = navigation.getParam("itemPrice","")
        const img = navigation.getParam("itemImage", "")
        const detail = navigation.getParam("itemDetail", "")
        if (key !== "") {
            const findKey = this.state.data.findIndex((val, i) => {
                return val.key === key;
            })
            if(findKey === -1){
            this.setState({
                data: [
                    ...this.state.data,
                    {
                        key: key,
                        price: price,
                        img: img,
                        name: name,
                        detail: detail,
                        quantity: 0
                    }
                ]
            })
        }}
    }

    _onDelete(key) {
        const findKey = this.state.data.findIndex((val, i) => {
            return val.key === key;
        })

         var array = [...this.state.data]
         if (findKey !== -1){
             array.splice(findKey, 1)
             this.setState({          
                data: array})
         }

        data = []

        this.state.data.forEach((val, i) => {
            if(val.key === key){
                data.push({
                    key: val.key,
                    name: val.name,
                    price: val.price,
                    img: val.img,
                    detail: val.detail,
                    quantity: val.quantity
                })
            }else{
                data.push(val)
            }
        })

        let total = 0
        data.forEach((val, i) => {
            if(val.key=== key){
                total += val.quantity * val.price
            }
        })

        this.setState({
             pricechange: this.state.pricechange - total,
        })

    }


    _incrementData = (key) => {
        const data = []
        this.state.data.forEach((val, i) => {
            if(val.key === key){
                data.push({
                    key: val.key,
                    name: val.name,
                    price: val.price,
                    img: val.img,
                    detail: val.detail,
                    quantity: val.quantity + 1
                })
            }else{
                data.push(val)
            }
        })
        let total = 0
        data.forEach((val, i) => {
            total += val.quantity * val.price
        })

        this.setState({
            pricechange: total
        })

        this.setState({
            data: data
        })
        
     }

    _decrementData = (key) => {
        const data = []
        this.state.data.forEach((val, i) => {
            if(val.key === key){
                if(val.quantity > 0){
                    data.push({
                        name: val.name,
                        key: val.key,
                        price: val.price,
                        img: val.img,
                        detail: val.detail,
                        quantity: val.quantity - 1
                    })  
                }else{
                    data.push(val)
                }
            }else{
                data.push(val)
            }
        })
        let total = 0
        data.forEach((val, i) => {
            total += val.quantity * val.price
        })
        this.setState({
            pricechange: total,
            data: data
        })
        }

    _onChangeText = (key, value) =>{

        const data = []
        this.state.data.forEach((val, i) => {
            if(val.key === key){
                data.push({
                    key: val.key,
                    name: val.name,
                    price: val.price,
                    img: val.img,
                    detail: val.detail,
                    quantity: Number(value)
                })
            }else{
                data.push(val)
            }
        })
        let total = 0
        data.forEach((val, i) => {
            total += val.quantity * val.price
        })
        this.setState({pricechange: total, data: data})
    }

   
    componentDidMount(){
        const data = this.state.data
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('willFocus', () => {
            this.AddData();
        })
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: 'white', borderBottomColor: "#dbdbdb", borderBottomWidth: 3,}}>

                </Header>
                <Content>
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
                    data = {this.state.data}
                    renderItem={({item}) => (
                        <Card style={{flex: 1, height: window.height/5, width: window.width/1.15, marginLeft: 5, marginRight: 5,}}>
                            <CardItem header>
                                <Text style={styles.penjual}> penjual: </Text>
                                <Text style={styles.penjualObject}>Panji Hanum</Text>
                        </CardItem>
                        <CardItem>
                            <View style={{flexDirection: 'row',}}>
                    
                                <Image source={item.img} style={{height: 40, width: 40}} />
                                <Body>
                                    <Text style={styles.text}>{item.name} </Text>
                                    <Text style={styles.text}>{convertToRupiah(item.price)}</Text>
                                </Body>
                                <View style={{left: 25, height: 35,textAlign:'center', flexDirection: 'row',}}>
                                    <Card style={{justifyContent:"center"}}>
                                        <TouchableOpacity onPress={() => this._decrementData(item.key)}>
                                            <Icon name='arrow-back' style={{fontSize: 20}} />
                                        </TouchableOpacity >
                                    </Card>
                                    <TextInput style={styles.textInput} onChangeText={(val) => this._onChangeText(item.key, val)}>{item.quantity}</TextInput>
                                    <Card>    
                                        <TouchableOpacity onPress={() => this._incrementData(item.key)} > 
                                            <Icon name='arrow-forward' style={{fontSize: 20,}} />
                                        </TouchableOpacity>
                                    </Card>
                                </View>
                                <Right>
                                    <TouchableOpacity onPress={() => this._onDelete(item.key)}>
                                        <Icon name="delete" style={{fontSize: 25}} />
                                    </TouchableOpacity>
                                </Right>
                            </View>
                        </CardItem>
                    </Card> 
                    )}
                />
                </ScrollView>
                </Content>
                    <Footer style={{backgroundColor: 'white', borderColor:'#dbdbdb', borderWidth: 1,}}>
                        <Left>
                            <Text style={{fontSize:17, color:'#5BAD52'}} >Total Harga</Text>
                            <Text style={{fontSize:14, color:'#dbdbdb'}}>{convertToRupiah(this.state.pricechange)}</Text>
                        </Left>
                        <Right>
                            <Button color='#5BAD52' title='Checkout' style={{}} />       
                        </Right>
                    </Footer>
            </Container>
        )
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    left: {
        marginLeft: 5,
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
        marginLeft: 5,
        marginRight: 5,
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
});
//make this component available to the app
export default Keranjang;

