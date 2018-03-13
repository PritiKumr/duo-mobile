import { StackNavigator } from 'react-navigation';

import LoginScreen from '../Containers/Login';
export default StackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
});
