import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {loginButton, loginJoinButton} from '../../../style/button.style';

interface IProps {
  onPress: any;
  label: string;
}

export default class LoginJoinButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {onPress, label} = this.props;
    return (
      <>
        <TouchableOpacity>
          <Text style={loginJoinButton.linkText}>회원 가입하기</Text>
        </TouchableOpacity>
      </>
    );
  }
}
