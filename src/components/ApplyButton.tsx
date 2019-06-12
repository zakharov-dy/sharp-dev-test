import {Button, NativeBase} from 'native-base';
import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';

export const ApplyButton = ({
  children,
  style = emptyStyle,
  ...props
}: NativeBase.Button & { children: ReactNode }) => (
  <Button {...props} style={{...styles.applyButton, ...(style as object)}}>
    {children}
  </Button>
);

const emptyStyle = StyleSheet.create({});

export const styles = StyleSheet.create({
  applyButton: {
    margin: 16,
  }
});
