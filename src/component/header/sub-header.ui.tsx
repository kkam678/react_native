import {Component} from "react";
import {LoginViewModel} from "../../../application/view-model/login.view-model";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

interface IProps {
    titleTop: string,
    titleBottom: string
}

export default class SubHeader extends Component<IProps, any> {
    private readonly titleTop: string
    private readonly titleBottom: string

    constructor(props: IProps) {
        super(props)
        const {titleTop, titleBottom} = props
        this.titleTop = titleTop;
        this.titleBottom = titleBottom;
    }


    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.titleTop}</Text>
                <Text style={[styles.title, styles.textBold]}>{this.titleBottom}</Text>
                <View style={styles.subTitleWrap}>
                    <Text style={[styles.subTitle]}>아직 회원이 아니시라면?</Text>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>회원 가입하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 48,
    },
    title: {
        color: '#333',
        fontSize: 30,
    },
    subTitle: {

        marginTop: 20,
    },
    subTitleWrap: {
        fontSize: 12,
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonText: {
        marginLeft:4,
        color: '#FF8DA8',
        fontWeight:'bold',
    },
    textBold: {
        fontWeight: 'bold'
    }
})