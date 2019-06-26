import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import AddTransactionScreen from '_screens/app-stack/add-transaction/AddTransactionScreen';
import HistoryScreen from '_screens/app-stack/history/HistoryScreen';
import AuthLoadingScreen from '_screens/auth-loading';
import SignInScreen from '_screens/auth-stack/sign-in/SignInScreen';
import SignUpScreen from '_screens/auth-stack/sign-up/SignUpScreen';

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
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
