import {Content, Form, NativeBase, Text} from 'native-base';
import React, {Component} from 'react';

import {ApplyButton} from '_components/ApplyButton';
import InputItem from '_components/fields/input/InputItem';
import Picker from '_components/fields/picker/Picker';

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
          <Picker field={nameField} placeholder={'Select name'} />
          <InputItem
            field={amountField}
            label="Amount"
            inputProps={{keyboardType: 'number-pad'}}
          />
          <ApplyButton block onPress={onClick}>
            <Text>Send</Text>
          </ApplyButton>
        </Form>
      </Content>
    );
  }
}
