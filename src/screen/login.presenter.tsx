import React from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ILoginViewModel} from '../view-model/ilogin.view-model.';
import {Container} from 'typedi';
import {BasePresenter} from './base.presenter';
import LoginForm from '../component/container/login/login-form.ui';
import SubHeader from '../component/header/sub-header.ui';
import {inject} from 'mobx-react';
import LoginAccount from '../component/input/login/login-account.ui';
import LoginPassword from '../component/input/login/login-password.ui';
import LoginButton from '../component/button/login/login-button.ui';
import LoginLostContainer from '../component/container/login/login-lost-container.ui';
import LoginLostButton from '../component/button/login/login-lost-button.ui';
import LoginTopBlock from '../component/block/login/login-top-block.ui';

interface IState {
  account: string;
  password: string;
}

@inject('loginViewModel')
export class LoginPresenter extends BasePresenter<any, IState> {
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

  handleLogin = () => {};

  handlePressJoin = () => {
    this.props.navigation.navigate('Login2');
  };

  handleGoogleLogin = () => {};

  handleNaverLogin = () => {};

  handleKakaoLogin = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <LoginTopBlock
          onPress={this.handlePressJoin}
          titleTop={this.lang.login.loginSubTitleTop}
          titleBottom={this.lang.login.loginSubTitleBottom}
        />

        <LoginForm>
          <LoginAccount
            placeholder={this.lang.login.inputAccount}
            onChangeText={this.handleChangeAccount}
          />
          <LoginPassword
            placeholder={this.lang.login.inputPassword}
            onChangeText={this.handleChangePassword}
          />
          <LoginButton
            label={this.lang.login.doLogin}
            onPress={this.handleLogin}
          />
          <LoginLostContainer>
            <LoginLostButton />
          </LoginLostContainer>
        </LoginForm>
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
