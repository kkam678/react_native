import {Component} from 'react';
import {LoginViewModel} from '../../../application/view-model/login.view-model';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default class TabNavigationAppendMenu extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children} = this.props;
    return <View>{children}</View>;
  }
}

const styles = StyleSheet.create({});
