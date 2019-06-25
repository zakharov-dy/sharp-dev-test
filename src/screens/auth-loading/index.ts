import {compose} from '@typed/compose';

import {bindStore} from '_hoc/bindStore';
import {withOperation} from '_hoc/withOperation';

import store from './store';

const empty = () => null;

export default compose(
  bindStore(store, {containerStyle: {flex: 1, marginTop: 150}}),
  withOperation(store.startUp),
)(empty);
