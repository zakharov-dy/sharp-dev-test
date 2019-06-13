import {withStore} from '_hoc/withStore';
import {observable} from 'mobx';

// import Form from './form';
import SignInView from './SignInView';
import profile from '_mobx/Profile';

// const form = new Form();

// const mapProps = form => ({
//   emailInputProps: {...form.$('email')},
//   passwordInputProps: {...form.$('password')},
//   onClick: form.onSubmit
// });

export default withStore(profile, (profile) => profile)(observable(SignInView));
// export default SignInView;
