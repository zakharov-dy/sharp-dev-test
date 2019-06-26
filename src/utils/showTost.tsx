import {Toast} from 'native-base';

export const showTost = (
  text: string,
  buttonText: string = 'hide',
  type: 'success' | 'warning' | 'danger'
) =>
  Toast.show({
    text,
    buttonText,
    type
  });
