//Form component
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeamList from './TeamList';

const Form = (props) => {

    const { team, setTeam } = props;
    const [member, setMember] = useState({name: 'Frank', email: 'Frank@franknbeans.com', role: 'rhythm'});

    const handleChange = event => setMember({...member, [event.target.name]: event.target.value});
    const handleSubmit = event => {
        event.preventDefault();
        setTeam([...team, member]);
    };

    const MemberForm = styled.form`
        display: flex;
        flex-flow: column nowrap;
        width: 20%;
        align-items: center;
        margin: auto;
        color: white;
        border: 2px solid white;
        button {
            width: fit-content;
        }
    `;

    return (
        <MemberForm onSubmit={handleSubmit}>
            <h3>Add Member</h3>
            <p>
            <label for='nameInput'>Name: </label>
            <input type='text' id='nameInput' name='name' onChange={handleChange} value={member.name}/>
            </p>
            <p>
            <label for='emailInput'>Email: </label>
            <input type='text' id='emailInput' name='email' onChange={handleChange} value={member.email}/>
            </p>
            <p>
            <label for='roleInput'>Role: </label>
            <input type='text' id='roleInput' name='role' onChange={handleChange} value={member.role}/>
            </p>
            <button>Submit</button>
        </MemberForm>
    )
}

export default Form;