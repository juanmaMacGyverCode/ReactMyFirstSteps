import React, { useState } from 'react';

const HandlingForms = () => {
    const [text, setText] = useState('');

    const inputChanged = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        // Esto no funciona y no se por qué
        //alert('You typed: ${text}');
        alert('You typed: ' + text)
        event.preventDefault();
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" onChange={inputChanged} value={text} />
            <input type="submit" value="Press me" />
        </form>
    );
};

export default HandlingForms;