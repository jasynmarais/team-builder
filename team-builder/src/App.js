import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

// Default State
const initialTeamState = [
  {
    id: uuid(),
    name: 'Babou the Ocelot',
    email: 'babou@cyberdyne.net',
    role: 'Frontend Developer'
  },
  {
    id: uuid(),
    name: 'Mojo the Helper Monkey',
    email: 'mojo@cyberdyne.net',
    role: 'Backend Engineer'
  }
];

const initialFormState = {
  name: '',
  email: '',
  role: ''
};

function App() {
  // Set State for App
  const [teamMembersList, setTeamMembersList] = useState(initialTeamState);
  const [teamMemberForm, setTeamMemberForm] = useState(initialFormState);
  
  // Handler Functions
  const handleNameChange = e => {
    setTeamMemberForm({
      name: e.target.value,
      email: teamMemberForm.email,
      role: teamMemberForm.role
    });
  };

  const handleEmailChange = e => {
    setTeamMemberForm({
      name: teamMemberForm.name,
      email: e.target.value,
      role: teamMemberForm.role
    });
  };

  const handleRoleChange = e => {
    setTeamMemberForm({
      name: teamMemberForm.name,
      email: teamMemberForm.email,
      role: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("Thank you for signing up!");
    const newTeamMember = {
      id: uuid(),
      name: teamMemberForm.name,
      email: teamMemberForm.email,
      role: teamMemberForm.role
    };

    const newTeamMemberList = teamMembersList.concat(newTeamMember);
    setTeamMembersList(newTeamMemberList);
    setTeamMemberForm(initialFormState);
  }

  return (
    <div className="App">
      <h1>Sign Up to be a Member of The Team:</h1>
      <Form 
        teamMembersData={teamMemberForm}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onRoleChange={handleRoleChange}
        onFormSubmit={handleFormSubmit}
      />
      <TeamMembers teamMembers={teamMembersList} />
    </div>
  );
}

export default App;
