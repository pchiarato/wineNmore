import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return(
    <div className="header">
        <h3>Todo-App Build with React & Redux</h3>
        <nav className="nav-bar">
            <ul>
                <li className="nav-link">
                    <NavLink to="/todo" activeClassName="active">TODO-APP</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/blog" activeClassName="active">BLOG-API</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    );
}


export default Header;