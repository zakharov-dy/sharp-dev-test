import {Body, Left, ListItem, Right, Text} from 'native-base';
import React from 'react';

import {ListItemProps} from './types';

export const HistoryListItem = (props: ListItemProps) => (
  <ListItem avatar key={props.id}>
    <Left />
    <Body>
      <Text>{props.username}</Text>
      <Text note>{props.amount} $</Text>
    </Body>
    <Right>
      <Text note>{props.date}</Text>
    </Right>
  </ListItem>
);
