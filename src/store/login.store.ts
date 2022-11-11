import {Container} from 'typedi';
import {ILoginViewModel} from '../view-model/ilogin.view-model.';
import {LoginViewModel} from '../view-model/login.view-model';

export default class LoginStore {
  loginViewModel: LoginViewModel;

  constructor() {
    this.loginViewModel = Container.get('ILoginViewModel');
  }
}
