import {action, observable, reaction} from 'mobx';
// @ts-ignore
import {Field} from 'mobx-react-form';

import transactionsAPI from '_api/Transactions';
import {Option} from '_components/fields/picker/types';
import {FoundUser} from '_types/api/transaction';
import operation from '_utils/operationDecorathor';

const foundUserToOption = (foundUser: FoundUser): Option => ({
  value: foundUser.name,
  label: foundUser.name
});

export default class RulesField extends Field {
  // @observable public options: IObservableArray<Option> = [] as IObservableArray;
  public foundUserOptions = observable<Option>([]);
  @observable public filter = '';

  constructor(props: any) {
    super(props);
    // onFilterChange reaction
    reaction(() => this.filter, this.updateOptions.bind(this), {
      // debounce
      delay: 1000
    });
  }

  @operation('updateOptions') private *updateOptions(filter: string) {
    if (filter) {
      const res: FoundUser[] = yield transactionsAPI.userList(filter);
      this.foundUserOptions.replace(res.map(foundUserToOption));
    }
  }

  @action public onFilterChange = (str: string) => {
    this.filter = str;
  };
}
