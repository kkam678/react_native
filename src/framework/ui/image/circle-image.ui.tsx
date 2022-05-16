import {width} from '@fortawesome/free-solid-svg-icons/faHome';
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
    const {source, width, height, isLast} = this.props;
    return (
      <View style={[styles.container]}>
        <Image
          style={
            (styles.image,           
            {
              width: width,
              height: height,
              borderRadius: width / 2,
            })
          }
          source={source}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  last: {
    paddingRight: 16,
  },
  image: {
    resizeMode: 'cover',
  },
});
