import {StackActions} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import deviceInfoModule from 'react-native-device-info';
import {WebView, WebViewMessageEvent, WebViewNavigation} from 'react-native-webview';
import {WEBVIEW_HOST, WEBVIEW_URI} from '../../config/web-view.constants';
import {withJavascriptInterface, Remote} from 'react-native-webview-comlink';
import {ActivityIndicator, Alert, Dimensions, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Constants} from '../../config/constants';
import {BridgeInterface} from '../../module/bridge.interface';
import Container from 'typedi';
import {Color} from '../../style/color.config';
import {WebViewNativeEvent} from 'react-native-webview/lib/WebViewTypes';

export const WebviewContainer = (props: any) => {
  const {navigation, isTab, route} = props;
  const uri = isTab ? props.uri : route.params.uri;
  const bridgeInterface: BridgeInterface = Container.get('BridgeInterface');
  console.log('WebviewContainer', props);
  bridgeInterface.setNavigation(navigation);
  // const [navState, setNavState] = useState<WebViewNativeEvent>();
  const WebViewComponent = withJavascriptInterface(bridgeInterface, Constants.bridgeName, {
    forwardRef: true,
    log: true,
  })(WebView);

  // const ref = useRef(WebViewComponent);
  // useEffect(() => {
  //   const onPress = () => {
  //     if (navState?.canGoBack) {
  //       // 뒤로 갈 수 있는 상태라면 이전 웹페이지로 이동한다
  //       ref.current.goBack();
  //       // 기본 뒤로가기 동작을 수행하지 않을 거라면 true 를 리턴한다.
  //       return true;
  //     } else {
  //       // 뒤로 갈 수 없는 상태라면
  //       // 다른 원하는 행동을 하면 된다
  //       console.log('do something');
  //       // 기본 뒤로가기 동작을 수행하지 않을 거라면 true 가 아닌 값을 리턴한다.
  //       return false;
  //     }
  //   };
  //   return () => {};
  // }, [navState?.canGoBack]);
  return (
    <WebViewComponent
      pullToRefreshEnabled={true}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator
          color={Color.mainColor}
          size={48}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        />
      )}
      javaScriptEnabled={true}
      mixedContentMode={'compatibility'}
      originWhitelist={['https://*', 'http://*']}
      userAgent={
        deviceInfoModule.getUserAgent() +
        '[TOKEN/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgyNDM3NzMsImV4cCI6MTY3MDgzNTc3MywiaXNzIjoiaHR0cHM6XC9cL25ld3BpY2ttaS5saXZlay50diIsInVpZCI6NjExfQ.YBMWgd4g71LIPcUy_YlZKQvJ5oxTfy71-KBlncO7n9Y] APP_PICKMI '
      }
      // onNavigationStateChange={setNavState}
      source={{uri: uri}}
      nativeConfig={{props: {webContentsDebuggingEnabled: true}}}
      onLoadStart={evt => {
        console.log('onLoadStart', evt.nativeEvent.url);
      }}
      onLoadEnd={evt => {
        console.log('onLoadEnd', evt.nativeEvent.url);
      }}
      injectedJavaScriptBeforeContentLoaded={`console.log('hello world!');`}
    />

    // <WebView
    //   useWebKit={true}
    //   nativeConfig={{props: {webContentsDebuggingEnabled: true}}}
    //   pullToRefreshEnabled={true}
    //   startInLoadingState={true}
    //   javaScriptEnabled={true}
    //   onMessage={requestOnMessage}
    //   mixedContentMode={'compatibility'}
    //   originWhitelist={['https://*', 'http://*']}
    //   userAgent={
    //     deviceInfoModule.getUserAgent() +
    //     '[TOKEN/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgyNDM3NzMsImV4cCI6MTY3MDgzNTc3MywiaXNzIjoiaHR0cHM6XC9cL25ld3BpY2ttaS5saXZlay50diIsInVpZCI6NjExfQ.YBMWgd4g71LIPcUy_YlZKQvJ5oxTfy71-KBlncO7n9Y] APP_PICKMI '
    //   }
    //   source={{uri: uri}}
    // />
  );
};
