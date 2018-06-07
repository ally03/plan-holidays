import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AsyncStorage
//   Alert
} from 'react-native';
//import { Button } from 'react-native-elements';
//import Expo from 'expo';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Actions } from 'react-native-router-flux';

class FbLogin extends Component {
    constructor(props) {
        super(props);
        this._onPressButton = this._onPressButton.bind(this);    
    }
    // componentDidMount() {
    //     this.props.facebookLogin();
    // }
    // async logInFB() {
    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('760101284378819', {
    //         permissions: ['public_profile'],
    //       });
    //     if (type === 'success') {
    //       // Get the user's name using Facebook's Graph API
    //       const response = await fetch(
    //         `https://graph.facebook.com/me?access_token=${token}`);
    //       Alert.alert(
    //         'Logged in!',
    //         `Hi ${(await response.json()).name}!`,
    //       );
    //     }
    //}
    
    _onPressButton() {
        this.props.facebookLogin()
        //Actions.secondScreen();
        //AsyncStorage.removeItem('fb_token');
    }


    render() { 
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login with Facebook</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: -90,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 330,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 15,
      color: 'white'
    }
  });



  export default connect(null, actions) (FbLogin);