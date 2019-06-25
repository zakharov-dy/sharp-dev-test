import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import {BoundStore} from '_types/core/boundStore';

interface Options {
  containerStyle?: StyleProp<ViewStyle>;
}

export function bindStore<P, T extends BoundStore>(boundStore: T, options?: Options) {
  return function (Component: React.ComponentType<P>) {
    class BindStore extends React.Component<P> {
      private onWillBlur = () => boundStore.toFinish && boundStore.toFinish();
      private onWillFocus = () => boundStore.startUp && boundStore.startUp();

      public render() {
        const containerStyle = options && options.containerStyle;
        return (
          <View style={containerStyle}>
            <NavigationEvents
              onWillBlur={this.onWillBlur}
              onWillFocus={this.onWillFocus}
            />
            <Component {...this.props} />
          </View>
        );
      }
    }

    return BindStore;
  };
}
