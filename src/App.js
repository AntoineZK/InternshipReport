import React from 'react';
import './App.css';
import { Footer, NavBar } from './components/Components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Remerciements, Plan, Glossaire, Introduction, Entreprise, Teams, DataScience, BusinessIntelligence, Conclusion } from './pages/Pages'
import EasterEgg from './pages/EasterEgg';

function App() {
	const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<Router>
			<div>
				<NavBar handleClick={handleClick} closeMobileMenu={closeMobileMenu} click={click} />
				<Routes>
					<Route path='/InternshipReport' element={<Home closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Remerciements' element={<Remerciements closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Plan' element={<Plan closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Glossaire' element={<Glossaire closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Introduction' element={<Introduction closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Entreprise' element={<Entreprise closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Teams' element={<Teams closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/DataScience' element={<DataScience closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/BusinessIntelligence' element={<BusinessIntelligence closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/Conclusion' element={<Conclusion closeMobileMenu={closeMobileMenu} />} />
					<Route path='/InternshipReport/EasterEgg' element={<EasterEgg closeMobileMenu={closeMobileMenu} />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
