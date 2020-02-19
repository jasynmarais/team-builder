import React from 'react';

const TeamMembers = props => {
    return (
        <div>
            {props.teamMembers.map(teamMember => (
                <h5 key={teamMember.id}>
                    {teamMember.name} is a {teamMember.role}.
                </h5>
            ))}
        </div>
    );
};

export default TeamMembers;