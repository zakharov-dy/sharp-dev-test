import {withStore} from '_hoc/withStore';

import AddTransactionForm, {Props} from './AddTransactionForm';
import Form from './form';

const form: any = new Form();

const mapProps = (form: any): Props =>
  ({
    nameField: form.$('name'),
    amountField: form.$('amount'),
    onClick: form.onSubmit
  } as Props);

export default withStore<any, Props, {}>(form, mapProps)(AddTransactionForm);
