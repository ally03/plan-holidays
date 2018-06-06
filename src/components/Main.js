import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginPage/LoginScreen';
import SecondScreen from './secondPage/SecondScreen';

export default class Main extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="loginScreen"
						component={LoginScreen}
						animation='fade'
						hideNavBar={true}
						initial={true}
					/>
					<Scene key="secondScreen"
						component={SecondScreen}
						animation='fade'
						hideNavBar={true}
					/>
				</Scene>
			</Router>
		);
	}
}