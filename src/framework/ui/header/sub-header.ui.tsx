import {Component} from "react";
import {LoginViewModel} from "../../../application/view-model/login.view-model";
import {Text, View} from "react-native";
import React from "react";

interface IProps {
    title: string
}

export default class SubHeader extends Component<IProps, any>{
    private readonly title: string
    constructor(props: IProps) {
        super(props)
        const {title} = props
        this.title = title;
    }


    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Text>{this.title}</Text>
            </View>
        )
    }
}