import BaseForm from '_utils/BaseForm'

import profile from '_mobx/Profile'

export default class SignInForm extends BaseForm {

  public setup() {
    return {
      fields: [
        {
          name: 'email',
          label: 'Email',
          placeholder: 'Insert Email',
          rules: 'required|email|string'
        },
        {
          name: 'password',
          label: 'Password',
          placeholder: 'Insert Password',
          rules: 'required|string'
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
        console.log(form.$('password').hasError);
      }
    };
  }
}
