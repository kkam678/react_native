import React from 'react';
import {
  Dimensions,
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
import MainSwiper from '../../framework/ui/scroll/main/main-horizontal-scroll.ui';
import {ScrollView} from 'react-native-gesture-handler';
import MainHorizontalScroll from '../../framework/ui/scroll/main/main-horizontal-scroll.ui';
import CircleImage from '../../framework/ui/image/circle-image.ui';

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
        </MainSectionContainer>
        <MainHorizontalScroll>
          <CircleImage width={64} height={64} paddingLeft={16}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
          <CircleImage width={64} height={64} isLast={true}>
            <Image
              style={{width: 96, height: 21}}
              source={require('../../../assets/images/logo.png')}
            />            
          </CircleImage>
          <Text>123123</Text>
        </MainHorizontalScroll>
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
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
