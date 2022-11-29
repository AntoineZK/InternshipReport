import React, { useEffect } from 'react'
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/BusinessIntelligence' },
    { style: { color: 'grey', cursor: 'default' }, link: '/InternshipReport/EasterEgg' },
];

const Concl = `Ce stage de 6 mois fut une bonne experience pour decouvrir le monde du travail dans sa globalite que ce soit autant dans les points positifs que dans les points
negatif. Faire partie de deux equipes tres accueillante et dynamique m'a permit de me sentir plus rapidement a l'aise que je ne l'aurais pu penser, de plus les conditions de
travails etait tres bonne pas de manque notable lorsque j'etais sur place pour travailler.

J'ai pu grace a ce stage, developper des competences que je n'avais pas ou que je ne maitrisais que tres peu notamment en devant discuter avec des professionels de different
metier au sein meme de PwC et en utilisant des outils que je ne connaissais que de nom pour la realisation de mes differents projet, tout en renforcant mes points forts en decouvrant
des mecaniques que je ne connaissais pas et qui je suis sur me sauront utiles par la suite. De plus j'ai pu commprendre l'importance de l'organisation que ce soit en equipe ou seul,
autant pour gerer les differents environnement de travails que pour optimiser mon planning.

La seule chose sur laquelle je pourrais dire quelque chose de negatif serait sur le manque de flexibilite sur la presence de tele-travail lors des jours de greve.

Les projets auxquels j'ai participer ont cherché/cherche à repondre aux problematique actuelle liée notamment aux données ce qui a pu me permettre de comprendre mieux les problemes
de notre monde a l'heure actuelle.

PriceWaterhouseCoopers cherche constamment a s'innover notamment dans le secteurs des données et dans des secteurs plus generaux
En conclusion j'ai envie de dire que ce stage fut dans sa globalité fut une bonne experience pour apprendre de multiples choses tout en m'ameliorant sur tous les points que ce soit
technique ou social
`

const Conclusion = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <main>
                <h1 className='title'>Conclusion</h1>
                <p className='paragraph'>{Concl}</p>
                <a href="/pwc.png" download>Download my Resume!</a>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    );
}

export default Conclusion