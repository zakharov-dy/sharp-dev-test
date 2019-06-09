import {Transaction} from '../entities/transaction'

export interface TransactionRequest {
  name: string;
  amount: number;
}

export interface TransactionResponse {
  trans_token: Transaction;
}


export interface TransactionsListResponse {
  trans_token: Transaction[];
}
