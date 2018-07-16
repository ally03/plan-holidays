import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';

import Main from './src/Main';
// import Header from './src/components/common/header';
// import Login from './src/components/pages/Login';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
