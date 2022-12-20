/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'reflect-metadata';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginNavigator} from './src/navigator/login.navigator';
import BaseInjection from './src/config/base.injection';
import {Provider} from 'mobx-react';
import RootStore from './src/store/root.store';
import {MainNavigator} from './src/navigator/main.navigator';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBell, fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LiveNavigator} from './src/navigator/live.navigator';
import {WebViewNavigator} from './src/navigator/web-view.navigator';

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    BaseInjection();
  }

  componentDidMount() {
    library.add(fas, far, fab, faBell);
  }
  render() {
    const Stack = createNativeStackNavigator();
    const rootStore = new RootStore();
    return (
      <Provider {...rootStore}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
              <Stack.Screen name="Main" component={MainNavigator} />
              <Stack.Screen name="Login" component={LoginNavigator} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
              <Stack.Screen name="Live" component={LiveNavigator} />
            </Stack.Group>
            <Stack.Screen
              name="WebView"
              component={props => {
                console.log('@@@@@@@@@@@@@@@@@@@@@@@@');
                console.log('WebView', props);
                console.log('@@@@@@@@@@@@@@@@@@@@@@@@');
                return <WebViewNavigator {...props} />;
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
