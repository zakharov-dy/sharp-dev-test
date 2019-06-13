import {navigate} from '_utils/navigation';

export class Core {
    public onUnauthorized = () => {
        navigate('SignIn');
    }
}

export default new Core();
