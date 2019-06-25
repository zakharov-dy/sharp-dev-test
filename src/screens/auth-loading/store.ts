import profileStore from '_store/Profile';
import {BoundStore} from '_types/core/boundStore';
import {navigate} from '_utils/navigation';
import operation from '_utils/operationDecorathor';
import {sleep} from '_utils/sleep';

class AuthLoadingScreenStore implements BoundStore {

    @operation() public *startUp() {
        yield sleep(3000);
        yield profileStore.userInfo();
        if (profileStore.email) {
            navigate('History');
        } else {
            navigate('SignIn');
        }
    }
}

export default new AuthLoadingScreenStore();
