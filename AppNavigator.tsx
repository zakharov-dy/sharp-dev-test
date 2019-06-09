import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import AddTransactionScreen from './screens/app-stack/AddTransactionScreen';
import HistoryScreen from './screens/app-stack/HistoryScreen';
import SignInScreen from './screens/auth-stack/SignInScreen';
import SignUpScreen from './screens/auth-stack/SignUpScreen';

const AppStack = createStackNavigator(
  {
    AddTransaction: AddTransactionScreen,
    History: HistoryScreen
  },
  {
    initialRouteName: 'History'
  }
);

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Auth'
    }
  )
);
