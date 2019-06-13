import {Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {TextInputProps} from 'react-native';

import {ApplyButton} from '_components/ApplyButton';

export interface Props {
  emailInputProps: TextInputProps;
  passwordInputProps: TextInputProps;
  onClick: () => void;
}

export default class SignInView extends Component<Props> {
  public render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={this.props.emailInputProps.onChange} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input onChangeText={this.props.passwordInputProps.onChange}  />
          </Item>
          <ApplyButton block onPress={this.props.onClick}>
            <Text>Login</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
