import {withStore} from '_hoc/withStore';

import Form from './form';
import SignInForm, {Props} from './SignInForm';

const form: any = new Form();

const mapProps = (form: any): Props =>
  ({
    emailField: form.$('email'),
    passwordField: form.$('password'),
    onClick: form.onSubmit
  } as Props);

export default withStore<any, Props, {}>(form, mapProps)(SignInForm);
