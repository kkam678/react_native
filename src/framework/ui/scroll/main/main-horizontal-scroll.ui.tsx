import React, {Component} from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



interface IProps {
    title: string    
}

export default class MainHorizontalScroll extends Component<any, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            children,            
        } = this.props;
        return (
            <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >{children}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:-16
    }
})