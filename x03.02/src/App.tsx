import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './pages/list';
import Details from './pages/details';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Details />} />
        </Routes>
    </Router>
);

export default App;
