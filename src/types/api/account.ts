export interface SignUpRequest {
  username: string;
  password: string;
  email: string;
}

export interface SignUpResponse {
  id_token: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  id_token: string;
}

export interface UserInfo {
  user_info_token: {
    id: string;
    name: string;
    email: string;
    balance: number;
  }
}

