import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Logo from '../components/LoginPage/Logo';
import Form from '../components/LoginPage/Form';
import Wallpaper from '../components/LoginPage/Wallpaper';
import ButtonSubmit from '../components/LoginPage/ButtonSubmit';
import SignupSection from '../components/LoginPage/SignupSection';
import FbLogin from '../components/LoginPage/fbLogin';



export default class LoginScreen extends Component {
  
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
        <FbLogin />
      </Wallpaper>
    );
  }
}
