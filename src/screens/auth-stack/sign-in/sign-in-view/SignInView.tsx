import {
  Content,
  Form,
  Input,
  Item,
  Label,
  NativeBase,
  Text
} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';

export interface Props {
  emailProps: NativeBase.Input;
  passwordProps: NativeBase.Input;
  onClick: () => void;
}

export default class SignInView extends Component<Props> {
  public render() {
    const {
      passwordError,
      passwordInputProps,
      emailInputProps,
      emailError,
      onClick
    } = this.props;

    console.log(emailError);

    return (
      <Content>
        <Form>
          <Item floatingLabel error={emailError}>
            <Label>Email</Label>
            <Input onChangeText={emailInputProps.onChange} />
          </Item>
          <Item floatingLabel last error={passwordError}>
            <Label>Password</Label>
            <Input onChangeText={passwordInputProps.onChange} />
          </Item>
          <ApplyButton block onPress={onClick}>
            <Text>Login</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
