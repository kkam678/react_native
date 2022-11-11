import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {container} from '../../../style/container.style';

export default class MainVideoContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children, index} = this.props;
    return <View style={[styles.container]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
    container: {     
        padding:16,          
        width:'100%',
        overflow: 'hidden',
    },
    
});
