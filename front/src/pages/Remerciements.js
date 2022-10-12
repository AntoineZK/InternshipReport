import React from 'react';
import './Style.css'

// const manager = 
// `Je tiens à remercier particulièrement mon manager,
// Monsieur Éric FRANÇOIS pour m’avoir permis de réaliser ce stage chez PWC Luxembourg et 
// de s’être rendu disponible durant pour m’avoir prodigué de nombreux conseils tout au long de mon stage.`

// const teams = 
// `Je tiens à remercier également toute l’équipe DataMining ainsi que Data Services
// pour m’avoir transmis leurs connaissances et guidé dans la réalisation de mes tâches
// ainsi que pour leur aide, leur sympathie et pour m’avoir aidé à m’intégrer à l’entreprise.`

// const epitech = 
// `Pour finir, j’aimerais remercier EPITECH Nancy et toute l’équipe pédagogique pour la
// qualité de leur enseignement qui a grandement contribué au bon déroulement de mon stage.`

const Remerciements = ({data}) => {
    return (
        <div>
            <h1 className='center-text' style={{
                color: 'orange',
                marginTop: '15vh',
                fontSize: 45
                }}>Remerciements</h1>
                    <p className='p-manager'>{data}</p>
            {/* <p className='p-teams'>{teams}</p> */}
            {/* <p className='p-epitech'>{epitech}</p> */}
        </div>
    );
};

export default Remerciements;
