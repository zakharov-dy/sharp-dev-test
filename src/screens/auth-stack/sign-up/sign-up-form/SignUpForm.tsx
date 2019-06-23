import {Content, Form, NativeBase, Text} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';
import InputItem from '_components/fields/input/InputItem';

export interface Props {
  emailField: NativeBase.Input;
  usernameField: NativeBase.Input;
  passwordField: NativeBase.Input;
  passwordConfirmationField: NativeBase.Input;
  onClick: () => void;
}

export default class SignUpForm extends Component<Props> {
  public render() {
    const {
      emailField,
      usernameField,
      passwordField,
      passwordConfirmationField,
      onClick
    } = this.props;

    return (
      <Content>
        <Form>
          <InputItem field={emailField} label="Email" />
          <InputItem field={usernameField} label="Name" />
          <InputItem
            field={passwordField}
            label="Password"
            inputProps={{secureTextEntry: true}}
          />
          <InputItem
            field={passwordConfirmationField}
            label="Password confirmation"
            inputProps={{secureTextEntry: true}}
          />
        </Form>
        <ApplyButton block onPress={onClick}>
          <Text>Sign Up</Text>
        </ApplyButton>
      </Content>
    );
  }
}
