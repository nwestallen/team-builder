//TeamList component
import React, { useState } from 'react';
import styled from 'styled-components';
import Member from './Member'

const TeamList = (props) => {

    const { team } = props;

    const Team = styled.div`
        text-align: left;
        display: flex;
        height: 80vh;
        width: 100%;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-evenly;
    `;

    return(
        <Team>
            {team.map(member => <Member member={member} />)}
        </Team>
    )
}

export default TeamList;
