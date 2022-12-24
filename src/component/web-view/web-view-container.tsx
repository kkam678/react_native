import {StackActions} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import deviceInfoModule from 'react-native-device-info';
import {WebView, WebViewMessageEvent, WebViewNavigation, WebViewProps} from 'react-native-webview';
import {WEBVIEW_HOST, WEBVIEW_URI} from '../../config/web-view.constants';
import {withJavascriptInterface, Remote} from 'react-native-webview-comlink';
import {ActivityIndicator, Alert, BackHandler, Dimensions, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Constants} from '../../config/constants';
import {BridgeInterface} from '../../module/bridge.interface';
import Container from 'typedi';
import {Color} from '../../style/color.config';
import {WebViewNativeEvent} from 'react-native-webview/lib/WebViewTypes';
import {faTruckField} from '@fortawesome/free-solid-svg-icons';
import {BridgeFeatureModule} from '../../module/bridge-feature.module';

export const WebviewContainer = (props: any) => {
  const {navigation, isTab, route} = props;
  const url = isTab ? props.url : route.params.url;
  const bridgeInterface: BridgeInterface = new BridgeInterface(new BridgeFeatureModule());
  // console.log('WebviewContainer', props);
  const [isCanGoBack, setIsCanGoBack] = useState<boolean>(false);
  const webViewRef = useRef<WebView>();
  const [uri, setUri] = useState<string>(url);
  bridgeInterface.setNavigation(navigation);
  bridgeInterface.setWebViewRef(webViewRef);

  const WebViewComponent = withJavascriptInterface(bridgeInterface, Constants.bridgeName, {
    forwardRef: true,
    log: true,
  })(WebView);

  const handleBackButtonPress = () => {
    if (webViewRef.current && isCanGoBack) {
      webViewRef.current.goBack();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress);
    };
  }, [isCanGoBack]);
  return (
    <WebViewComponent
      source={{uri: url}}
      //@ts-ignore
      ref={webViewRef}
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
      userAgent={deviceInfoModule.getUserAgent() + '[TOKEN/] APP_PICKMI '}
      // onNavigationStateChange={event => {
      //   if (event.url !== url) {
      //     webViewRef.current?.stopLoading();
      //     Linking.openURL(event.url);
      //   }
      // }}
      nativeConfig={{props: {webContentsDebuggingEnabled: true}}}
      onLoadStart={evt => {
        console.log('onLoadStart', evt.nativeEvent.url);
      }}
      onLoadEnd={evt => {
        console.log('onLoadEnd', evt.nativeEvent.url);
      }}
      injectedJavaScriptBeforeContentLoaded={`
        (function() {
          function wrap(fn) {
            return function wrapper() {
              var res = fn.apply(this, arguments);
              window.ReactNativeWebView.postMessage('navigationStateChange');
              return res;
            }
          }
    
          history.pushState = wrap(history.pushState);
          history.replaceState = wrap(history.replaceState);
          window.addEventListener('popstate', function() {            
            window.ReactNativeWebView.postMessage('navigationStateChange');
          });
        })();
    
      `}
      onMessage={({nativeEvent: state}) => {
        if (state.data === 'navigationStateChange') {
          // Navigation state updated, can check state.canGoBack, etc.
          setIsCanGoBack(state.canGoBack);
        }
      }}
    />
  );
};
