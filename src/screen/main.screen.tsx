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
import {inject, observer} from 'mobx-react';
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
import {VodDto} from '../dto/vod.dto';
import {FollowDto} from '../dto/follow.dto';

interface IState {
  account: string;
  password: string;
}

@inject('loginViewModel', 'mainViewModel')
@observer
export class MainScreen extends BaseScreen<any, IState> {
  private readonly viewModel: ILoginViewModel;
  private readonly mainViewModel: MainViewModel;

  constructor(props: any) {
    super(props);

    this.viewModel = props.loginViewModel;
    this.mainViewModel = props.mainViewModel;
    this.state = {
      account: '',
      password: '',
    };
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
                  <MainFollowContainer index={k} key={k}>
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
              {this.mainViewModel.live.map((v, k) => {
                return <VodMainList item={v} index={k} key={k} />;
              })}
            </ScrollView>
          </MainSectionContainer>
          <MainSectionContainer isFirst={false}>
            <MainSectionTitle title={this.lang.main.popularPictorialModel} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {this.mainViewModel.hotModel.map((v, k) => {
                return <ModelMainPopularList item={v} index={k} key={k} />;
              })}
            </ScrollView>
          </MainSectionContainer>

          <MainSectionContainer isFirst={false}>
            <MainSectionTitle title={this.lang.main.allModel} />
            <View style={{display: 'flex', flexWrap: 'wrap', width: '100%', flexDirection: 'row'}}>
              {this.mainViewModel.model.map((item, index) => {
                return <ModelList item={item} index={index} key={index} />;
              })}
            </View>
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
