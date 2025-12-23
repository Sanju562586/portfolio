import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = dotRef.current;
        const cursorOutline = outlineRef.current;

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot && cursorOutline) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Smooth follow for outline
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        const addHoverClass = () => document.body.classList.add('hovered');
        const removeHoverClass = () => document.body.classList.remove('hovered');

        window.addEventListener('mousemove', moveCursor);

        // Add interactivity for links and buttons
        const clickables = document.querySelectorAll('a, button, input, textarea, [data-clickable]');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', addHoverClass);
            el.addEventListener('mouseleave', removeHoverClass);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', addHoverClass);
                el.removeEventListener('mouseleave', removeHoverClass);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef}></div>
            <div className="cursor-outline" ref={outlineRef}></div>
        </>
    );
};

export default Cursor;
