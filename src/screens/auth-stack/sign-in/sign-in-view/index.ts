import {withStore} from '_hoc/withStore';

import Form from './form';
import SignInView, {Props} from './SignInView';

const form: any = new Form();

const mapProps = (form): Props => {
  return {
    emailInputProps: form.$('email').bind(),
    emailError: form.$('email').hasError,
    passwordInputProps: form.$('password').bind(),
    passwordError: form.$('password').hasError,
    onClick: form.onSubmit
  } as Props;
};

export default withStore<any, Props, any>(form, mapProps)(SignInView);
