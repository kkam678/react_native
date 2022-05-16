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
import MainFollowContainer from '../../framework/ui/container/main/main-follow-container.ui';

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
    const mockData = [
      {image: require('../../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../../assets/images/image4.jpeg'), name: '경리'},
      {image: require('../../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../../assets/images/image4.jpeg'), name: '경리'},
    ];
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
          <ScrollView
            style={styles.wrapper}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <MainSectionContainer isFirst={true}>
              <MainSectionTitle title={this.lang.main.followList} />
              <MainHorizontalScroll>
                {mockData.map((v, k) => {
                  const isLast = mockData.length == k + 1;
                  return (
                    <MainFollowContainer index={k}>
                      <CircleImage
                        isLast={isLast}
                        source={v.image}
                        width={64}
                        height={64}
                      />
                      <Text style={{textAlign: 'center'}}>{v.name}</Text>
                    </MainFollowContainer>
                  );
                })}
              </MainHorizontalScroll>
            </MainSectionContainer>

            <MainSectionContainer isFirst={false}>
              <MainSectionTitle title={this.lang.main.starList} />
              <MainHorizontalScroll>
                {mockData.map((v, k) => {
                  const isLast = mockData.length == k + 1;
                  return (
                    <MainFollowContainer index={k}>
                      <CircleImage
                        isLast={isLast}
                        source={v.image}
                        width={64}
                        height={64}
                      />
                      <Text style={{textAlign: 'center'}}>{v.name}</Text>
                    </MainFollowContainer>
                  );
                })}
              </MainHorizontalScroll>
            </MainSectionContainer>

            <MainSectionContainer isFirst={false}>
              <MainSectionTitle title={this.lang.main.playVote} />
              <MainHorizontalScroll>
                {mockData.map((v, k) => {
                  const isLast = mockData.length == k + 1;
                  return (
                    <MainFollowContainer index={k}>
                      <CircleImage
                        isLast={isLast}
                        source={v.image}
                        width={64}
                        height={64}
                      />
                      {/* <Text style={{textAlign: 'center'}}>{v.name}</Text> */}
                    </MainFollowContainer>
                  );
                })}
              </MainHorizontalScroll>
            </MainSectionContainer>

            <MainSectionContainer isFirst={false}>
              <MainSectionTitle title={this.lang.main.starRanking} />
              <MainHorizontalScroll>
                {mockData.map((v, k) => {
                  const isLast = mockData.length == k + 1;
                  return (
                    <MainFollowContainer index={k}>
                      <CircleImage
                        isLast={isLast}
                        source={v.image}
                        width={64}
                        height={64}
                      />
                      <Text style={{textAlign: 'center'}}>{v.name}</Text>
                    </MainFollowContainer>
                  );
                })}
              </MainHorizontalScroll>
            </MainSectionContainer>

            <MainSectionContainer isFirst={false}>
              <MainSectionTitle title={this.lang.main.suppotersRanking} />
              <MainHorizontalScroll>
                {mockData.map((v, k) => {
                  const isLast = mockData.length == k + 1;
                  return (
                    <MainFollowContainer index={k}>
                      <CircleImage
                        isLast={isLast}
                        source={v.image}
                        width={64}
                        height={64}
                      />
                      <Text style={{textAlign: 'center'}}>{v.name}</Text>
                    </MainFollowContainer>
                  );
                })}
              </MainHorizontalScroll>
            </MainSectionContainer>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  wrapper: {
    paddingTop: 16,    
    backgroundColor: '#fff',
  },
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
