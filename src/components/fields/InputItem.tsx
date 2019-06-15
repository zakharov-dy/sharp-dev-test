import {Input, Item, Label, NativeBase} from 'native-base';
import React from 'react';

import {formField} from '_hoc/formField';

import {BaseProps} from './types';

export type Props = BaseProps<NativeBase.Input>;

const InputItem = ({inputProps, itemProps, label}: Props) => (
  <Item floatingLabel {...itemProps}>
    <Label>{label}</Label>
    <Input {...inputProps} />
  </Item>
);

export default formField(InputItem);
