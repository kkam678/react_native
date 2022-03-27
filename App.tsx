/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {LoginNavigator} from "./src/interface/navigator/login.navigator";
import BaseInjection from "./src/config/base.injection";
import {Provider} from "mobx-react";
import LoginStore from "./src/interface/store/login.store";
import RootStore from "./src/interface/store/root.store";
import {Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput} from "react-native";
import SubHeader from "./src/framework/ui/header/sub-header.ui";


interface IProps {

}

interface IState {

}




class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        BaseInjection()
    }


    componentDidMount() {

    }
    render() {
        const rootStore = new RootStore();
        return (
            <Provider {...rootStore}>
                <NavigationContainer>
                    <LoginNavigator/>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App;
