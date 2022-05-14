import {width} from '@fortawesome/free-solid-svg-icons/faHome';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface IProps {
  isLast: boolean;
  width: number;
  height: number;
}

export default class CircleImage extends Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children, isLast, width, height} = this.props;
    return (
      <View
        style={[
          styles.container,
          isLast ? styles.last : null,
          {
            width: width,
            height: height,
            borderRadius: width / 2,
          },
        ]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    overflow: 'hidden',
  },
  last: {
    marginRight: 16,
  },
});
