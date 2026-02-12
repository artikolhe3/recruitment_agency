import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import './Employers.css';

export default function Employers() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="employers-page container">
                <div className="success-container fade-in">
                    <CheckCircle size={80} color="var(--color-secondary)" />
                    <h1>Request Received!</h1>
                    <p>Thank you for choosing TalentFlow. One of our recruitment specialists will contact you within 24 hours to discuss your hiring needs.</p>
                    <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Submit Another Request</button>
                </div>
            </div>
        );
    }

    return (
        <div className="employers-page">
            <div className="employers-hero">
                <div className="container">
                    <h1>Build Your Dream Team</h1>
                    <p>We specialize in finding candidates that not only match the skills you need but also fit your company culture.</p>
                </div>
            </div>

            <div className="container employers-content">
                <div className="form-wrapper">
                    <h2>Start Hiring</h2>
                    <p className="form-subtitle">Tell us about your needs and we'll handle the rest.</p>

                    <form onSubmit={handleSubmit} className="hiring-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Industry</label>
                                <select>
                                    <option>Technology</option>
                                    <option>Finance</option>
                                    <option>Healthcare</option>
                                    <option>Education</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact Name</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Work Email</label>
                                <input type="email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Roles you are hiring for</label>
                            <textarea rows="3" placeholder="e.g. Senior Product Manager, UX Designer..."></textarea>
                        </div>

                        <div className="form-group">
                            <label>Hiring Timeline</label>
                            <select>
                                <option>Immediately</option>
                                <option>Within 1 month</option>
                                <option>1-3 months</option>
                                <option>Future pipeline</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary full-width">Submit Hiring Request</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
