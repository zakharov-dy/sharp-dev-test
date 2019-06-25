import {compose} from '@typed/compose';
import {observer} from 'mobx-react';

import {bindStore} from '_hoc/bindStore';
import {withOperation} from '_hoc/withOperation';
import {withStore} from '_hoc/withStore';

import SignInForm, {Props} from './SignInForm';
import addTransactionStore, {SignInStore} from './store';

const mapProps = (store: SignInStore): Props =>
  ({
    emailField: store.form.$('email'),
    passwordField: store.form.$('password'),
    onClick: store.form.onSubmit
  } as Props);

export default compose(
  bindStore<{}, SignInStore>(addTransactionStore, {
    containerStyle: {flex: 1}
  }),
  withOperation(addTransactionStore.startUp),
  withStore<SignInStore, Props, {}>(addTransactionStore, mapProps),
  observer
)(SignInForm);
