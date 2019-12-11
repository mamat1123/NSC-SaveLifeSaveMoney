import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/components/Login'
import RegisterScreen from './src/components/Register'
import FeedScreen from './src/components/Feed'
import MapScreen from './src/components/Map'
import { AppLoading } from 'expo';

// const MainStack = createStackNavigator(
//   {
//     Feed: {
//       screen: FeedScreen,
//     },
//     // Details: {
//     //   screen: DetailsScreen,
//     // },
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

const RootStack = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Map:{
      screen:MapScreen
    }
  },
  {
    initialRouteName: 'Map',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AppContainer />
    );
  }
}