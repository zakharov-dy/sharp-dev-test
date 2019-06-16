import {withStore} from '_hoc/withStore';

import Form from './form';
import SignUpForm, {Props} from './SignUpForm';

const form: any = new Form();

const mapProps = (form: any): Props =>
  ({
    emailField: form.$('email'),
    usernameField: form.$('username'),
    passwordField: form.$('password'),
    passwordConfirmationField: form.$('passwordConfirm'),
    onClick: form.onSubmit
  } as Props);

export default withStore<any, Props, {}>(form, mapProps)(SignUpForm);
