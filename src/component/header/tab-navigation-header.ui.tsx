import {Component} from 'react';
import {LoginViewModel} from '../../../application/view-model/login.view-model';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TabNavigationAppendMenu from './tab-navigation-append-menu.ui';
import fontawesome from '@fortawesome/fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
export default class TabNavigationHeader extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children} = this.props;
    return (
      <View>
        {children}
      </View>
    );
  }
}


