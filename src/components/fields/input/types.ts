import {NativeBase} from 'native-base';
import {TextInputProps} from 'react-native';

export interface BaseProps<P extends TextInputProps = TextInputProps> {
  label: string;
  inputProps: P;
  itemProps: NativeBase.Item;
}
