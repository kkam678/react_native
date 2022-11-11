import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {lostButton} from '../../../style/button.style';

interface IProps {}

export default class LoginLostButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {} = this.props;
    return (
      <>
        <TouchableOpacity style={lostButton.lostButtonTextWrap}>
          <Text style={lostButton.lostButtonText}>아이디 비밀번호</Text>
          <Text>가 기억나지 않으세요?</Text>
        </TouchableOpacity>
      </>
    );
  }
}
