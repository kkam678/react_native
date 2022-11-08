import {width} from '@fortawesome/free-solid-svg-icons/faHome';
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface IProps {
  isLast: boolean;
  width: number;
  height: number;
}

export default class SquareImage extends Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {source, height, width} = this.props;
    return (
      <View style={[styles.container]}>
        <Image
          style={
            (styles.image,
            {
              width: width - 32,
              height: height,
              borderRadius: 15,
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
    marginBottom: 8,
  },
  last: {
    paddingRight: 16,
  },
  image: {
    resizeMode: 'cover',
  },
});
