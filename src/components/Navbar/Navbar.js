import React from 'react'

import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    const {name} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-4">
            <a className="navbar-brand">{ name }</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact/add" >Add </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about" >About </Link>
                    </li>
                </ul>
        </nav>
    )
}

Navbar.propTypes = {
    name: PropTypes.string.isRequired
}

export default Navbar;