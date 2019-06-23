import {Transaction} from '../entities/transaction'

export interface TransactionRequest {
  name: string;
  amount: number;
}

export interface TransactionResponse {
  trans_token: Transaction;
}

export interface FoundUser {
  id: string;
  name: string;
}

export interface UsersListRequest {
  filter: string;
}

export interface TransactionsListResponse {
  trans_token: Transaction[];
}
