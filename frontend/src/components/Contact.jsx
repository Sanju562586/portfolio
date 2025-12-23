import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullname, email, message })
            });

            const data = await res.json();

            if (data.success) {
                alert("Message sent successfully!");
                setFullname('');
                setEmail('');
                setMessage('');
            } else {
                alert("Failed to send message. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Unable to reach server. Please try later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.article
            className="contact active"
            data-page="contact"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.5 }}
        >
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.095139808236!2d78.3961913!3d17.378524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96fec0a9b5fd%3A0xe777ffcf57fd8e6d!2sLangar%20Houz%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000"
                        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                    <figcaption>Map showing Langar House, Hyderabad, Telangana</figcaption>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form className="form" data-form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            data-form-input
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            data-form-input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        data-form-input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button className="form-btn" type="submit" disabled={isSubmitting || !fullname || !email || !message} data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </section>
        </motion.article>
    );
};

export default Contact;
