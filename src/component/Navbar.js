import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {Link} from "react-router-dom"
import { HiMenu } from "react-icons/hi"


export default class Navbar extends Component {

    state ={
        isOpen: false,
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo}/>
                        </Link>
                        <button 
                        type="button" 
                        className="nav-btn"
                        onClick={() => this.handleToggle()}>
                            <HiMenu className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav"
                        :"nav-links"}>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/rooms">ROOMS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}