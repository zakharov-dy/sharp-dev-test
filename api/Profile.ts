import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  UserInfo
} from '../types/api/account';
import agent from './agent';

export class Profile {
  public signUp = (params: SignUpRequest): Promise<SignUpResponse> =>
    agent.post<SignUpRequest, SignUpResponse>('/users', params);

  public signIn = (params: SignInRequest): Promise<SignInResponse> =>
    agent.post<SignInRequest, SignInResponse>('/sessions/create', params);

  public userInfo = (): Promise<UserInfo> =>
    agent.get<UserInfo>('/api/protected/user-info');
}

export default new Profile();
