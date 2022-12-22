import {StackActions, useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {Alert, Linking, TouchableWithoutFeedbackBase} from 'react-native';
import {NavigationDto} from '../dto/bridge/navigation.dto';

export class BridgeFeatureModule {
  private navigation: any;
  private webViewRef: any;
  constructor(navigation?: any) {
    this.navigation = navigation;
  }
  login(json: string) {
    console.log('login', json);
  }
  logout(json: string) {
    console.log('logout', json);
  }
  join(json: string) {
    console.log('join', json);
  }
  makeNavigate(dto: NavigationDto) {
    if (dto.isModal) {
      console.log('isModal TRUE!!!');
      const pushAction = StackActions.push('WebView', {
        ...dto,
        isStack: true,
      });
      this.navigation.dispatch(pushAction);
    } else {
      console.log('isModal FALSE!!!');
      // this.webViewRef.current.source.uri = dto.url;
      this.webViewRef.current.injectJavaScript(`history.pushState({},'','${dto.url}')`);
      //this.webViewRef.current.injectJavaScript(`window.location.replace='${dto.url}'`);
      // this.webViewRef.current.window.location.href = dto.url;
    }
  }
  alert(json: string) {
    console.log('alert', json);
  }
  openWebBrowser(json: string) {
    console.log('openWebBrowser', json);
    // Linking.openURL(dto.url);
  }
  snsLogin(json: string) {
    console.log('snsLogin', json);
  }
  onFinishPayment(json: string) {
    console.log('onFinishPayment', json);
  }
  onAnyEvent(json: string) {
    console.log('onAnyEvent', json);
  }
  setNavigation(navigation: any) {
    this.navigation = navigation;
  }
  setWebViewRef(webViewRef: any) {
    this.webViewRef = webViewRef;
  }
}
