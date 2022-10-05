import React from 'react';
import './style.css'

const manager = 'Je tiens à remercier particulièrement mon manager, Monsieur Éric FRANÇOIS pour'
manager += ' m’avoir permis de réaliser ce stage chez PWC Luxembourg et de s’être rendu disponible'
manager += 'durant pour m’avoir prodigué de nombreux conseils tout au long de mon stage.'

const Remerciements = () => {
    return (
        <div>
            <p className='p-manager'></p>
        </div>
    );
};

export default Remerciements;
