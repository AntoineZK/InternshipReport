import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  	return (
    	<Router>
      	<div>
			<Navbar />
			<Routes>
				<Route path='/InternshipReport' element={<Home/>} />
				<Route path='/InternshipReport/about' element={<About/>} />
				<Route path='/InternshipReport/services' element={<Services/>} />
				<Route path='/InternshipReport/contact-us' element={<Contact/>} />
				<Route path='/InternshipReport/sign-up' element={<SignUp/>} />
			</Routes>
		</div>
		</Router>
	);
}

export default App;
