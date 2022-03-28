import React, {Component} from "react";
import {
    Button, Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import Svg, {WithLocalSvg} from "react-native-svg/lib/typescript";


interface IProps {
    accountPlaceHolder: string
    accountOnChangeText: any,
    passwordPlaceHolder: string,
    passwordOnChangeText: any,
    buttonLabel: string,
    handleLogin: void,
    handleGoogleLogin: void,
    handleNaverLogin: void,
    handleKakaoLogin: void,
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
            handleLogin,
            handleGoogleLogin,
            handleNaverLogin,
            handleKakaoLogin,
        } = this.props;
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >


                <TextInput
                    style={styles.textInput}
                    textContentType={"username"}
                    placeholder={accountPlaceHolder}
                    onChangeText={accountOnChangeText}
                />
                <TextInput
                    textContentType={"password"}
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder={passwordPlaceHolder}
                    onChangeText={passwordOnChangeText}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText}>{buttonLabel}</Text>
                </TouchableOpacity>
                {/*<View style={styles.snsButtonWrap}>*/}
                {/*    <Pressable style={styles.snsButton}*/}
                {/*               onPress={handleGoogleLogin}*/}
                {/*    >*/}
                {/*        <Text>구글</Text>*/}
                {/*        /!*<Image source={require('../../../assets/images/icon-naver.svg')} style={styles.snsButtonImage}/>*!/*/}
                {/*    </Pressable>*/}
                {/*    <Pressable style={styles.snsButton}*/}
                {/*               onPress={handleNaverLogin}*/}
                {/*    >*/}
                {/*        <Text>네이버</Text>*/}
                {/*        /!*<Image source={require('../../../assets/images/icon-naver.svg')} style={styles.snsButtonImage}/>*!/*/}
                {/*    </Pressable>*/}
                {/*    <Pressable style={styles.snsButton}*/}
                {/*               onPress={handleKakaoLogin}*/}
                {/*    >*/}
                {/*        <Text>카카오</Text>*/}
                {/*        /!*<Image source={require('../../../assets/images/icon-kakao.svg')} style={styles.snsButtonImage}/>*!/*/}
                {/*    </Pressable>*/}
                {/*</View>*/}
                <View style={styles.lostButtonWrap}>
                    <TouchableOpacity style={styles.lostButtonTextWrap}>
                        <Text style={styles.lostButtonText}>
                            아이디 비밀번호
                        </Text>
                        <Text>가 기억나지 않으세요?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 12,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'transparent',
        height: 50,
    },
    loginButton: {
        marginTop: 48,
        backgroundColor: '#FF8DA8',
        borderRadius: 12,
    },
    loginButtonText: {
        color: '#fff',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    snsButtonWrap: {
        backgroundColor: '#ff0000',
        marginTop: 48,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    snsButton: {
        margin: 8,
        flex: 3,
        backgroundColor: '#00ff00',
        width: 48,
        height: 48,
    },
    snsButtonImage: {
        width: 300,
        height: 300,
    },
    lostButtonWrap: {
        marginTop: 48,
    },
    lostButtonTextWrap: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: '#eee',
        fontSize: 12,
    },
    lostButtonText: {
        color: '#FF8DA8',
        fontWeight: 'bold',
    },
})