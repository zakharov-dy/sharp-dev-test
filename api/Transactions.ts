import {
  TransactionRequest,
  TransactionResponse,
  TransactionsListResponse
} from '../types/api/transaction';
import agent from './agent';

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
