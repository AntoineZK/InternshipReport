import React from 'react';
import './App.css';
// import Navbar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar2/NavBar2';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Remerciements, Plan, Introduction, Développement, Conclusion } from './pages/Pages'

function App() {
	const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
    	<Router>
      	<div>
			<NavBar2/>
			{/* <Navbar handleClick={handleClick} closeMobileMenu={closeMobileMenu} click={click} /> */}
			<Routes>
				<Route path='/InternshipReport' element={<Home closeMobileMenu={closeMobileMenu} />} />
				<Route path='/InternshipReport/Remerciements' element={<Remerciements closeMobileMenu={closeMobileMenu} />} />
				<Route path='/InternshipReport/Plan' element={<Plan closeMobileMenu={closeMobileMenu} />} />
				<Route path='/InternshipReport/Introduction' element={<Introduction/>} />
				<Route path='/InternshipReport/Développement' element={<Développement/>} />
				<Route path='/InternshipReport/Conclusion' element={<Conclusion/>} />
			</Routes>
			<Footer/>
		</div>
		</Router>
	);
}

export default App;
