import Container from 'typedi';
import {LoginDto} from '../dto/login.dto';
import {LoginViewModel} from '../view-model/login.view-model';
import {MainViewModel} from '../view-model/main.view-model';

export default function BaseInjection() {
  Container.set('ILoginViewModel', new LoginViewModel(new LoginDto()));
  Container.set('MainViewModel', new MainViewModel());
}
