import React, {Component} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginPresenter} from "../presenter/login.presenter";
import {Text, View} from "react-native";
import { MainPresenter } from "../presenter/main.presenter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export class MainNavigator extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

    }


    render() {
        const Tab = createBottomTabNavigator();
        
        return (
             <Tab.Navigator initialRouteName="Main">
                 <Tab.Screen name='Main' component={MainPresenter}/>
             </Tab.Navigator>
        );
    }
}