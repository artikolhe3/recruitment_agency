import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="navbar glass">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <Briefcase className="logo-icon" />
                    <span className="logo-text">TalentFlow</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/jobs" className={location.pathname === '/jobs' ? 'active' : ''}>Find Jobs</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </div>

                <div className="nav-actions desktop-only">
                    <Link to="/employers" className="btn btn-outline">Post a Job</Link>
                    <Link to="/jobs" className="btn btn-primary">Find Talent</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu glass">
                        <Link to="/">Home</Link>
                        <Link to="/jobs">Find Jobs</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/employers" className="btn btn-outline">Post a Job</Link>
                        <Link to="/jobs" className="btn btn-primary">Find Talent</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
