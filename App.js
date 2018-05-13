import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/header';
import Login from './src/components/pages/Login';
export default class App extends React.Component {
  render() {
    return (
      <View>
          <Header headerText={'Holiday Plan!'} />
          <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
