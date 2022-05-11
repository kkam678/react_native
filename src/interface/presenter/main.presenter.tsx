import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ILoginViewModel} from '../../domain/use-case/ilogin.view-model.';
import {BasePresenter} from './base.presenter';
import LoginForm from '../../framework/ui/container/login/login-form.ui';
import {inject} from 'mobx-react';
import LoginAccount from '../../framework/ui/input/login/login-account.ui';
import LoginPassword from '../../framework/ui/input/login/login-password.ui';
import LoginButton from '../../framework/ui/button/login/login-button.ui';
import LoginLostContainer from '../../framework/ui/container/login/login-lost-container.ui';
import LoginLostButton from '../../framework/ui/button/login/login-lost-button.ui';
import LoginTopBlock from '../../framework/ui/block/login/login-top-block.ui';

interface IState {
  account: string;
  password: string;
}

@inject('loginViewModel')
export class MainPresenter extends BasePresenter<any, IState> {
  private readonly viewModel: ILoginViewModel;

  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };

    this.viewModel = this.props.loginViewModel;
    // isDarkMode: Appearance.getColorScheme() === 'dark'
  }

  componentDidMount() {}

  handleChangeAccount = (newText: string) => {
    this.viewModel.setAccount(newText);
  };

  handleChangePassword = (newText: string) => {
    this.viewModel.setPassword(newText);
  };

  handleLogin = () => {
    this.viewModel.verifyAuthToken();
  };

  handleGoogleLogin = () => {};

  handleNaverLogin = () => {};

  handleKakaoLogin = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
});
