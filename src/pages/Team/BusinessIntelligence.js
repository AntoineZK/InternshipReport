import React from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'grey'}, link: '/'},
];

const BusinessIntelligence = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Business Intelligence</h1>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default BusinessIntelligence