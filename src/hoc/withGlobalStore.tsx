import {Observer} from 'mobx-react';
import React, {Component} from 'react';

import mobxStores, {StoreType as Stores} from '../mobx';

export type StoreType = Stores;

const StoreContext = React.createContext(mobxStores);

interface Props {
  children(store: StoreType): JSX.Element | null;
}

export class WithStore extends Component<Props> {
  public render(): React.ReactNode {
    return (
      <StoreContext.Consumer>
        {store => <Observer>{() => this.props.children(store)}</Observer>}
      </StoreContext.Consumer>
    );
  }
}

type ComponentType = <ConnectedProps, OwnProps>(
  Component: React.FunctionComponent<ConnectedProps & OwnProps>
) => React.Component<ConnectedProps & OwnProps>;

type ObserverConnectType = <ConnectedProps, OwnProps>(
  props: StoreType
) => ComponentType;

type MapProps<ConnectedProps> = (stores: StoreType) => ConnectedProps;

export const observerConnect = <ConnectedProps, OwnProps>(
  mapProps: MapProps<ConnectedProps>
) => (Component: React.FunctionComponent<ConnectedProps & OwnProps>) => (
  ownProps: OwnProps
) => (
  <WithStore>
    {(stores: StoreType) => <Component {...ownProps} {...mapProps(stores)} />}
  </WithStore>
);
