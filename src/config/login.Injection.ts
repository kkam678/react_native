import 'reflect-metadata';
import {Container} from 'typedi';
import {LoginViewModel} from '../view-model/login.view-model';
import LoginStore from '../store/login.store';
import {LoginDto} from '../dto/login.dto';
export default () => {
  // Container.set("LoginStore", new LoginStore());
  Container.set('ILoginViewModel', new LoginViewModel(new LoginDto()));
};
