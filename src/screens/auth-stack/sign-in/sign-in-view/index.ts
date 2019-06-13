import {withStore} from '_hoc/withStore';

import Form from './form';
import SignInView, {Props} from './SignInView';

const form: any = new Form();

const mapProps = (form): Props => ({
  emailInputProps: form.$('email').bind(),
  passwordInputProps: form.$('password').bind(),
  onClick: form.onSubmit
});

export default withStore<any, Props, any>(form, mapProps)(SignInView);
