import {observable} from 'mobx';
import {AsyncStorage} from 'react-native';

import {BoundStore} from '_types/core/boundStore';
import operation from '_utils/operationDecorathor';

import Form from './Form';

export class SignInStore implements BoundStore {
  @observable public form: any;

  @operation() public *startUp() {
    // Если попали на страницу с логином, то токен недействительный или пользователь вышел
    yield AsyncStorage.setItem('JWT_BEARER_TOKEN', '');
    this.form = new Form();
    return this.form;
  }
}

export default new SignInStore();
