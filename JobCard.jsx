import { MapPin, DollarSign, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import './JobCard.css';

export default function JobCard({ job }) {
    return (
        <div className="job-card">
            <div className="job-header">
                <div className="company-logo">
                    <img src={job.logo} alt={job.company} />
                </div>
                <div>
                    <h3>{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                </div>
            </div>

            <div className="job-meta">
                <span><MapPin size={16} /> {job.location}</span>
                <span><Briefcase size={16} /> {job.type}</span>
                <span><DollarSign size={16} /> {job.salary}</span>
                <span><Clock size={16} /> {job.posted}</span>
            </div>

            <div className="job-tags">
                {job.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>

            <Link to={`/jobs/${job.id}`} className="btn btn-outline btn-sm job-btn">View Details</Link>
        </div>
    );
}
