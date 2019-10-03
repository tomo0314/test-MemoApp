import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator(
  {
  Login: {screen: LoginScreen},
  Home: {screen: MemoListScreen},
  MemoDetail: {screen: MemoDetailScreen},
  MemoEdit: {screen: MemoEditScreen},
  Signup: {screen: SignupScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#265366',
        height: 60,
      },
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerTitle: 'Memot',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
  );

export default createAppContainer(App);