import React, { useState } from 'react';
import './Style.css';
import { NavLink as Link } from 'react-router-dom';

const MenuItems = [
    {title: 'DataScience', path: '/InternshipReport/DataScience', cName: 'dropdown-link'},
    {title: 'BusinessIntelligence', path: '/InternshipReport/BusinessIntelligence', cName: 'dropdown-link'},
];

function DropDown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                );
                })}
            </ul>
        </>
    );
}

export default DropDown;