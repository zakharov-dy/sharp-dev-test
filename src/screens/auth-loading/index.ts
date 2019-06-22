import bindStore from '_hoc/bindStore';

import AuthLoadingScreen from './AuthLoadingScreen';
import authLoadingScreenStore from './store';

const BoundTicker = bindStore(authLoadingScreenStore)(AuthLoadingScreen);

// @ts-ignore
BoundTicker.navigationOptions = {
  title: 'Котировки'
};

export default BoundTicker;
