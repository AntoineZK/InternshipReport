import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Remerciements, Plan, Introduction, Développement, Conclusion } from './pages/Pages'

function App() {
	//Back 
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setData(data.message));
	}, []);
	// End Back
	const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
    	<Router>
      	<div>
			<Navbar handleClick={handleClick} closeMobileMenu={closeMobileMenu} click={click} />
			<Routes>
				<Route path='/InternshipReport' element={<Home closeMobileMenu={closeMobileMenu} />} />
				<Route path='/InternshipReport/Plan' element={<Plan/>} />
				<Route path='/InternshipReport/Remerciements' element={<Remerciements data={data}/>} />
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
