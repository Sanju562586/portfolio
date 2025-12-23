import React from 'react';

const TestimonialsModal = ({ isActive, onClose, content }) => {
    const { name, avatar, text, date } = content;

    return (
        <div className={`modal-container ${isActive ? 'active' : ''}`} data-modal-container>
            <div className={`overlay ${isActive ? 'active' : ''}`} data-overlay onClick={onClose}></div>

            <section className="testimonials-modal">
                <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                        <img src={avatar} alt={name} width="80" data-modal-img />
                    </figure>
                    <img src="/assets/images/icon-quote.svg" alt="quote icon" />
                </div>

                <div className="modal-content">
                    <h4 className="h3 modal-title" data-modal-title>{name}</h4>
                    <time dateTime="2021-06-14">{date || "14 June, 2021"}</time>
                    <div data-modal-text>
                        <p>{text}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsModal;
