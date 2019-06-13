import {navigate} from '_utils/navigation';

import {Operations} from './operations/Operations';

export class Core extends Operations {
  constructor() {
    super();
  }

  public onUnauthorized = () => {
    navigate('SignIn');
  };
}

export default new Core();
