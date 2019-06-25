import {compose} from '@typed/compose';
import {observer} from 'mobx-react';

import {bindStore} from '_hoc/bindStore';
import {withOperation} from '_hoc/withOperation';
import {withStore} from '_hoc/withStore';

import AddTransactionForm, {Props} from './AddTransactionForm';
import addTransactionStore, {AddTransactionStore} from './store';

const mapProps = (store: AddTransactionStore): Props =>
  ({
    nameField: store.form.$('name'),
    amountField: store.form.$('amount'),
    onClick: store.form.onSubmit
  } as Props);

export default compose(
  bindStore<{}, AddTransactionStore>(addTransactionStore, {
    containerStyle: {flex: 1}
  }),
  withOperation(addTransactionStore.startUp),
  withStore<AddTransactionStore, Props, {}>(addTransactionStore, mapProps),
  observer
)(AddTransactionForm);
