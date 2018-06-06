import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Logo from './LoginComp/Logo';
import Form from './LoginComp/Form';
import Wallpaper from './LoginComp/Wallpaper';
import ButtonSubmit from './LoginComp/ButtonSubmit';
import SignupSection from './LoginComp/SignupSection';
import FbLogin from './LoginComp/fbLogin';



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
