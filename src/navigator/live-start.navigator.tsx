import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import LiveSettingScreen from '../screen/live-setting.screen';
import LiveStartScreen from '../screen/live-start.screen';

const Stack = createNativeStackNavigator();
export class LiveStartNavigator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <Stack.Navigator initialRouteName="LiveStart">
        <Stack.Screen
          name="LiveStart"
          component={LiveStartScreen}
          options={{
            title: '라이브 방송',
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    );
  }
}
