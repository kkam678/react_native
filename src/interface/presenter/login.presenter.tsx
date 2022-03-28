import React from "react";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {ILoginViewModel} from "../../domain/use-case/ilogin.view-model.";
import {Container} from "typedi";
import {BasePresenter} from "./base.presenter";
import LoginForm from "../../framework/ui/login-form.ui";
import SubHeader from "../../framework/ui/header/sub-header.ui";


interface IState {
    account: string,
    password: string
}

export class LoginPresenter extends BasePresenter<any, IState> {
    private readonly viewModel: ILoginViewModel

    constructor(props: any) {
        super(props);
        console.log(123)
        this.state = {
            account: '',
            password: '',
        }

        this.viewModel = Container.get('ILoginViewModel')
        // isDarkMode: Appearance.getColorScheme() === 'dark'
    }

    componentDidMount() {

    }

    handleChangeAccount = (newText: string) => {
        this.setState({
            'account': newText
        })
    }

    handleChangePassword = (newText: string) => {
        this.setState({
            'password': newText
        })
    }

    handleLogin = () => {
        this.viewModel.setAccount(this.state.account)
        this.viewModel.setPassword(this.state.password)
        this.viewModel.verifyAuthToken()
    }

    handleGoogleLogin = () => {

    }

    handleNaverLogin = () => {

    }

    handleKakaoLogin = () => {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <SubHeader
                    titleTop={this.lang.loginSubTitleTop}
                    titleBottom={this.lang.loginSubTitleBottom}
                />
                <LoginForm accountPlaceHolder={this.lang.inputAccount}
                           accountOnChangeText={this.handleChangeAccount}
                           passwordPlaceHolder={this.lang.inputPassword}
                           passwordOnChangeText={this.handleChangePassword}
                           buttonLabel={this.lang.doLogin}
                           handleLogin={this.handleLogin}
                           handleGoogleLogin={this.handleGoogleLogin}
                           handleNaverLogin={this.handleNaverLogin}
                           handleKakaoLogin={this.handleKakaoLogin}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:40,
        paddingHorizontal: 24,
        backgroundColor: '#fff'
    }
})