import { ArrowRight, CheckCircle, Users, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="fade-in">Connect with World-Class Talent</h1>
                    <p className="fade-in" style={{ animationDelay: '0.1s' }}>
                        We bridge the gap between exceptional candidates and forward-thinking companies.
                        Your next big career move or key hire starts here.
                    </p>
                    <div className="hero-actions fade-in" style={{ animationDelay: '0.2s' }}>
                        <Link to="/jobs" className="btn btn-primary btn-lg">
                            Find a Job <ArrowRight size={20} />
                        </Link>
                        <Link to="/employers" className="btn btn-outline btn-white btn-lg">
                            Hire Talent
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <Users size={40} className="stat-icon" />
                            <h3>10,000+</h3>
                            <p>Candidates Placed</p>
                        </div>
                        <div className="stat-item">
                            <Building size={40} className="stat-icon" />
                            <h3>500+</h3>
                            <p>Partner Companies</p>
                        </div>
                        <div className="stat-item">
                            <Globe size={40} className="stat-icon" />
                            <h3>Global</h3>
                            <p>Reach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction / About Teaser */}
            <section className="intro-section container">
                <div className="intro-grid">
                    <div className="intro-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team collaborating in a modern office"
                            className="intro-image"
                        />
                    </div>
                    <div className="intro-text">
                        <h2>Why Choose TalentFlow?</h2>
                        <p>
                            In today's competitive landscape, finding the right fit goes beyond skills on a resume.
                            We believe in matching culture, vision, and potential.
                        </p>
                        <ul className="feature-list">
                            <li><CheckCircle size={20} color="var(--color-secondary)" /> Curated Talent Pool</li>
                            <li><CheckCircle size={20} color="var(--color-secondary)" /> Rapid Hiring Process</li>
                            <li><CheckCircle size={20} color="var(--color-secondary)" /> Cultural Fit Assessment</li>
                        </ul>
                        <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
                    </div>
                </div>
            </section>

            {/* Categories / Roles */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Trending Job Categories</h2>
                        <p>Explore opportunities in high-demand fields.</p>
                    </div>
                    <div className="categories-grid">
                        {['Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Finance'].map((cat) => (
                            <Link to={`/jobs?category=${cat}`} key={cat} className="category-card">
                                <h3>{cat}</h3>
                                <p>120+ Open Roles</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Ready to Transform Your Workforce?</h2>
                    <p>Join thousands of companies building their dream teams with TalentFlow.</p>
                    <Link to="/employers" className="btn btn-primary btn-lg">Start Hiring Today</Link>
                </div>
            </section>
        </div>
    );
}
