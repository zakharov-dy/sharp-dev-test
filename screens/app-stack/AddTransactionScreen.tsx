import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

export default class AddTransactionScreen extends Component<
  NavigationScreenProps
> {
  public static navigationOptions = {
    title: 'Add transaction'
  };

  public addTransaction = () => this.props.navigation.popToTop();

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
          <Button full onPress={this.addTransaction}>
            <Text>Save</Text>
          </Button>
        </Content>
      </>
    );
  }
}
