import {Provider} from 'mobx-react';
import {Container} from 'native-base';
import React from 'react';
import {NavigationContainerComponent} from 'react-navigation';

import {setTopLevelNavigator} from '_utils/navigation';

import AppNavigator from './src/AppNavigator';
import stores from './src/store';

export default class App extends React.Component {
  private navigationRef = React.createRef<NavigationContainerComponent>();

  public componentDidMount(): void {
    if (this.navigationRef.current) {
      setTopLevelNavigator(this.navigationRef.current);
    }
  }

  public render() {
    return (
      <Provider {...stores}>
        <Container>
          <AppNavigator ref={this.navigationRef} />
        </Container>
      </Provider>
    );
  }
}
