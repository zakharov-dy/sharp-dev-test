// @ts-ignore
import {Field} from 'mobx-react-form';

import BaseForm from '_utils/BaseForm';

import RulesField from './RulesField';

export default class SignInForm extends BaseForm {
  public makeField(props: any) {
    if (props.key === 'name') {
      return new RulesField(props);
    } else {
      return new Field(props);
    }
  }

  public setup() {
    return {
      fields: [
        {
          name: 'name',
          rules: 'required|string'
        },
        {
          name: 'amount',
          rules: 'required|string'
        }
      ]
    };
  }

  public hooks() {
    return {
      onSuccess(form: any) {
        console.log(form.values());
      }
    };
  }
}
