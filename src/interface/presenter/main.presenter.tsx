import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ILoginViewModel} from '../../domain/use-case/ilogin.view-model.';
import {BasePresenter} from './base.presenter';
import {inject} from 'mobx-react';
import MainSectionContainer from '../../framework/ui/container/main/main-section-container.ui';
import MainSectionTitle from '../../framework/ui/title/main/main-section-title.ui';
import MainSwiper from '../../framework/ui/swiper/main/main-swiper.ui';

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
        <MainSectionContainer>
          <MainSectionTitle title={this.lang.main.followList} />
          {/* <MainSwiper>
            <View>
              <Image
                style={{width: 96, height: 21}}
                source={require('../../../assets/images/logo.png')}
              />
              <Text>123123</Text>
            </View>
            <View>
              <Image
                style={{width: 96, height: 21}}
                source={require('../../../assets/images/logo.png')}
              />
              <Text>123123</Text>
            </View>
          </MainSwiper> */}
        </MainSectionContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});
