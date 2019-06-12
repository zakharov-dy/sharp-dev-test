import {Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

import {ApplyButton} from '_components/ApplyButton';

export default class AddTransactionScreen extends Component<
  NavigationScreenProps
> {
  public static navigationOptions = {
    title: 'Add transaction'
  };

  public addTransaction = () => this.props.navigation.popToTop();

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
        <ApplyButton block onPress={this.addTransaction}>
          <Text>Save</Text>
        </ApplyButton>
      </Content>
    );
  }
}
