import profileStore from '_store/Profile';
import {BoundStore} from '_types/core/boundStore';
import {navigate} from '_utils/navigation';
import operation from '_utils/operationDecorathor';

class AuthLoadingScreenStore implements BoundStore {

    @operation('startUp') public *startUp() {
        yield profileStore.userInfo();
        if (profileStore.email) {
            navigate('History');
        } else {
            navigate('SignIn');
        }
    }
}

export default new AuthLoadingScreenStore();
