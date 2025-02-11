import React from 'react'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default App