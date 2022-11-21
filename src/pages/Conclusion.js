import React, { useEffect } from 'react'
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/BusinessIntelligence' },
    { style: { color: 'grey', cursor: 'default' }, link: '/InternshipReport/EasterEgg' },
];

const Conclusion = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <main>
                <h1 className='title'>Conclusion</h1>
                <a href="/pwc.png" download>Download my Resume!</a>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    );
}

export default Conclusion