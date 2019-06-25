import profile from '_store/Profile';
import BaseForm from '_utils/BaseForm';

export default class SignInForm extends BaseForm {
  public setup() {
    return {
      fields: [
        {
          name: 'email',
          rules: 'required|email|string'
        },
        {
          name: 'password',
          rules: 'required|string'
        }
      ]
    };
  }

  public hooks() {
    return {
      onSuccess(form: any) {
        profile.signIn(form.values());
      }
    };
  }
}
