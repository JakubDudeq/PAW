import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CategoriesPage from './pages/CategoriesPage';
import './styles/main.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post" element={<PostPage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
