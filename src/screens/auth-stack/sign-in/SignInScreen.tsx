import React, {Component} from 'react';
import {Button as RNButton} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import SignInForm from './sign-in-form';

export default class SignInScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = ({navigation}: NavigationScreenProps) => {
    const navigateToSignUp = () => navigation.navigate('SignUp');
    return {
      headerTitle: 'Sign in',
      headerRight: <RNButton onPress={navigateToSignUp} title={'Sign Up'} />,
      headerBackTitle: null
    };
  };

  public render() {
    return <SignInForm />;
  }
}
