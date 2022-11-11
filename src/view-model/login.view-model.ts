import {ILoginViewModel} from './ilogin.view-model.';
import {BaseViewModel} from './base.view-model';
import {Alert} from 'react-native';
import {action, makeAutoObservable, observable} from 'mobx';
import {LoginDto} from '../dto/login.dto';

export class LoginViewModel implements ILoginViewModel {
  private loginDto: LoginDto;
  constructor(loginDto: LoginDto) {
    this.loginDto = loginDto;
    makeAutoObservable(this);
  }

  setAccount(account: string) {
    // this.loginDto.setAccount(account);
  }

  setPassword(password: string) {
    // this.loginDto.setPassword(password);
  }

  async verifyAuthToken(): Promise<void> {}
}
