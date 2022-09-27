import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/InternshipReport' element={<h1>Test</h1>} />
                    <Route path='/InternshipReport/Remerciement' element={<h2>Remerciement</h2>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;