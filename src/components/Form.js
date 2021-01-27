//Form component
import React, { useState, useEffect } from 'react';
import sytled from 'styled-components';
import TeamList from './TeamList';

const Form = (props) => {

    const { team, setTeam } = props;
    const [member, setMember] = useState({name: 'Frank', email: 'Frank@franknbeans.com', role: 'rhythm'});

    const handleChange = event => setMember({...member, [event.target.name]: event.target.value});

    return (
        <form>
            <label for='nameInput'>Name: </label>
            <input type='text' id='nameInput' name='name' onChange={handleChange} value={member.name}/>
            <label for='emailInput'>Email: </label>
            <input type='text' id='emailInput' name='email' onChange={handleChange} value={member.email}/>
            <button>Submit</button>
            <label for='roleInput'>Role: </label>
            <input type='text' id='roleInput' name='role' onChange={handleChange} value={member.role}/>
        </form>
    )
}

export default Form;