import profile from '_store/Profile';
import BaseForm from '_utils/BaseForm';

export default class SignUpForm extends BaseForm {
  public setup() {
    return {
      fields: [
        {
          name: 'email',
          rules: 'required|email|string'
        },
        {
          name: 'username',
          rules: 'required|string'
        },
        {
          name: 'password',
          rules: 'required|string|between:5,25'
        },
        {
          name: 'passwordConfirm',
          rules: 'required|string|same:password'
        }
      ]
    };
  }

  public hooks() {
    return {
      onSuccess(form: any) {
        profile.signUp(form.values());
      }
    };
  }
}
