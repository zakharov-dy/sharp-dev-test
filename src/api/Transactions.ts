import agent from '_api/agent';
import {
  TransactionRequest,
  TransactionResponse,
  TransactionsListResponse
} from '_types/api/transaction';

export class Transactions {
  public create = (params: TransactionRequest): Promise<TransactionResponse> =>
    agent.post<TransactionRequest, TransactionResponse>(
      '/api/protected/transactions',
      params
    );

  public list = (): Promise<TransactionsListResponse> =>
    agent.get<TransactionsListResponse>('/api/protected/transactions');
}

export default new Transactions();
