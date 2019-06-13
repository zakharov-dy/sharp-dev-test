import {Form} from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
// import validatorjs from 'validatorjs';

// import profile from '_mobx/Profile'

export default class SignInForm extends Form {

  // public plugins() {
  //   return {
  //     dvr: dvr(validatorjs)
  //   };
  // }

  public setup() {
    return {
      fields: [
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Insert Email',
          // rules: 'required|email|string'
        },
        {
          name: 'password',
          label: 'Password',
          placeholder: 'Insert Password',
          // rules: 'required|string'
        }
      ]
    };
  }

  public hooks() {
    return {
      onSuccess(form) {
        // profile.signIn(form.values());
        console.log(form.values());
      },

      onError(form) {
        console.log(form.values);
      }
    };
  }
}
