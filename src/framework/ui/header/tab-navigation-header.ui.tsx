import {Component} from 'react';
import {LoginViewModel} from '../../../application/view-model/login.view-model';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TabNavigationAppendMenu from './tab-navigation-append-menu.ui';
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
        <TabNavigationAppendMenu>
        {/* <FontAwesomeIcon icon={faBell}/> */}
        </TabNavigationAppendMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
