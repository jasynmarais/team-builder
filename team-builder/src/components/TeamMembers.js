import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.h4`
    font-size: 1.1rem;
    padding: 0.5rem 0;
    margin: 0;
`;

const TeamMembers = props => {
    return (
        <div>
            <h1>The Team</h1>
            {props.teamMembers.map(teamMember => (
                <StyledHeaders key={teamMember.id}>
                    - {teamMember.name} ({teamMember.email}) is a {teamMember.role}.
                </StyledHeaders>
            ))}
        </div>
    );
};

export default TeamMembers;