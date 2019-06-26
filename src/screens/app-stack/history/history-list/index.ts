import {compose} from '@typed/compose';
import {observer} from 'mobx-react';

import {bindStore} from '_hoc/bindStore';
import {OperationFn} from '_hoc/withOperation';
import {withStore} from '_hoc/withStore';
import store, {StoreType} from '_store/index';
import {Transaction} from '_types/entities/transaction';

import {HistoryList} from './HistoryList';
import historyStore from './store';
import {Props} from './types';

const mapProps = (store: StoreType): Props => {
  const onRefresh = store.transactions.getTransactions as OperationFn;
  const getTransactionsOperation = store.core.operations.get(onRefresh.id);
  const isLoading = Boolean(
    getTransactionsOperation && getTransactionsOperation.isLoading
  );
  return {
    items: store.transactions.transactions as Transaction[],
    isLoading,
    onRefresh: onRefresh.bind(store.transactions)
  } as Props;
};

export default compose(
  withStore<StoreType, Props, {}>(store, mapProps),
  bindStore(historyStore, {containerStyle: {flex: 1}}),
  observer
)(HistoryList);
