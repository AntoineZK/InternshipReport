import React from 'react';
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Plan'},
    {style: {color: 'blue'}, link: '/InternshipReport/Développement'},
];

const Introduction = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Introduction</h1>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Introduction;
