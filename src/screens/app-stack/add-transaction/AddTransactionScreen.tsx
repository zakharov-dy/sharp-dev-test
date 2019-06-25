import {Button, Icon} from 'native-base';
import React, {Component} from 'react';
import {NavigationScreenProps} from 'react-navigation';

import Header from '../Header';
import AddTransactionForm from './add-transaction-form';

export default class AddTransactionScreen extends Component<
  NavigationScreenProps
> {
  public static navigationOptions = ({navigation}: NavigationScreenProps) => {
    const goBack = () => navigation.goBack();
    const leftChild = (
      <Button transparent onPress={goBack}>
        <Icon name="arrow-back" type="Ionicons" />
      </Button>
    );
    return {
      header: <Header title="Add transaction" leftChild={leftChild} />
    };
  };

  public render() {
    return <AddTransactionForm />;
  }
}
