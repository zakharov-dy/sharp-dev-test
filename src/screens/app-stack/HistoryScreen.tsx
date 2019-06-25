import {
  Body,
  Button,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text
} from 'native-base';
import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

import Header from './Header';

const HeaderIconType = 'SimpleLineIcons';
const HeaderIconStyle = {fontSize: 24};

export default class HistoryScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = ({navigation}: NavigationScreenProps) => {
    const addTransaction = () => navigation.push('AddTransaction');
    const logout = () => navigation.push('SignIn');

    const leftChild = (
      <Button transparent onPress={logout}>
        <Icon name="logout" type={HeaderIconType} style={HeaderIconStyle} />
      </Button>
    );

    const rightChild = (
      <Button transparent onPress={addTransaction}>
        <Icon name="plus" type={HeaderIconType} style={HeaderIconStyle} />
      </Button>
    );

    return {
      header: (
        <Header title="History" rightChild={rightChild} leftChild={leftChild} />
      )
    };
  };

  public render() {
    return (
      <Content>
        <List>
          <ListItem avatar>
            <Left />
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left />
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}
