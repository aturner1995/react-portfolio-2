import React from 'react';
import { Navbar, Nav, Image, NavLink } from 'react-bootstrap';
import './styles.css'

const NavTabs = ({ currentPage, handlePageChange }) => {
    return (
        <Navbar expand="lg" className="nav-tabs">
            <NavLink className='ms-5'>
                <Image
                    src="/images/portfolio-logo-2.avif"
                    height="50"
                    className="d-inline-block align-top logo"
                    alt="Aaron Turner Logo"
                />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mx-5">
                    <NavLink
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </NavLink>
                    <NavLink
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavTabs;
