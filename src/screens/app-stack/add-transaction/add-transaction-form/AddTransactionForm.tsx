import {Content, Form, NativeBase, Text} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';
import InputItem from '_components/fields/InputItem';

export interface Props {
  nameField: NativeBase.Input;
  amountField: NativeBase.Input;
  onClick: () => void;
}

export default class AddTransactionForm extends Component<Props> {
  public render() {
    const {nameField, amountField, onClick} = this.props;

    return (
      <Content>
        <Form>
          <InputItem field={nameField} label="Name" />
          <InputItem field={amountField} label="Amount"/>
          <ApplyButton block onPress={onClick}>
            <Text>Login</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
