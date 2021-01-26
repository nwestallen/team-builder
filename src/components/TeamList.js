//TeamList component
import React, { useState } from 'react';
import styled from 'styled-components';

const TeamList = (props) => {

    const { team } = props;

    return(
        <ul>
            {team.map(member => <li>{member}</li>)}
        </ul>
    )
}

export default TeamList;
