import {configure} from 'mobx';

import core from './core';
import profile from './Profile';

configure({
    enforceActions: 'observed'
});

const store = {profile, core};
export default store;

export type StoreType = typeof store;
