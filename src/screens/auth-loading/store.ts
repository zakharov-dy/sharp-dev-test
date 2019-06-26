import profileStore from '_store/Profile';
import {BoundStore} from '_types/core/boundStore';
import {navigate} from '_utils/navigation';
import operation from '_utils/operationDecorathor';

class AuthLoadingScreenStore implements BoundStore {
  @operation() public *startUp() {
    yield profileStore.userInfo();
    navigate('History');
  }
}

export default new AuthLoadingScreenStore();
