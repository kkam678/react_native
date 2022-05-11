import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPresenter} from '../presenter/login.presenter';
import {Image, ImageComponent, Text, View} from 'react-native';
import {MainPresenter} from '../presenter/main.presenter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import TabBarHome from '../../../assets/images/tab-bar-home.svg';
import TabBarVote from '../../../assets/images/tab-bar-vote.svg';
import TabBarGallery from '../../../assets/images/tab-bar-gallery.svg';
import TabBarNft from '../../../assets/images/tab-bar-nft.svg';
import TabBarShop from '../../../assets/images/tab-bar-shop.svg';
import styled from 'styled-components/native';
export class MainNavigator extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const Tab = createBottomTabNavigator();
    const HomeIcon = styled(TabBarHome)<{color: string}>`
      color: color;
      width: 24;
      height: 24;
    `;
    const VoteIcon = styled(TabBarVote)<{color: string}>`
      color: color;
      width: 24;
      height: 24;
    `;
    const GalleryIcon = styled(TabBarGallery)<{color: string}>`
      color: color;
      width: 24;
      height: 24;
    `;
    const NftIcon = styled(TabBarNft)<{color: string}>`
      color: color;
      width: 24;
      height: 24;
    `;
    const ShopIcon = styled(TabBarShop)<{color: string}>`
      color: color;
      width: 24;
      height: 24;
    `;
    return (
      <Tab.Navigator
        initialRouteName="MAIN"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconColor = focused ? '#8b4d93' : '#333';
            if (route.name === 'MAIN') {
              return <HomeIcon color={iconColor} />;
            } else if (route.name === 'VOTE') {
              return <VoteIcon color={iconColor} />;
            } else if (route.name === 'GALLERY') {
              return <GalleryIcon color={iconColor} />;
            } else if (route.name === 'NFT') {
              return <NftIcon color={iconColor} />;
            } else {
              return <ShopIcon color={iconColor} />;
            }
          },
          tabBarActiveTintColor: '#8b4d93',
          tabBarInactiveTintColor: '#d3d3d3',
        })}>
        <Tab.Screen
          name="MAIN"
          component={MainPresenter}
          options={{
            headerTitle: props => (
              <View>
                <Image
                  style={{width: 96, height: 21}}
                  source={require('../../../assets/images/logo.png')}
                />
              </View>
            ),
            //   headerStyle: {
            //     backgroundColor: '#f4511e',
            //   },
            //   headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
        <Tab.Screen name="VOTE" component={MainPresenter} />
        <Tab.Screen name="GALLERY" component={MainPresenter} />
        <Tab.Screen name="NFT" component={MainPresenter} />
        <Tab.Screen name="SHOP" component={MainPresenter} />
      </Tab.Navigator>
    );
  }
}
