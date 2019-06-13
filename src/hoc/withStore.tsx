import {Observer} from 'mobx-react';
import React, {Component} from 'react';

interface WithStoreProps<StoreType> {
  children(store: StoreType): JSX.Element | null;
}

export const withStore = <StoreType, ConnectedProps, OwnProps>(
  mobxStore: StoreType,
  mapProps: (mobxStore: StoreType) => ConnectedProps
) => {
  const StoreContext = React.createContext(mobxStore);

  class WithStore extends Component<WithStoreProps<StoreType>> {
    public render(): React.ReactNode {
      return (
        <StoreContext.Consumer>
          {store => <Observer>{() => this.props.children(store)}</Observer>}
        </StoreContext.Consumer>
      );
    }
  }

  return (Component: React.FunctionComponent<ConnectedProps & OwnProps>) => (
    ownProps: OwnProps
  ) => (
    <WithStore>
      {(store: StoreType) => <Component {...ownProps} {...mapProps(store)} />}
    </WithStore>
  );
};
