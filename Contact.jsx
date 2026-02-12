import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h1>Get in Touch</h1>
                        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                        <div className="info-item">
                            <div className="icon-box"><MapPin /></div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>123 Innovation Drive,<br />Tech City, TC 90210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@talentflow.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone /></div>
                            <div>
                                <h3>Call Us</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="map-container">
                            {/* Simple Map Placeholder/Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <h2>Send a Message</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="How can we help?" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Write your message here..."></textarea>
                            </div>
                            <button className="btn btn-primary full-width">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
