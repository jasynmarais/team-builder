import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.h4`
    font-size: 1.3rem;
    padding: 1rem 0;
    margin: 0;
`;

const TeamMembers = props => {
    return (
        <div>
            {props.teamMembers.map(teamMember => (
                <StyledHeaders key={teamMember.id}>
                    {teamMember.name} is a {teamMember.role}.
                </StyledHeaders>
            ))}
        </div>
    );
};

export default TeamMembers;