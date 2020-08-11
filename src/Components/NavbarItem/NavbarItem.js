import React from 'react';

const NavbarItem = (props) =>(
    <li className="nav-item">
        <a className={props.active ? "nav-link active" : "nav-link"} aria-current="page" href={props.target}>{props.name}</a>
    </li>
)

export default NavbarItem;