import {configure} from 'mobx';

import core from './core';
import profile from './Profile';
import transactions from './Transactions';

configure({
  enforceActions: 'observed'
});

const store = {profile, core, transactions};
export default store;

export type StoreType = typeof store;
