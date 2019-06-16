import {observer} from 'mobx-react';
import {NativeBase} from 'native-base';
import React, {Component} from 'react';

import {BaseProps} from '_components/fields/types';

export const formField = (Component: React.ComponentType<BaseProps>) => {
  class WithForm extends React.Component<Partial<BaseProps> & { field: any }> {
    private onBlur = (e: React.SyntheticEvent) => {
      e.preventDefault();
      this.props.field.onBlur();
      this.props.field.validate();
    };

    public render() {
      const {
        inputProps = {},
        itemProps = {},
        field,
        label = '',
        ...other
      } = this.props;
      const bound = field.bind();

      const hocInputProps = {
        ...inputProps,
        onChangeText: bound.onChange,
        onBlur: this.onBlur
      };

      const hocItemProps: NativeBase.Item = {
        ...itemProps,
        error: (field.blurred || !field.isPristine) && field.hasError
      };

      return (
        <Component
          {...other}
          label={label}
          inputProps={hocInputProps}
          itemProps={hocItemProps}
        />
      );
    }
  }

  return observer(WithForm);
};
