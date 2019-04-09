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

class Buy extends Component {
    constructor(props){
        super(props);
        this.state={
            totalprice: 0,
            
        }
    }


    AddData(){
        const {navigation} = this.props;
        const totalPrice = navigation.getParam("itemTotalPrice", "")
        this.setState({
            totalprice: totalPrice
        })
    }

    componentDidMount(){
        const {navigation} = this.props;
        this.focusListener = navigation.addListener('willFocus', () => {
            this.AddData();
        })
    }
    
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>

                </Header>
                <Content style={styles.content}>
                <ScrollView>
                </ScrollView>
                </Content>
                    <Footer style={{backgroundColor: 'white', borderColor:'#dbdbdb', borderWidth: 1,}}>
                        <Left>
                            <Text style={styles.totalharga} >Total Harga</Text>
                            <Text style={styles.pricechange}>{convertToRupiah(this.state.totalprice)}</Text>
                        </Left>
                        <Right>
                            <Button onPress={() => this.props.navigation.navigate('Buy')} color='#5BAD52' title='Bayar' style={{}} />       
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
    header:{
        backgroundColor: 'white', 
        borderBottomColor: "#dbdbdb", 
        borderBottomWidth: 3,
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
    }
});
//make this component available to the app
export default Buy;

