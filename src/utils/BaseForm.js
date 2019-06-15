import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import Validator from "validatorjs";
import en from "validatorjs/src/lang/en";

import BaseField from "./BaseField";

// https://github.com/skaterdav85/validatorjs/issues/229
Validator.setMessages("en", en);

export default class BaseForm extends Form {
  plugins() {
    return {
      dvr: dvr(Validator)
    };
  }

  makeField(props) {
    return new BaseField(props, this);
  }
}
