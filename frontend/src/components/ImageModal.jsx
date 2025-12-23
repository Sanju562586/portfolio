import React from 'react';

const ImageModal = ({ isActive, onClose, imgSrc, imgAlt }) => {
    // Don't render anything if modal is not active
    if (!isActive) return null;

    return (
        <>
            <div className="image-modal-overlay active" onClick={onClose}></div>
            <div className="image-modal-container active">
                <div className="image-modal-close-btn" onClick={onClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
        </>
    );
};

export default ImageModal;
