import store from '_store/index';
import {BoundStore} from '_types/core/boundStore';

export class AddTransactionStore implements BoundStore {
  public onMount() {
    store.transactions.getTransactions();
  }
}

export default new AddTransactionStore();
