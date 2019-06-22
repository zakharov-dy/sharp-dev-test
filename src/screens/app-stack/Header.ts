import {compose} from '@typed/compose';
import {observer} from 'mobx-react';

import ProfileHeader, {Props} from '_components/ProfileHeader';
import {withStore} from '_hoc/withStore';
import profile, {Profile} from '_store/Profile';

type OwnProps = Pick<Props, 'title' | 'leftChild' | 'rightChild'>;
type MapProps = Pick<Props, 'balance' | 'name'>;

const mapProps = (store: Profile): MapProps => ({
  balance: store.balance,
  name: store.name
});

export default compose(
  withStore<Profile, MapProps, OwnProps>(profile, mapProps),
  observer
)(ProfileHeader);
