import {NativeBase} from 'native-base';
import React, {Component} from 'react';
import {observer} from 'mobx-react';

import {BaseProps} from '_components/fields/types';

export const formField = (
  Component: React.ComponentType<BaseProps>
) => {
  class WithForm extends React.Component<BaseProps & { field: any }> {
    private onBlur = (e: React.SyntheticEvent) => {
      e.preventDefault();
      this.props.field.onBlur();
      this.props.field.validate();
    };

    public render() {
      const {inputProps = {}, itemProps = {}, field, ...other} = this.props;
      const bound = field.bind();
      console.log(bound.blured);

      const hocInputProps = {
        ...inputProps,
        onChangeText: bound.onChange,
        onBlur: this.onBlur
      };

      const hocItemProps: NativeBase.Item = {
        ...itemProps,
        error: field.hasError
      };

      return (
        <Component
          {...other}
          inputProps={hocInputProps}
          itemProps={hocItemProps}
        />
      );
    }
  }

  return observer(WithForm);
};
