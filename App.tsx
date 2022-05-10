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
import RootStore from "./src/interface/store/root.store";
import { MainNavigator } from './src/interface/navigator/main.navigator';


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
                    <MainNavigator/>
                </NavigationContainer>
                {/* <NavigationContainer>                           
                    <LoginNavigator/>
                </NavigationContainer> */}
            </Provider>
        )
    }
}

export default App;
