//import liraries
import React, { Component } from 'react';
import { TextInput, Image, Dimensions,View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {  Container,  Header, Body , Left, Content, } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';

// create a component


const window = Dimensions.get('window')


class Account extends Component {
    constructor(){
        super()
        this.state={
            username: "panji",
            password: "panji",
        }
    }

    login = () => {
        axios({
            method: 'post',
            url: 'http://192.168.0.51:3333/api/v1/users/login',
            data: {
                "username" : this.state.username,
                "password" : this.state.password
            }
        })
        .then((response)=>{
            this.props.navigation.navigate("Home")
        })
        .catch(err => alert("Username atau passwrod yang anda masukkan Salah"));

        

    }

    render() {
        return (
        <Container style={styles.container}>
            <Header style={{ width: "100%",backgroundColor: 'transparent'}} >
                <Body style={{justifyContent:'center',alignItems: 'center'}}>
                    <Text style={{ fontSize: 30,  color:'white'}}> HANUMPEDIA </Text>
                </Body>
            </Header>
            <Content>
                <ScrollView>
                    <View>
                        <TextInput style={styles.inputBox} underlineColorAndroid="#dbdbdb"
                            placeholder="username"
                            placeholderTextColor="#dbdbdb"
                            onChangeText={(input) => this.setState({username: input})}
                        />
                        <TextInput style={styles.inputBox} underlineColorAndroid="#dbdbdb"
                            placeholder="password"
                            secureTextEntry={true}
                            placeholderTextColor="#dbdbdb"
                            onChangeText={(input) => this.setState({password: input})}
                        />
                        <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <Text style={styles.text}>Anda belum pernah mendaftar ? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AccountRegister")}>
                            <Text style={styles.textClick}>Klik disini untuk mendaftar</Text>
                        </TouchableOpacity>
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
        backgroundColor: '#00B966',
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
    username:{
        width: window.width / 1.1
    },
    usernametext: {

    },
    usernametextinput: {
        width: '100%',
        borderColor: 'black',
        borderRadius: 12,
    },
    inputBox: {
        width:300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius : 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10,
    },
    button: {
        top: 10,
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 52,
        marginVertical: 10,
        paddingVertical: 13,
    },
    text: {
        marginTop: 25,
        color: "#dbdbdb",
        fontSize: 15
    },
    textClick: {
        color: "red",
        fontSize: 12,
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center'
    }
});

//make this component available to the app
export default Account;
