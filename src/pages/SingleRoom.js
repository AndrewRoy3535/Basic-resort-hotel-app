import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'


export default class SingleRoom extends Component {

    constructor(props){
        super(props);
        // console.log(this.props)
        this.state={
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    //this is going work as the constructor
    // componentDidMount(props){
    //     console.log(this.props)
    // }

    static contextType = RoomContext;

    render() {

        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        // console.log(room)
        if(!room) {
            return(
                <div className="error">
                    <h3>No such room avaiable</h3>
                    <Link to="/rooms" className="btn-primary">
                        Go back to Rooms
                    </Link>
                </div>
            );
        }

        const {
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breakfast, 
            pets, 
            images} = room
        return (
            <Hero hero='roomsHero'>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
        );
    };
};
