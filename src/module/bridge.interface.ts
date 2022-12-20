import {plainToInstance} from 'class-transformer';
import {Alert} from 'react-native';
import {NavigationContext} from 'react-navigation';
import {BaseBridgeDto} from '../dto/bridge/base-bridge.dto';
import {NavigationDto} from '../dto/bridge/navigation.dto';
import {BridgeFeatureModule} from './bridge-feature.module';

export enum WebViewBridgeId {
  Login = 'login',
  Logout = 'logout',
  Join = 'join',
  Navigate = 'open.navigation',
  Alert = 'alert',
  OpenWebBrowser = 'open.web.browser',
  SnsLogin = 'sns.login',
  Payment = 'payment',
  Any = 'any',
}

export class BridgeInterface {
  private bridgeFeature: BridgeFeatureModule;
  constructor(bridgeFeature: BridgeFeatureModule) {
    this.bridgeFeature = bridgeFeature;
  }

  public bridgeAction = (json: string) => {
    const dto = plainToInstance(BaseBridgeDto, JSON.parse(json));
    console.log('bridgeAction!!', dto);
    switch (dto.id) {
      case WebViewBridgeId.Login:
        this.bridgeFeature.login(json);
        break;
      case WebViewBridgeId.Logout:
        this.bridgeFeature.logout(json);
        break;
      case WebViewBridgeId.Join:
        this.bridgeFeature.join(json);
        break;
      case WebViewBridgeId.Navigate:
        const data = plainToInstance(NavigationDto, dto.data);
        this.bridgeFeature.makeNavigate(data);
        break;
      case WebViewBridgeId.Alert:
        this.bridgeFeature.alert(json);
        break;
      case WebViewBridgeId.OpenWebBrowser:
        this.bridgeFeature.openWebBrowser(json);
        break;
      case WebViewBridgeId.SnsLogin:
        this.bridgeFeature.snsLogin(json);
        break;
      case WebViewBridgeId.Payment:
        this.bridgeFeature.onFinishPayment(json);
        break;
      case WebViewBridgeId.Any:
        this.bridgeFeature.onAnyEvent(json);
        break;
    }
  };

  public setNavigation = (navigation: any) => {
    this.bridgeFeature.setNavigation(navigation);
  };
}
