import React, {Component} from "react";
import {
    ScrollView,
} from "react-native";



interface IProps {

}

export default class LoginForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            children
        } = this.props;
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                {children}
            </ScrollView>
        )
    }
}