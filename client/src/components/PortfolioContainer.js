import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Footer';
import './styles.css'

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;