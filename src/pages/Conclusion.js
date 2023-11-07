import React, { useEffect } from 'react'
import { NextPages } from '../components/Components';
import Report from '../assets/internship_report.pdf'
import Ppt from '../assets/soutenance.pptx'
import './Style.css'

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/BusinessIntelligence' },
    { style: { color: 'grey', cursor: 'default' }, link: '/InternshipReport/EasterEgg' },
];

const Concl = `
Ce stage de six mois fut une bonne expérience pour découvrir le monde du
travail dans sa globalité que ce soit autant dans les points positifs que dans les
points négatifs.

Faire partie de deux équipes très accueillantes et très dynamiques m'a
permis de me sentir rapidement plus à l'aise que je ne l'aurais pensé, de plus les
conditions de ce travail étaient très bonnes, pas de manque notable lorsque j'étais
sur place pour travailler.

J'ai, grâce à ce stage, développé des compétences que je n'avais pas ou que
je ne maîtrisais que très peu, notamment en échangeant avec des professionnels
des différents métiers au sein même de PwC. En utilisant des outils que je ne
connaissais que de nom pour la réalisation de mes différents projets, j’ai renforcé
mes points forts en découvrant des mécaniques qui m'étaient inconnues et qui vont
m’être utiles par la suite.

De plus, j'ai pu comprendre l'importance de l'organisation que ce soit en
équipe ou seul, autant pour gérer les différents environnements de travail que pour
optimiser mon planning.

Les projets, auxquels j'ai participé, cherchaient à répondre aux problématiques
actuelles liées notamment aux données, ce qui a pu me permettre de mieux
comprendre les problèmes de notre monde à l'heure actuelle.

PricewaterhouseCoopers cherche constamment à innover notamment dans le
secteur des données et dans des secteurs plus généraux.

Pour finir, ce stage m’a apporté une première expérience dans le monde du
travail. J’ai pu mettre en pratique mes connaissances et en acquérir d’autres dans
le domaine de l’informatique.`

const Conclusion = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <main>
                <h1 className='title'>Conclusion</h1>
                <p className='conclusion'>{Concl}</p>
                <div className='conclusion-link'>
                    <a className='report' href={Report} download>Téléchargez mon Rapport de Stage</a>
                    <br />
                    <br />
                    <a className='ppt' href={Ppt} download>Téléchargez mon Powerpoint sur ma Soutenance de Stage</a>
                </div>
                <div className='notation'>
                    <h2 className='title'>Notation</h2>

                    <p className='notation-text'>Le rapport de stage est noté sur 20.</p>
                    <p className='notation-text'>La soutenance de stage est notée sur 20.</p>
                    <p className='notation-text'>La note de l'entreprise est notée sur 20.</p>
                    <p className='notation-text'>La note finale est la moyenne des trois notes précédentes.</p>
                    <p className='notation-text'>Mes notes sont les suivantes :</p>
                    <ul>
                        <li className='notation-value-1'>Rapport de Stage : 17/20</li>
                        <li className='notation-value-2'>Soutenance de Stage : 13.5/20</li>
                        <li className='notation-value-3'>Note de l'entreprise : 17.5/20</li>
                        <li className='notation-value-4'>Note finale : 16/20 | Grade : A</li>
                    </ul>

                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    );q
}

export default Conclusion