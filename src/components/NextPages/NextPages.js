import React from 'react'
import './Style.css'
import { NavLink as Link } from 'react-router-dom';

const Start = ({ closeMobileMenu, TwoLink }) => {
    return (
        <div className='two-link'>
            <i className="fa-solid fa-angle-left fa-3x" style={TwoLink[0].style}></i>
            <i className="fa-solid fa-ellipsis-vertical fa-3x" style={{color: 'blue'}}></i>
            <Link style={TwoLink[1].style} to={TwoLink[1].link} onClick={closeMobileMenu}>
                <i className="fa-solid fa-angle-right fa-3x"></i>
            </Link>
        </div>
    )
}

const Middle = ({ closeMobileMenu, TwoLink }) => {
    return (
        <div className='two-link'>
            <Link style={TwoLink[0].style} to={TwoLink[0].link} onClick={closeMobileMenu}>
                <i className="fa-solid fa-angle-left fa-3x"></i>
            </Link>
            <i className="fa-solid fa-ellipsis-vertical fa-3x" style={{color: 'blue'}}></i>
            <Link style={TwoLink[1].style} to={TwoLink[1].link} onClick={closeMobileMenu}>
                <i className="fa-solid fa-angle-right fa-3x"></i>
            </Link>
        </div>
    )
}

const End = ({ closeMobileMenu, TwoLink }) => {
    return (
        <div className='two-link'>
            <Link style={TwoLink[0].style} to={TwoLink[0].link} onClick={closeMobileMenu}>
                <i className="fa-solid fa-angle-left fa-3x"></i>
            </Link>
            <i className="fa-solid fa-ellipsis-vertical fa-3x" style={{color: 'blue'}}></i>
                <i className="fa-solid fa-angle-right fa-3x" style={TwoLink[1].style}></i>
        </div>
    )
}

const NextPages = ({ closeMobileMenu, TwoLink, Status }) => {
    let button;
    if (Status === 1) {
        button = <Start closeMobileMenu={closeMobileMenu} TwoLink={TwoLink}/>
    } else if (Status === 2) {
        button = <Middle closeMobileMenu={closeMobileMenu} TwoLink={TwoLink}/>
    } else {
        button = <End closeMobileMenu={closeMobileMenu} TwoLink={TwoLink}/>
    }
    return (
        <div>
            {button}
        </div>
    )
}

export default NextPages