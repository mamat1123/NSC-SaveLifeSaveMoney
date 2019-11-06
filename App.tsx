import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/components/Login'
import RegisterScreen from './src/components/Register'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import FeedScreen from './src/components/Feed'
import { AppLoading } from 'expo';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider,IconRegistry } from 'react-native-ui-kitten';

const MainStack = createStackNavigator(
    {
        Feed: {
            screen: FeedScreen,
        },
        // Details: {
        //   screen: DetailsScreen,
        // },
    },
    {
        headerMode: 'none',
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: '#f4511e',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     },
        // },
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            // screen: MainStack,
            screen: FeedScreen,
        },
        Login: {
            screen: LoginScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
        // Map:{
        //   screen:MapScreen
        // }
    },
    {
        initialRouteName: 'Main',
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
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }
    render() {
        if (this.state.isReady == false) {
            return <AppLoading />;
        }

        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider mapping={mapping} theme={lightTheme}>
                    <AppContainer />
                </ApplicationProvider>
            </React.Fragment>

        );
    }
}