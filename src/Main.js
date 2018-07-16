import React, { Component } from 'react';
//import { Router, Scene } from 'react-native-router-flux';
import { 
	View,
	StyleSheet
} from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SecondScreen from './screens/SecondScreen';

import { createBottomTabNavigator } from 'react-navigation';
export default class Main extends Component {
	render() {
		const MainNavigator = createBottomTabNavigator({
			welcome: { screen: WelcomeScreen },
			login: { screen: LoginScreen },
			main: { screen: SecondScreen},
		});

		return (
			<View style={style.container}>
				<MainNavigator />
			</View>
		)
	}
}


const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
})
// export default class Main extends Component {
// 	render() {
// 		return (
// 			<Router>
// 				<Scene key="root">
// 					<Scene key="loginScreen"
// 						component={LoginScreen}
// 						animation='fade'
// 						hideNavBar={true}
// 						initial={true}
// 					/>
// 					<Scene key="secondScreen"
// 						component={SecondScreen}
// 						animation='fade'
// 						hideNavBar={true}
// 					/>
// 				</Scene>
// 			</Router>
// 		);
// 	}
// }