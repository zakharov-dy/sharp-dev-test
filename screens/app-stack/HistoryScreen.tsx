import {
  Body,
  Content,
  Left,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import React, {Component} from 'react';
import {Button as RNButton} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

export default class HistoryScreen extends Component<NavigationScreenProps> {
  public static navigationOptions = ({navigation}: NavigationScreenProps) => {
    const navigateToSignUp = () => navigation.push('AddTransaction');
    return {
      headerTitle: 'History',
      headerRight: (
        <RNButton onPress={navigateToSignUp} title={'Add transaction'} />
      ),
      headerBackTitle: null
    };
  };

  public render() {
    return (
      <Content>
        <List>
          <ListItem avatar>
            <Left/>
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
            <Left/>
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
