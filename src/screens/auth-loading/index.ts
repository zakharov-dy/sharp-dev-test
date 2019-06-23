import bindStore from '_hoc/bindStore';

import AuthLoadingScreen from './AuthLoadingScreen';
import authLoadingScreenStore from './store';

const AuthLoading = bindStore(authLoadingScreenStore)(AuthLoadingScreen);

export default AuthLoading;
