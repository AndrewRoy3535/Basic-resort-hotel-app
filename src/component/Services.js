import React, { Component } from 'react'
import Title from './Title'
import { ImPhone, ImLocation, ImHeart, ImPushpin } from "react-icons/im";
export default class Services extends Component {

    state={
        services: [
            {
                icon: <ImPhone/>,
                title: "Always aviable",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nostrum.",
            },
            {
                icon: <ImLocation/>,
                title: "Anywhere",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nostrum.",
            },
            {
                icon: <ImHeart/>,
                title: "With love",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nostrum.",
            },
            {
                icon: <ImPushpin/>,
                title: "Remembering",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nostrum.",
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
