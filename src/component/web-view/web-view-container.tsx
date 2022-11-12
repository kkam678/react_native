import {StackActions} from '@react-navigation/native';
import React from 'react';
import deviceInfoModule from 'react-native-device-info';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {WEBVIEW_HOST, WEBVIEW_URI} from '../../config/web-view.constants';

export function WebviewContainer(props: any) {
  const {route, navigation} = props;
  const uri = WEBVIEW_URI[route.name];
  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  //   const handleOnMessage = ({nativeEvent: {data}}) => {
  //     // data에 웹뷰에서 보낸 값이 들어옵니다.
  //     console.log(data);
  //   };
  const requestOnMessage = async (e: WebViewMessageEvent): Promise<void> => {
    console.log('e.nativeEvent.data', e);
    const nativeEvent = JSON.parse(e.nativeEvent.data);
    if (nativeEvent?.type === 'ROUTER_EVENT') {
      const path: string = nativeEvent.data;
      if (path === 'back') {
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
      } else {
        const pushAction = StackActions.push('Details', {
          url: `${WEBVIEW_HOST}${path}`,
          isStack: true,
        });
        navigation.dispatch(pushAction);
      }
    }
  };
  return (
    <WebView
      nativeConfig={{props: {webContentsDebuggingEnabled: true}}}
      pullToRefreshEnabled={true}
      startInLoadingState={true}
      javaScriptEnabled={true}
      onMessage={requestOnMessage}
      mixedContentMode={'compatibility'}
      originWhitelist={['https://*', 'http://*']}
      userAgent={
        deviceInfoModule.getUserAgent() +
        '[TOKEN/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgyNDM3NzMsImV4cCI6MTY3MDgzNTc3MywiaXNzIjoiaHR0cHM6XC9cL25ld3BpY2ttaS5saXZlay50diIsInVpZCI6NjExfQ.YBMWgd4g71LIPcUy_YlZKQvJ5oxTfy71-KBlncO7n9Y] APP_PICKMI '
      }
      source={{uri: uri}}
    />
  );
}
