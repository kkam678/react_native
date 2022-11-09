import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPresenter} from '../presenter/login.presenter';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export class LoginNavigator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPresenter}
          options={{title: '로그인'}}
        />
      </Stack.Navigator>
    );
  }
}
