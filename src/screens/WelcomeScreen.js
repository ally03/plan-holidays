import React, { Component } from 'react';
import {
    // StyleSheet,
    View,
    Text
 } from 'react-native';


export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome</Text>
            </View>
        );
    }
}