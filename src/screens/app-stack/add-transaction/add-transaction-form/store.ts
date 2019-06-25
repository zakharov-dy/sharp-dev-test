import {observable} from 'mobx';

import {BoundStore} from '_types/core/boundStore';
import operation from '_utils/operationDecorathor';

import Form from './Form';

export class AddTransactionStore implements BoundStore {
  @observable public form: any;

  @operation() public *startUp() {
    this.form = new Form();
    return this.form;
  }
}

export default new AddTransactionStore();
