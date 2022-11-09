import {Component} from 'react';
import {LoginViewModel} from '../../../application/view-model/login.view-model';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Color} from '../../style/color.config';
import {LoginNavigator} from '../../../interface/navigator/login.navigator';

export default class TabNavigationAppendMenu extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log('this.props', this.props);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={['far', 'bell']} style={styles.bell} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={['fas', 'coins']} style={styles.coins} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={['fas', 'search']} style={styles.search} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonLast]}
            onPress={this.props.onPressMypage}>
            <FontAwesomeIcon icon={['far', 'user']} style={styles.search} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingLeft: 32,
  },
  buttonLast: {
    paddingRight: 16,
  },

  bell: {
    color: Color.mainColor,
  },
  coins: {
    color: Color.yellow,
  },
  search: {
    color: Color.mainColor,
  },
});
