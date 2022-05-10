import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {loginButton} from '../../../style/button.style';

interface IProps {
  onPress: any;
  label: string;
}

export default class LoginButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {onPress, label} = this.props;
    return (
      <>
        <TouchableOpacity style={loginButton.loginButton} onPress={onPress}>
          <Text style={loginButton.loginButtonText}>{label}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
