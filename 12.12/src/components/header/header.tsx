import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="categoriesContainer">
                <Link to="/" className="nav__link">Home</Link>
                <Link to="/categories" className="nav__link">Kategorie</Link>
                <Link to="/post" className="nav__link">Wpisy</Link>
            </nav>
        </header>
);
};

export default Header;
