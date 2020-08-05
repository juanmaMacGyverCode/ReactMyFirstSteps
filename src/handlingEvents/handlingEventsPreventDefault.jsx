import React from 'react';

const HandlingEventsPreventDefault = () => {
    const handleSubmit = (event) => {
        alert('Form submit');
        // Previene de un comportamiento por defecto (false)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default HandlingEventsPreventDefault;