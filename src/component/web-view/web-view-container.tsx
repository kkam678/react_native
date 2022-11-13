import {StackActions} from '@react-navigation/native';
import React, {useRef} from 'react';
import deviceInfoModule from 'react-native-device-info';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {WEBVIEW_HOST, WEBVIEW_URI} from '../../config/web-view.constants';
import {withJavascriptInterface, Remote} from 'react-native-webview-comlink';
import {ActivityIndicator, Alert, Dimensions, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Constants} from '../../config/constants';
import {BridgeInterface} from '../../module/bridge.interface';
import Container from 'typedi';
import {Color} from '../../style/color.config';

export function WebviewContainer(props: any) {
  const {navigation, uri} = props;
  const bridgeInterface: BridgeInterface = Container.get('BridgeInterface');
  console.log('WebviewContainer', uri);
  bridgeInterface.setNavigation(navigation);

  const WebViewComponent = withJavascriptInterface(bridgeInterface, Constants.bridgeName, {
    forwardRef: true,
    log: true,
  })(WebView);

  const ref = useRef(WebViewComponent);

  return (
    <>
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
    </>
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
}
