import React, {Component} from 'react';

import SignUpForm from './sign-up-form';

export default class SignUpScreen extends Component {
  public static navigationOptions = {
    title: 'Sign Up'
  };

  public render() {
    return  <SignUpForm/>;
  }
}
