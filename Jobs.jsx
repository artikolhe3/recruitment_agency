import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import JobCard from '../components/jobs/JobCard';
import './Jobs.css';

// Mock Data
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
        tags: ["React", "Node.js", "AWS"]
    },
    {
        id: 2,
        title: "Product Designer",
        company: "Creative Studio",
        logo: "https://images.unsplash.com/photo-1572044162444-ad6021194360?auto=format&fit=crop&w=100&q=80",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$100k - $130k",
        posted: "1 week ago",
        tags: ["Figma", "UI/UX", "Prototyping"]
    },
    {
        id: 3,
        title: "Marketing Manager",
        company: "GrowthX",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&q=80",
        location: "Austin, TX",
        type: "Remote",
        salary: "$90k - $110k",
        posted: "3 days ago",
        tags: ["SEO", "Content Marketing", "Analytics"]
    },
    {
        id: 4,
        title: "Backend Engineer",
        company: "DataFlow",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80",
        location: "London, UK",
        type: "Full-time",
        salary: "£60k - £80k",
        posted: "5 hours ago",
        tags: ["Python", "Django", "PostgreSQL"]
    },
    {
        id: 5,
        title: "Customer Success Lead",
        company: "HappyClients",
        logo: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=100&q=80",
        location: "Remote",
        type: "Part-time",
        salary: "$40k - $60k",
        posted: "1 day ago",
        tags: ["Support", "CRM", "Communication"]
    }
];

export default function Jobs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("All");

    const filteredJobs = MOCK_JOBS.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === "All" || job.type === filterType;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="jobs-page container">
            {/* Header / Search */}
            <div className="jobs-header">
                <h1>Find Your Next Role</h1>
                <div className="search-bar">
                    <Search className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="jobs-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3><Filter size={20} /> Filters</h3>

                        <div className="filter-section">
                            <h4>Job Type</h4>
                            <label><input type="radio" name="type" checked={filterType === "All"} onChange={() => setFilterType("All")} /> All Types</label>
                            <label><input type="radio" name="type" checked={filterType === "Full-time"} onChange={() => setFilterType("Full-time")} /> Full-time</label>
                            <label><input type="radio" name="type" checked={filterType === "Part-time"} onChange={() => setFilterType("Part-time")} /> Part-time</label>
                            <label><input type="radio" name="type" checked={filterType === "Remote"} onChange={() => setFilterType("Remote")} /> Remote</label>
                        </div>
                    </div>
                </aside>

                {/* Job List */}
                <div className="jobs-list">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => <JobCard key={job.id} job={job} />)
                    ) : (
                        <div className="no-results">
                            <p>No jobs found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
