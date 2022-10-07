import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Remerciements, Plan, Introduction, Développement, Conclusion } from './pages/Pages'

function App() {
  	return (
    	<Router>
      	<div>
			<Navbar />
			<Routes>
				<Route path='/InternshipReport' element={<Home/>} />
				<Route path='/InternshipReport/Plan' element={<Plan/>} />
				<Route path='/InternshipReport/Remerciements' element={<Remerciements/>} />
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
