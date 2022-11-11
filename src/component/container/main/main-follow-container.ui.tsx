import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {container} from '../../../style/container.style';

export default class MainFollowContainer extends Component<any, any> {
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
        marginLeft: 16,        
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    
});
