import React, {Component} from 'react';
import {View} from 'react-native';
import {container} from '../../../style/container.style';

export default class MainSectionContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {children} = this.props;
    return <View>{children}</View>;
  }
}
