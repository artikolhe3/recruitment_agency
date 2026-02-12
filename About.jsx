import './About.css';

export default function About() {
    const team = [
        {
            name: "Sarah Jenkins",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            bio: "Former HR Director with 15+ years of experience in talent acquisition."
        },
        {
            name: "David Chen",
            role: "Head of Recruitment",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            bio: "Specializes in executive search and technical recruiting."
        },
        {
            name: "Emily Rodriguez",
            role: "Talent Specialist",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
            bio: "Passionate about connecting recent graduates with their dream jobs."
        }
    ];

    return (
        <div className="about-page">
            <div className="container">
                <section className="about-mission">
                    <h1>Our Mission</h1>
                    <p className="mission-text">
                        At TalentFlow, we believe that the right job can change a life, and the right person can transform a business.
                        Our mission is to humanize the hiring process, creating meaningful connections that lead to long-term success.
                    </p>
                </section>

                <section className="about-team">
                    <h2>Meet the Team</h2>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-content">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
