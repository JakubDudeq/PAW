import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <div className="container">
                    <Link to="/">Page_1</Link>
                    <Link to="/page2">Page_2</Link>
                    <Link to="/page3">Page_3</Link>
                </div>

                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
