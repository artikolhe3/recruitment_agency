import './Footer.css';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>TalentFlow</h3>
                    <p>Connecting top talent with world-class companies.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/jobs">Find Jobs</a></li>
                        <li><a href="/employers">For Employers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TalentFlow. All rights reserved.</p>
            </div>
        </footer>
    );
}
