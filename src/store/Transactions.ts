import {observable} from 'mobx';

import transactionsAPI from '_api/Transactions';
import {
  TransactionRequest,
  TransactionsListResponse
} from '_types/api/transaction';
import {Transaction} from '_types/entities/transaction';
import {back} from '_utils/navigation';
import operation from '_utils/operationDecorathor';

import profile from './Profile';

export class Transactions {
  public transactions = observable<Transaction>([]);

  @operation('getTransactions') public *getTransactions() {
    const transactionsList: TransactionsListResponse = yield transactionsAPI.list();
    this.transactions.replace(transactionsList.trans_token);
  }

  @operation('createTransaction') public *createTransaction(
    formParams: TransactionRequest
  ) {
    yield transactionsAPI.create(formParams);
    yield profile.userInfo();
    yield this.getTransactions();
    back();
  }
}

export default new Transactions();
