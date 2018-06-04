import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import FbLogin from './fbLogin';



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
