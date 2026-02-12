import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Briefcase, ChevronLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import './JobDetails.css';

// Mock Data (Duplicated for simplicity in this prototype)
const MOCK_JOBS = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechNova",
        logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&q=80",
        location: "New York, NY (Remote)",
        type: "Full-time",
        salary: "$120k - $150k",
        posted: "2 days ago",
        description: `We are looking for an experienced React Developer to join our dynamic team. You will be responsible for building high-performance web applications and collaborating with cross-functional teams to define, design, and ship new features.

    Responsibilities:
    - Develop new user-facing features using React.js
    - Build reusable components and front-end libraries for future use
    - Translate designs and wireframes into high-quality code
    - Optimize components for maximum performance across a vast array of web-capable devices and browsers

    Requirements:
    - Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
    - Thorough understanding of React.js and its core principles
    - Experience with popular React.js workflows (such as Flux or Redux)
    - Familiarity with newer specifications of EcmaScript
    - Experience with data structure libraries (e.g., Immutable.js)
    `
    },
    // Add more if needed, but for prototype ID 1 is sufficient target
];

export default function JobDetails() {
    const { id } = useParams();
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [applicationSent, setApplicationSent] = useState(false);

    // Default to first job if ID not found or strictly matching
    const job = MOCK_JOBS.find(j => j.id === parseInt(id)) || MOCK_JOBS[0];

    const handleApply = (e) => {
        e.preventDefault();
        setApplicationSent(true);
        setTimeout(() => {
            setShowApplyModal(false);
            setApplicationSent(false);
        }, 3000);
    };

    return (
        <div className="job-details-page container">
            <Link to="/jobs" className="back-link"><ChevronLeft size={20} /> Back to Jobs</Link>

            <div className="job-details-header">
                <div className="header-main">
                    <img src={job.logo} alt={job.company} className="company-logo-large" />
                    <div>
                        <h1>{job.title}</h1>
                        <p className="company-name-large">{job.company}</p>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg" onClick={() => setShowApplyModal(true)}>Apply Now</button>
            </div>

            <div className="job-meta-grid">
                <div className="meta-item">
                    <MapPin className="meta-icon" />
                    <span>{job.location}</span>
                </div>
                <div className="meta-item">
                    <Briefcase className="meta-icon" />
                    <span>{job.type}</span>
                </div>
                <div className="meta-item">
                    <DollarSign className="meta-icon" />
                    <span>{job.salary}</span>
                </div>
                <div className="meta-item">
                    <Clock className="meta-icon" />
                    <span>Posted {job.posted}</span>
                </div>
            </div>

            <div className="job-content">
                <h2>Job Description</h2>
                <div className="description-text">
                    {job.description.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>

            {showApplyModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setShowApplyModal(false)}>×</button>
                        {applicationSent ? (
                            <div className="success-message">
                                <CheckCircle size={64} color="var(--color-secondary)" />
                                <h3>Application Sent!</h3>
                                <p>Good luck! We'll be in touch soon.</p>
                            </div>
                        ) : (
                            <>
                                <h2>Apply for {job.title}</h2>
                                <form onSubmit={handleApply} className="apply-form">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" required placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" required placeholder="john@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Resume / CV Link</label>
                                        <input type="url" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                    <div className="form-group">
                                        <label>Cover Letter</label>
                                        <textarea rows="4" placeholder="Tell us why you're a great fit..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary full-width">Submit Application</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
