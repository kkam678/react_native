import React, {Component} from "react";
import BaseSwiper from "../base-swiper.ui";



interface IProps {
    title: string    
}

export default class MainSwiper extends Component<any, any> {
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
            <></>
            // <BaseSwiper>{children}</BaseSwiper>
        )
    }
}