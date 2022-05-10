import React, {Component} from "react";
import {
    TextInput,
} from "react-native";
import { input } from "../../../style/input.style";


interface IProps {
    placeholder: string
    onChangeText: any,
}

export default class LoginAccount extends Component<any, any> {
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
                    style={input.textInput}
                    textContentType={"username"}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
            </>
        )
    }
}