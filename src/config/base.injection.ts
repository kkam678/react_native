import {useNavigationContainerRef} from '@react-navigation/native';
import Container from 'typedi';
import {LoginDto} from '../dto/login.dto';
import {BridgeFeatureModule} from '../module/bridge-feature.module';
import {BridgeInterface} from '../module/bridge.interface';
import {LoginViewModel} from '../view-model/login.view-model';
import {MainViewModel} from '../view-model/main.view-model';

export default function BaseInjection() {
  Container.set('ILoginViewModel', new LoginViewModel(new LoginDto()));
  Container.set('MainViewModel', new MainViewModel());
  Container.set('BridgeInterface', new BridgeInterface(new BridgeFeatureModule()));
}
