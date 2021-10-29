import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}

class LoginBtn extends Component {
  render(){
    return(
      <FacebookLogin
        appId="247671653954750"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} />
    );
  }
}

export default LoginBtn;