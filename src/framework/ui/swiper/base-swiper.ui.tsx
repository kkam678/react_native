import React, {Component} from "react";
import Swiper from "react-native-swiper";


interface IProps {
    title: string    
}

export default class BaseSwiper extends Component<any, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {
            children,
        } = this.props;
        console.log(children)
        return (
            <></>
            // <Swiper showsButtons={true}>{children}</Swiper>
        )
    }
}