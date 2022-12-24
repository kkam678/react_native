import {StackActions, useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {Alert, Linking, TouchableWithoutFeedbackBase} from 'react-native';
import {LoginDto} from '../dto/bridge/login.dto';
import {NavigationDto} from '../dto/bridge/navigation.dto';

export class BridgeFeatureModule {
  private navigation: any;
  private webViewRef: any;
  constructor(navigation?: any) {
    this.navigation = navigation;
  }
  login(dto: LoginDto) {
    console.log('login', dto);
  }
  logout(json: string) {
    console.log('logout', json);
  }
  snsLogin(json: string) {
    console.log('snsLogin', json);
  }
  join(json: string) {
    console.log('join', json);
  }
  makeNavigate(dto: NavigationDto) {
    const pushAction = StackActions.push('WebView', {
      ...dto,
      isStack: true,
    });
    this.navigation.dispatch(pushAction);
  }
  alert(json: string) {
    console.log('alert', json);
  }
  openWebBrowser(json: string) {
    console.log('openWebBrowser', json);
    // Linking.openURL(dto.url);
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
