//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Right, Left, Content,  Input, Item} from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {TouchableOpacity} from 'react-native-gesture-handler'
// create a component
class Akun extends Component {
    render() {
        return (
        <Container>
            <Header>
                
            </Header>
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
});

//make this component available to the app
export default Akun;
