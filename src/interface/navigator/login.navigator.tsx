import React, {Component} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginPresenter} from "../presenter/login.presenter";
import {Text, View} from "react-native";


export class LoginNavigator extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }


    render() {
        const Stack = createNativeStackNavigator();
        return (

             <Stack.Navigator initialRouteName="Login">
                 <Stack.Screen name='Login' component={LoginPresenter} options={{ title: '로그인' }}/>
             </Stack.Navigator>
        );
    }
}