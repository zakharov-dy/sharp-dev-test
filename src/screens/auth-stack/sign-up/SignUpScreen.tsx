import {Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';

export default class SignUpScreen extends Component {
  public static navigationOptions = {
    title: 'Sign Up'
  };

  public render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password confirmation</Label>
            <Input />
          </Item>
        </Form>
        <ApplyButton block>
          <Text>Sign Up</Text>
        </ApplyButton>
      </Content>
    );
  }
}
