import {Transaction} from '_types/entities/transaction';

export interface Props {
  items: Transaction[];
  isLoading: boolean;
  onRefresh: () => void;
}

export interface ListItemProps extends Transaction {}
