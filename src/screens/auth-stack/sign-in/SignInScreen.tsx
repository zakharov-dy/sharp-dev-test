import {Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {Button as RNButton} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import {ApplyButton} from '_components/ApplyButton';

export default class SignInScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = ({navigation}: NavigationScreenProps) => {
    const navigateToSignUp = () => navigation.navigate('SignUp');
    return {
      headerTitle: 'Sign in',
      headerRight: <RNButton onPress={navigateToSignUp} title={'Sign Up'} />,
      headerBackTitle: null
    };
  };

  private login = () => this.props.navigation.navigate('History');

  public render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <ApplyButton block onPress={this.login}>
            <Text>Login</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
