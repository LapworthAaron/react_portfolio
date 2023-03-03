import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="progGallery"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Project Gallery
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="skills"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Skills
            </NavLink>
            </li>
        </ul>
    );
}

export default Header;
