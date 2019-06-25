import {
  NavigationActions,
  NavigationContainerComponent
} from 'react-navigation';

let navigator: NavigationContainerComponent;

export const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent
) => (navigator = navigatorRef);

export const navigate = (routeName: string) =>
  navigator.dispatch(
    NavigationActions.navigate({
      routeName
    })
  );

export const back = () =>
  navigator.dispatch(
    NavigationActions.back()
  );
