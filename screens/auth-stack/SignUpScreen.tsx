import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';

export default class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  public render() {
    return (
      <>
        {/*<Header />*/}
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password confirmation</Label>
              <Input />
            </Item>
          </Form>
          <Button full>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </>
    );
  }
}
