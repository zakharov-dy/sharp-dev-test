import {withStore} from '_hoc/withStore';

import Form from './form';
import SignInView, {Props} from './SignInView';

const form: any = new Form();

const mapProps = (form: any): Props => {
  return {
    emailField: form.$('email'),
    passwordField: form.$('password'),
    onClick: form.onSubmit
  } as Props;
};

export default withStore<any, Props, {}>(form, mapProps)(SignInView);
