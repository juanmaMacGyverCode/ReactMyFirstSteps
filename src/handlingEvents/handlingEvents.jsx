import React from 'react';

const HandlingEvents = () => {
    const buttonPressed = () => {
        alert('Botón presionado');
    }

    return (
        <div>
            <button onClick={buttonPressed}>Press Me</button>
        </div>
    );
};

export default HandlingEvents;