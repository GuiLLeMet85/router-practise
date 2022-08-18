import React from "react"; 
import {NavLink} from 'react-router-dom';

export default function Navbar () {

    return (
        <div>
            <ul>
                <li><NavLink className={(element) => element.isActive ? 'selected' : '' } to="/">Home</NavLink></li>
                <li><NavLink className= {(element)=> element.isActive ? 'selected' : '' } to="contact">Contact</NavLink></li>
                <li><NavLink className={(element) => element.isActive ? 'selected' : '' } to="projects">Projects</NavLink></li>
            </ul>
        </div>
    )

}