//import liraries
import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Button } from 'react-native';
import { Container, Header, Left, Content, Card, CardItem, Right,  Footer, Body, } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

const window = Dimensions.get('window')
function convertToRupiah(angka){
    var rupiah = ''
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i=0;i<angkarev.length;i++)
        if(i%3 == 0)
            rupiah +=angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('', rupiah.length-1).reverse().join('');
}

// create a component
class Buy extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "Test",
            totalharga: 100000,
            totaltagihan: 100000,
        }
    }


    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left style={styles.Left}>
                        <Icon name="forward" style={styles.icon} />
                        <Text style={styles.textHeader}>CheckOut</Text>
                    </Left>
                    <Body>

                    </Body>
                </Header>
                <Content style={styles.content}>
                    <ScrollView>
                        <Card style={styles.card}>
                            <CardItem>
                                <View>
                                    <Text style={styles.promo}>Gunakan Kode Promo</Text>
                                </View>
                            </CardItem>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem header bordered>
                                <Text style={styles.cardHeader}> Tujuan Pengiriman </Text>
                            </CardItem>
                            <CardItem style={styles.carditem}>
                                <Text style={styles.carditemheader}>Rumah</Text>
                                <Text style={styles.carditemnama}>{this.state.nama}</Text>
                                <Text style={styles.carditemalamat}>{this.state.alamat}</Text>
                                <View style={styles.CardItemFooter}>
                                    <TouchableOpacity>
                                        <Card>
                                            <Text style={styles.carditemfooter}> Kirim ke Banyak Alamat</Text>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Card>
                                            <Text style={styles.carditemfooter}> Ganti Alamat</Text>
                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            </CardItem>
                        </Card>
                        <FlatList
                            data = {this.state.data}
                            renderItem={({item}) => (
                                <View>
                                    
                                </View>
                            )}
                        />

                    </ScrollView>

                    <Card style={styles.card}>
                        <Left>
                            <Text style={styles.textdonasi}>TopDonasi200</Text>
                        </Left>
                    </Card>
                    <Card style={styles.card}>
                        <CardItem header bordered>
                            <Left>
                                <Text>Total Harga {this.state.jumlahbarang} (Barang)</Text>
                            </Left>
                            <Body>

                            </Body>
                            <Right>
                                <Text style={styles.TotalHarga}>{convertToRupiah(this.state.totalharga)}</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={styles.footer}>
                    <Left style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 12, color: '#dbdbdb'}} > Total Tagihan</Text>
                        <Text style={{fontSize: 15, color: 'red', fontWeight:'bold'}} >{convertToRupiah(this.state.totaltagihan)}</Text>
                    </Left>
                    <Body>

                    </Body>
                    <Right>
                    <Button color='#5BAD52' title='Pilih Pembayaran' style={{}} />   
                    </Right>
                </Footer>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    content:{
        marginRight: 5,
        marginLeft: 5
    },
    Left: {
        flexDirection: 'row',
        fontSize:20,
    },
    icon: {
      fontSize: 20,
      marginRight: 20  
    },
    textHeader: {
        fontSize: 20,
        
    },
    header: {
        backgroundColor: 'white',
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 4,
    },
    footer: {
        backgroundColor: 'white',
        borderTopColor: '#dbdbdb',
        borderTopWidth: 3,
    },
    promo: {
        fontSize: 15,
        color: 'green',
        fontWeight: 'bold',
    },
    cardHeader: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    card: {
        marginRight: 3,
        marginLeft: 3,
        
    },
    carditem:{
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    carditemheader: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    carditemnama:{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#dbdbdb'
    },
    carditemalamat: {
        fontSize: 13,
    },
    CardItemFooter: {
        flexDirection:'row',
        justifyContent: 'center',
        width: window.width/1.1,
        alignItems: 'center',
    },
    carditemfooter: {
        height: 40,
        width: window.width/2.5,
        textAlign: 'center',
        borderRadius: 8,
    },
    carditemfooters: {
        height: 40,
        width: window.width/2.5,
        textAlign: 'center',
        borderRadius: 8,
    }


});

//make this component available to the app
export default Buy;
