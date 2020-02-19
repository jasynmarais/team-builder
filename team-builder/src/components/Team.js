import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.h4`
    font-size: 1.1rem;
    padding: 0.5rem 0;
    margin: 0;
`;

const Team = props => {

    const { teamList } = props;

    return (
        <div>
            <h1>The Team</h1>
        {
          teamList.map(member => (
            <StyledHeaders key={member.id}>
                    - {member.name} ({member.email}) is a {member.role}.
                </StyledHeaders>
          ))
        }
        </div>
    );
};

export default Team;