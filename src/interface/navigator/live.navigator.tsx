import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import LivePresenter from '../presenter/live.presenter';

const Stack = createNativeStackNavigator();
export class LiveNavigator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <Stack.Navigator initialRouteName="LiveSetting">
        <Stack.Screen
          name="LiveSetting"
          component={LivePresenter}
          options={{
            title: '라이브 준비',
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    );
  }
}
