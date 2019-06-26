import {Button, Icon} from 'native-base';
import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

import Header from '../Header';
import HistoryList from './history-list';

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
    return <HistoryList />;
  }
}
