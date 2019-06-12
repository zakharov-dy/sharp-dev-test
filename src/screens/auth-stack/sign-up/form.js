import { Form } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

export default class MyForm extends Form {

  /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
  plugins() {
    return {
      dvr: dvr(validatorjs),
    };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
  setup() {
    return {
      fields: [{
        name: 'email',
        label: 'Email',
        placeholder: 'Insert Email',
        rules: 'required|email|string',
      }, {
        name: 'password',
        label: 'Password',
        placeholder: 'Insert Password',
        rules: 'required|string',
      }, {
        name: 'passwordConfirm',
        label: 'Password Confirmation',
        placeholder: 'Confirm Password',
        rules: 'required|string|same:password',
      }],
    };
  }

  /*
    Event Hooks
  */
  hooks() {
    return {
      /*
        Success Validation Hook
      */
      onSuccess(form) {
        alert('Form is valid! Send the request here.');
        // get field values
        console.log('Form Values!', form.values());
      },
      /*
        Error Validation Hook
      */
      onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
      }
    };
  }
}