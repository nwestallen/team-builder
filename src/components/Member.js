//Member component
import React from 'react';
import styled from 'styled-components';

const Member = (props) => {
    const { member } = props

    const MemberCard = styled.div`
        background-color: steelblue;
        display: flex;
        flex-flow: row nowrap;
        width: 600px;
        justify-content: flex-start;
        border: 10px solid #282c34;
        padding: 4px;
    `;

    const MemberPortrait = styled.img`
        border: solid 4px white;
        width: 150px;
        height: 150px;
    `;

    const MemberInfo = styled.div`
        font-size: 24px;
        color: white;
        margin-left: 50px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;

        p {
            margin: 0;
            text-shadow: 0.5px 0.5px grey;
        }
    `;

    return(
        <MemberCard>
            <MemberPortrait src='' alt={member.name} />
            <MemberInfo>
                <p>Name: {member.name}</p>
                <p>Email: {member.email}</p>
                <p>Role: {member.role}</p>
            </MemberInfo>
        </MemberCard>
    )
}

export default Member;