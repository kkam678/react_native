import React, {Component} from "react";
import {
    TextInput,
} from "react-native";
import { input } from "../../../style/input.style";


interface IProps {
    placeholder: string
    onChangeText: any,
}

export default class LoginPassword extends Component<any, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            placeholder,
            onChangeText,
        } = this.props;
        return (
            <>
                <TextInput
                    textContentType={"password"}
                    secureTextEntry={true}
                    style={input.textInput}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
            </>
        )
    }
}