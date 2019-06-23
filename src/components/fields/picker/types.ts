import {NativeBase} from 'native-base'

export interface Option {
  label: string;
  value: string;
}

export interface Props extends NativeBase.Picker {
  field: any;
}
