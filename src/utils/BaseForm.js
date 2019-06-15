import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';

Validator.setMessages('en', en);

export default class BaseForm extends Form {
  plugins() {
    return {
      dvr: dvr(Validator)
    };
  }
}
