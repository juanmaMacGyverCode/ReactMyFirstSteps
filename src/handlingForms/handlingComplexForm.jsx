import React, {useState} from 'react';

const HandlingComplexForm = () => {
    const [user, setUser] = useState({firstName: '', lastName: '', email: ''});
    const inputChanged = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }
    
    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First name </label>
            <input type="text" name="firstName" onChange={inputChanged} value={user.firstName} /><br/>
            <label>Last name </label>
            <input type="text" name="lastName" onChange={inputChanged} value={user.lastName} /><br/>
            <input type="submit" value="Press me"/>
        </form>
    );
};

export default HandlingComplexForm;