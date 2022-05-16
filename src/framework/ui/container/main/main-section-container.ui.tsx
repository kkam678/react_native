import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {container} from '../../../style/container.style';

interface iProps{
  isFirst: boolean,
}
export default class MainSectionContainer extends Component<iProps, any> {
  constructor(props: iProps) {
    super(props);    
  }

  componentDidMount() {}

  render() {
    const {children, isFirst = false} = this.props;
    return <View style={[styles.container, isFirst == false ? styles.fromSecond : null]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 16,
  },
  fromSecond:{
    marginTop:32,    
  }
})
