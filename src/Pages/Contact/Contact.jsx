import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const navigate = useNavigate();

    /*===== ContactState =====*/
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert(`Transmission Successful!\nThank you ${contactName}. Your ticket has been logged in our database.`);
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        navigate('/');
    };

    /*===== Particles =====*/
    const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
        , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];

    return (
        <>
            <main className="contact-page">
                <div className="contact-container">
                    {particleClasses.map((pr, index) => (
                        <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
                    ))}
                    <article className="contact-board">
                        <div className="contact-header">
                            <h2 className="contact-title"><i className="bi bi-envelope-check-fill"></i> Secure Message</h2>
                            <div className="contact-line"></div>
                        </div>

                        <form onSubmit={handleContactSubmit} className="contact-form">
                            <div className="contact-form-group floating-group">
                                <input
                                    type="text"
                                    className="contact-form-input"
                                    placeholder=" "
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    required
                                />
                                <label className="contact-form-label">Your Name</label>
                            </div> {/* contact-form-group */}

                            <div className="contact-form-group floating-group">
                                <input
                                    type="email"
                                    className="contact-form-input"
                                    placeholder=" "
                                    value={contactEmail}
                                    onChange={(e) => setContactEmail(e.target.value)}
                                    required
                                />
                                <label className="contact-form-label">Email Address</label>
                            </div> {/* contact-form-group */}

                            <div className="contact-form-group floating-group">
                                <textarea
                                    className="contact-form-textarea"
                                    placeholder=" "
                                    value={contactMessage}
                                    onChange={(e) => setContactMessage(e.target.value)}
                                    required
                                ></textarea>
                                <label className="contact-form-label label-textarea">Secure Message</label>
                            </div> {/* contact-form-group */}

                            <button type="submit" className="contact-btn">
                                <i className="bi bi-send-fill"></i> Send Transmission
                            </button>
                        </form> {/* contact-form */}
                    </article> {/* contact-board */}

                    <aside className="contact-info">
                        <div className="contact-header">
                            <h2 className="contact-title"><i className="bi bi-headset"></i> Direct Channels</h2>
                            <div className="contact-line"></div>
                        </div>

                        <div className="info-channels">
                            <div className="channel-box">
                                <i className="bi bi-telephone-forward-fill"></i>
                                <div>
                                    <h5> Hotline Support </h5>
                                    <p> +963 0934 302 658 </p>
                                    <span> Available 24/7 for hardware emergencies </span>
                                </div>
                            </div>

                            <div className="channel-box">
                                <i className="bi bi-patch-check-fill"></i>
                                <div>
                                    <h5> Corporate Email </h5>
                                    <p> support-JR@technexus.com </p>
                                    <span> Response verified within 2 hours </span>
                                </div>
                            </div>

                            <div className="channel-box">
                                <i className="bi bi-geo-alt-fill"></i>
                                <div>
                                    <h5> Nexus HQ </h5>
                                    <p> Syria, Homs </p>
                                    <span> Akrama </span>
                                </div>
                            </div>

                        </div> {/* info-channels */}

                        <p className="contact-back-home-text">
                            Direct support verified. <Link to="/">Back to Home Page</Link>
                        </p>
                    </aside> {/* contact-info */}

                </div> {/* contact-container */}
            </main> {/* contact-page */}
        </>
    );
}

export default Contact;
