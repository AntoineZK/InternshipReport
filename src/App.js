import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Remerciements, Plan, Introduction, Développement, Conclusion } from './pages/Pages'

function App() {
	const [isOpen, setIsOpen] = React.useState(false);


	const toggle = () => {
		setIsOpen(!isOpen);
	};

  	return (
    	<Router>
      	<div>
			<SideBar isOpen={isOpen} toggle={toggle}/>
			<Navbar toggle={toggle}/>
			<Routes>
				<Route path='/InternshipReport' element={<Home/>} />
				<Route path='/InternshipReport/Plan' element={<Plan/>} />
				<Route path='/InternshipReport/Remerciements' element={<Remerciements/>} />
				<Route path='/InternshipReport/Introduction' element={<Introduction/>} />
				<Route path='/InternshipReport/Développement' element={<Développement/>} />
				<Route path='/InternshipReport/Conclusion' element={<Conclusion/>} />
			</Routes>
		</div>
		</Router>
	);
}

export default App;
