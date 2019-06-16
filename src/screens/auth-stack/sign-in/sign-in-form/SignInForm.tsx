import {Content, Form, NativeBase, Text} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';
import InputItem from '_components/fields/InputItem';

export interface Props {
  emailField: NativeBase.Input;
  passwordField: NativeBase.Input;
  onClick: () => void;
}

export default class SignInForm extends Component<Props> {
  public render() {
    const {emailField, passwordField, onClick} = this.props;

    return (
      <Content>
        <Form>
          <InputItem field={emailField} label="Email" />
          <InputItem field={passwordField} label="Password" inputProps={{secureTextEntry: true}}/>
          <ApplyButton block onPress={onClick}>
            <Text>Login</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
