import React from 'react';
import styled from 'styled-components';

const StyledHeaders = styled.h4`
    font-size: 1.1rem;
    padding: 0.5rem 0;
    margin: 0;

    button {
        width: 60px;
        font-size: 1rem;
        background: palevioletred;
        color: white;
        font-weight: bold;
        padding: 0.2rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: ease-in-out 0.1s;

        &:hover {
            transform: scale(1.1);
            transition: ease-in-out 0.1s;
        }
`;

const Team = props => {

    const { teamList, handleClick } = props;

    return (
        <div>
            <h1>Current Members</h1>
        {
          teamList.map(member => (
            <StyledHeaders key={member.id}>
                    - {member.name} ({member.email}) is a {member.role}.
                    <button onClick={() => handleClick(member.id)}>Edit</button>
                </StyledHeaders>
          ))
        }
        </div>
    );
};

export default Team;