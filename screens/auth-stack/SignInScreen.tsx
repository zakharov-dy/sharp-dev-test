import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {Button as RNButton} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

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
      <>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button full onPress={this.login}>
            <Text>Login</Text>
          </Button>
        </Content>
      </>
    );
  }
}
