import React, {Component} from "react";
import {Button, ScrollView, Text, TextInput} from "react-native";


interface IProps {
    accountPlaceHolder: string
    accountOnChangeText: any,
    passwordPlaceHolder: string,
    passwordOnChangeText: any,
    buttonLabel: string,
    buttonOnPress:void,
}

export default class LoginForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            accountPlaceHolder,
            accountOnChangeText,
            passwordPlaceHolder,
            passwordOnChangeText,
            buttonLabel,
            buttonOnPress
        } = this.props;
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >


                <TextInput
                    style={{
                        height: 40
                    }}
                    textContentType={"username"}
                    placeholder={accountPlaceHolder}
                    onChangeText={accountOnChangeText}
                />
                <TextInput
                    textContentType={"password"}
                    secureTextEntry={true}
                    style={{
                        height: 40
                    }}
                    placeholder={passwordPlaceHolder}
                    onChangeText={passwordOnChangeText}
                />
                <Button
                    title={buttonLabel}
                    onPress={buttonOnPress}
                />
            </ScrollView>
        )
    }
}