import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface IProps {
  title: string;
}

export default class MainHorizontalScroll extends Component<any, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 84,
  },
  scrollView: {},
});
