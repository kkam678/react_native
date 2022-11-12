import Container from 'typedi';
import {LoginViewModel} from '../view-model/login.view-model';
import {MainViewModel} from '../view-model/main.view-model';

export default class RootStore {
  loginViewModel: LoginViewModel;
  mainViewModel: MainViewModel;
  constructor() {
    this.loginViewModel = Container.get('ILoginViewModel');
    this.mainViewModel = Container.get('MainViewModel');
  }
}
