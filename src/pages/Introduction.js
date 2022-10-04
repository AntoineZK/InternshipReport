import React from 'react';
import PwC_Logo from '../assets/pwc.png'
import './style.css'
import { DisplayImage } from './styled';

const Introduction = () => {
	return (
		<div>
			<h1 style={{
				textAlign: 'center',
				height: '20vh',
				color: 'orange',
				fontWeight: 'bolder'
			}}>Rapport de stage</h1>
			<DisplayImage>
				<img src={PwC_Logo} alt="cur" width={300} height={300}/>
			</DisplayImage>
		</div>
	);
};

export default Introduction;
