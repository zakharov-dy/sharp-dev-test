import {action, observable} from 'mobx';
import {AsyncStorage} from 'react-native';

import profileAPI from '_api/Profile';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  UserInfo
} from '_types/api/account';
import {navigate} from '_utils/navigation';
import operation from '_utils/operationDecorathor';

export class Profile {
  @observable public name?: string = undefined;
  @observable public email?: string = undefined;
  @observable public balance?: number = undefined;

  @action private setUserInfo(userInfo: UserInfo) {
    const {
      user_info_token: {name, email, balance}
    } = userInfo;
    this.balance = balance;
    this.email = email;
    this.name = name;
  }

  @operation('signIn') public *signIn(params: SignInRequest) {
    const res: SignInResponse = yield profileAPI.signIn(params);
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', res.id_token);
    yield this.userInfo();
    navigate('History');
  }

  @operation('signUp') public *signUp(
    rawParams: SignUpRequest & { passwordConfirmation: string }
  ) {
    const {passwordConfirmation, ...params} = rawParams;
    const res: SignUpResponse = yield profileAPI.signUp(params);
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', res.id_token);
    yield this.userInfo();
    navigate('History');
  }

  @operation('userInfo') public *userInfo() {
    const userInfo: UserInfo = yield profileAPI.userInfo();
    this.setUserInfo(userInfo);
  }

  @operation('logout') public *logout() {
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', '');
    navigate('SignIn');
  }
}

export default new Profile();
