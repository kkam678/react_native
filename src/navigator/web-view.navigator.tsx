import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import LiveStreamerScreen from '../screen/live-streamer.screen';
import {WebviewContainer} from '../component/web-view/web-view-container';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export class WebViewNavigator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}

  initWebView() {
    return;
  }
  render() {
    console.log('this.props', this.props);
    return (
      <Stack.Navigator initialRouteName="WebViewPage">
        <Stack.Screen
          name="WebViewPage"
          component={props => <WebviewContainer {...props} uri={this.props.uri} />}
          options={{
            title: '라이브 준비',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
