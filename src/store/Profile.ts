import {AsyncStorage} from 'react-native';

import profileAPI from '_api/Profile';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse
} from '_types/api/account';
import {navigate} from '_utils/navigation';

import operation from './core/operations/operationDecorathor';

export class Profile {
  @operation('signIn') public *signIn(params: SignInRequest) {
    const res: SignInResponse = yield profileAPI.signIn(params);
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', res.id_token);
    navigate('History');
  }

  @operation('signUp') public *signUp(params: SignUpRequest) {
    const res: SignUpResponse = yield profileAPI.signUp(params);
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', res.id_token);
    navigate('History');
  }

  @operation('logout') public *logout() {
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', '');
    navigate('SignIn');
  }
}

export default new Profile();
