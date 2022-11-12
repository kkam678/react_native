import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ILoginViewModel} from '../view-model/ilogin.view-model.';
import {BaseScreen} from './base.screen';
import {inject} from 'mobx-react';
import MainSectionContainer from '../component/container/main/main-section-container.ui';
import MainSectionTitle from '../component/title/main/main-section-title.ui';
import MainSwiper from '../component/scroll/main/main-horizontal-scroll.ui';
import MainHorizontalScroll from '../component/scroll/main/main-horizontal-scroll.ui';
import CircleImage from '../component/image/circle-image.ui';
import MainFollowContainer from '../component/container/main/main-follow-container.ui';
import SquareImage from '../component/image/square-image.ui';
import MainVideoContainer from '../component/container/main/main-video-container.ui';
import {VodMainList} from '../component/list/vod-list';
import {ModelList} from '../component/list/model/model-list';
import {ModelMainPopularList} from '../component/list/model/model-main-popular-list';
import {MainViewModel} from '../view-model/main.view-model';

interface IState {
  account: string;
  password: string;
}

@inject('loginViewModel', 'mainViewModel')
export class MainScreen extends BaseScreen<any, IState> {
  private readonly viewModel: ILoginViewModel;
  private readonly mainViewModel: MainViewModel;

  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
    this.viewModel = props.loginViewModel;
    this.mainViewModel = props.mainViewModel;
    // isDarkMode: Appearance.getColorScheme() === 'dark'
  }

  async componentDidMount() {
    await this.mainViewModel.requestList();
  }

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
      {image: require('../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../assets/images/image4.jpeg'), name: '경리'},
      {image: require('../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../assets/images/image4.jpeg'), name: '경리'},
      {image: require('../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../assets/images/image4.jpeg'), name: '경리'},
      {image: require('../../assets/images/image2.jpeg'), name: '청하'},
      {image: require('../../assets/images/image3.jpeg'), name: '한채영'},
      {image: require('../../assets/images/image4.jpeg'), name: '경리'},
    ];
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          style={styles.wrapper}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <MainSectionContainer isFirst={true}>
            <MainHorizontalScroll>
              {mockData.map((v, k) => {
                const isLast = mockData.length == k + 1;
                return (
                  <MainFollowContainer index={k}>
                    <CircleImage isLast={isLast} source={v.image} width={64} height={64} />
                    <Text style={{textAlign: 'center'}}>{v.name}</Text>
                  </MainFollowContainer>
                );
              })}
            </MainHorizontalScroll>
          </MainSectionContainer>
          <MainSectionContainer isFirst={false}>
            <MainSectionTitle title={this.lang.main.liveBroadcast} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.mainViewModel.live.length > 0
                ? this.mainViewModel.live.map((v, k) => {
                    return <VodMainList item={v} index={k} />;
                  })
                : null}
            </ScrollView>
          </MainSectionContainer>
          <MainSectionContainer isFirst={false}>
            <MainSectionTitle title={this.lang.main.popularPictorialModel} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {mockData.map((v, k) => {
                return <ModelMainPopularList item={v} index={k} />;
              })}
            </ScrollView>
          </MainSectionContainer>
          <MainSectionContainer isFirst={false}>
            <MainSectionTitle title={this.lang.main.allModel} />

            <FlatList
              data={mockData}
              initialNumToRender={4}
              renderItem={({item, index}) => <ModelList item={item} index={index} />}
              keyExtractor={(item, index) => String(index)}
              numColumns={2}
            />
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
