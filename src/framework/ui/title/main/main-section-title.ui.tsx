import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Color } from "../../../style/color.config";
import { FontFamily } from "../../../style/font-family.config";
import { FontSize } from "../../../style/font-size.config";


interface IProps {
    title: string    
}

export default class MainSectionTitle extends Component<any, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            title,
        } = this.props;
        return (
            <View style={styles.wrap}>
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap:{
        
    },
    title: {
        color: Color.black,
        fontFamily: FontFamily.title,
        fontSize: FontSize.sectionTitle,
        marginBottom: 16,
    }
});