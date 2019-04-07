//import liraries
import React, { Component } from 'react';
import { TextInput, Image, Dimensions,View, Text, StyleSheet } from 'react-native';
import {  Container,  Header, Body , Left, Content, } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

// create a component

const window = Dimensions.get('window')



class Akun extends Component {
    render() {
        return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <View style={{flexDirection: 'row', marginTop: 2}}>
                        <Icon name="arrow-back" style={styles.icon} />
                        <Text style={styles.headertext}> Masuk </Text>
                    </View>
                </Left>
                <Body>

                </Body>
            </Header>
            <Content>
                <ScrollView>
                    <View style={styles.view}>
                        <View style={styles.email}>
                            <Text style={styles.emailtext}>Email</Text>
                            <TextInput  style={styles.emailtextinput}/>
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
    header:{
        backgroundColor: 'white',
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 2,
    },
    headertext:{
        fontSize: 17,
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 20,
        justifyContent: 'center',

    },
    view: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        height: window.height / 1.3
    },
    email:{
        width: window.width / 1.1
    },
    emailtext: {

    },
    emailtextinput: {
        width: '100%',
        borderColor: 'black',
        borderRadius: 12,
    }
});

//make this component available to the app
export default Akun;
