import agent from '_api/agent';
import {
  FoundUser,
  TransactionRequest,
  TransactionResponse,
  TransactionsListResponse,
  UsersListRequest
} from '_types/api/transaction';

export class Transactions {
  public create = (params: TransactionRequest): Promise<TransactionResponse> =>
    agent.post<TransactionRequest, TransactionResponse>(
      '/api/protected/transactions',
      params
    );

  public list = (): Promise<TransactionsListResponse> =>
    agent.get<TransactionsListResponse>('/api/protected/transactions');

  public userList = (filter: string): Promise<FoundUser[]> =>
    agent.post<UsersListRequest, FoundUser[]>('/api/protected/users/list', {
      filter
    });
}

export default new Transactions();
