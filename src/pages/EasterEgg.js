import React, { useEffect } from 'react'
import Countdown from 'react-countdown';
import './Style.css'

const EasterEgg = () => {
    let date = new Date('Mon Dec 19 2022 16:30:00 GMT+01')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title' style={{marginBottom: '3vh'}}>La Fin de L'Enfer dans <i className="fa-regular fa-clock"></i></h1>
                    <Countdown
                        date={date}
                        renderer={({ days, hours, minutes, seconds, milliseconds }) => {
                            return (
                                <div>
                                    <p className='days'>{days} Jours, {hours} Heures, {minutes} Minutes, {seconds} Secondes</p>
                                    <p className='hours'>Soit l'équivalent de : {(24 * days) + hours} Heures</p>
                                    <p className='minutes'>Ou l'équivalent de : {(((24 * 60) * days) + 60 * hours) + minutes} Minutes</p>
                                    <p className='seconds'>Enfin l'équivalent de : {(86400 * days) + (3600 * hours) + (60 * minutes) + seconds} Secondes</p>
                                </div>
                            );
                        }} />
            </main>
        </div>
    )
}

export default EasterEgg;