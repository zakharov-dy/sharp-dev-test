import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

interface AxiosResponse<T = any> extends Promise<T> {}

type AgentInstance = Omit<
  AxiosInstance,
  'request' | 'get' | 'delete' | 'head' | 'post' | 'put' | 'patch'
>;

interface AgentInstanceCustom extends AgentInstance {
  request<T = any>(config: AxiosRequestConfig): AxiosResponse<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosResponse<T>;
  delete(url: string, config?: AxiosRequestConfig): AxiosResponse;
  head(url: string, config?: AxiosRequestConfig): AxiosResponse;
  post<P = any, T = any>(
    url: string,
    data?: P,
    config?: AxiosRequestConfig
  ): AxiosResponse<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosResponse<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosResponse<T>;
}

const agent = axios.create({
  baseURL: 'http://193.124.114.46:3001'
});

agent.interceptors.response.use(response => response.data);

export default agent as AgentInstanceCustom;
