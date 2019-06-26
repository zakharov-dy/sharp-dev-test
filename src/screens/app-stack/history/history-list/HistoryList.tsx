import {Content, List} from 'native-base';
import React from 'react';
import {RefreshControl} from 'react-native';

import {HistoryListItem} from './HistoryListItem';
import {Props} from './types';

export const HistoryList = (props: Props) => {
  return (
    <Content
      refreshControl={
        <RefreshControl
          refreshing={props.isLoading}
          onRefresh={props.onRefresh}
        />
      }
    >
      <List>{props.items.map(HistoryListItem)}</List>
    </Content>
  );
};
