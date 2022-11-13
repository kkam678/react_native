import {StackActions, useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {Alert, Linking, TouchableWithoutFeedbackBase} from 'react-native';
import {NavigationDto} from '../dto/bridge/navigation.dto';

export class BridgeFeatureModule {
  private navigation: any;
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
    // const pushAction = StackActions.push('WebView', {
    //   uri: dto.url,
    //   isStack: true,
    // });
    this.navigation.navigate('WebView', {uri: dto.url});
  }
  alert(json: string) {
    console.log('alert', json);
  }
  openWebBrowser(json: string) {
    console.log('openWebBrowser', json);
    Linking.openURL(dto.url);
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
}
