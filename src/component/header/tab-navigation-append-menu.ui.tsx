import {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../style/color.config';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconOct from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
export default class TabNavigationAppendMenu extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <TouchableOpacity style={styles.button}>
            <IconFontisto name="bell" size={18} color={Color.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <IconFontAwesome5 name="coins" size={18} color={Color.yellow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <IconFontAwesome5 name="search" size={18} color={Color.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonLast]}
            onPress={this.props.onPressMypage}>
            <IconFontAwesome5 name="user" size={18} color={Color.black} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
